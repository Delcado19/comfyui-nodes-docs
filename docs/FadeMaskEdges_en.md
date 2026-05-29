
# Documentation
- Class name: FadeMaskEdges
- Category: Bmad/CV/Misc
- Output node: False
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

The FadeMaskEdges node is primarily used to premultiply and alpha blend the edges of the image subject to prevent external pixel bleed-in. This is especially useful for stylized subjects such as drawings with black outlines, optimizing the blending between the subject and background by allowing different edge fade effects.

# Input types
## Required
- binary_image
    - The binary image to be processed, mainly for premultiplication and alpha blending of its edges.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- edge_size
    - Defines the size of the edge fade, affecting the degree of blending between the subject edge and the background.
    - Comfy dtype: FLOAT
    - Python dtype: float
- edge_tightness
    - Controls the tightness of the edge fade, affecting the smoothness of the transition from subject to background.
    - Comfy dtype: FLOAT
    - Python dtype: float
- edge_exponent
    - Determines the fade curve, allowing custom edge transition effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothing_diameter
    - Specifies the diameter of edge smoothing, used to optimize the blending effect after premultiplication and alpha settings.
    - Comfy dtype: INT
    - Python dtype: int
- paste_original_blacks
    - Boolean flag indicating whether to paste the original black pixels back into the image, helping maintain the integrity of the subject.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The processed image with premultiplied and alpha-blended edges, ready for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FadeMaskEdges:
    """
    The original intent is to premultiply and alpha blend a subject's edges to avoid outer pixels creeping in.

    A very slight blur near the edges afterwards when using paste_original_blacks and low tightness may be required,
     but this should be done after premultiplying and setting the alpha.

    Stylized subject's, such as drawings with black outlines, may benefit from using different 2 edge fades:
        1. a fade with higher edge size for the premultiplication, fading the subject into blackness
        2. a tighter fade for the alpha
    """

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "binary_image": ("IMAGE",),
                "edge_size": ("FLOAT", {"default": 5.0, "min": 1.0, "step": 1.0}),
                # how quick does it fade to black
                "edge_tightness": ("FLOAT", {"default": 1.1, "min": 1.0, "max": 10.0, "step": 0.05}),
                # how does it fade, may be used to weaken small lines; 1 = linear transition
                "edge_exponent": ("FLOAT", {"default": 1, "min": 0.1, "max": 10.0, "step": 0.1}),
                "smoothing_diameter": ("INT", {"default": 10, "min": 2, "max": 256, "step": 1}),
                "paste_original_blacks": ("BOOLEAN", {"default": True})
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "apply"
    CATEGORY = "Bmad/CV/Misc"

    def apply(self, binary_image, edge_size, edge_tightness, edge_exponent, smoothing_diameter, paste_original_blacks):
        binary_image = tensor2opencv(binary_image, 1)
        # _, binary_image = cv.threshold(gray_image, 128, 255, cv.THRESH_BINARY) # suppose it's already binary

        # compute L2 (euclidean) distance -> normalize with respect to edge size -> smooth
        distance_transform = cv.distanceTransform(binary_image, cv.DIST_L2, cv.DIST_MASK_3)
        normalized_distance = distance_transform / edge_size
        smoothed_distance = cv.bilateralFilter(normalized_distance, smoothing_diameter, 75, 75)

        # darken the white pixels based on smoothed distance and "edge tightness"
        diff = 1 - smoothed_distance
        darkened_image = (abs(diff * edge_tightness) ** (1 / edge_exponent)) * np.sign(diff)
        darkened_image = np.clip(darkened_image, 0, 1)
        darkened_image = (darkened_image * 255).astype(np.uint8)

        if paste_original_blacks:  # mask original black pixels
            black_mask = binary_image < 1
            darkened_image[black_mask] = 0

        output_image = binary_image - darkened_image  # darken original image
        output_image = opencv2tensor(output_image)
        return (output_image,)

```
