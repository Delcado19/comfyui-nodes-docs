
# Documentation
- Class name: ImageFilterBilateralBlur
- Category: image/filter
- Output node: False

The ImageFilterBilateralBlur node applies bilateral filtering to an image, a process that reduces noise while preserving edge sharpness. It achieves this by considering both spatial proximity and pixel value differences simultaneously.

# Input types
## Required
- images
    - The image to be processed. This is the key input defining which visual content the bilateral filter will be applied to.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size
    - Specifies the diameter of the neighborhood of each pixel used during filtering. A larger size means more pixels are considered for each target pixel, potentially resulting in stronger smoothing.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_color
    - Controls the extent to which the image's color space influences the bilateral filter. Higher values allow pixels with larger intensity differences to influence each other.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sigma_intensity
    - Determines the range of intensity (brightness) differences in the image that influence the bilateral filter. Higher values cause more pixels to influence each other based on their intensity differences.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The resulting image after applying the bilateral blur filter, designed to reduce noise while preserving edges.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterBilateralBlur:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "size": ("INT", {
                    "default": 10,
                    "min": 1,
                    "step": 2
                }),
                "sigma_color": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "sigma_intensity": ("FLOAT", {
                    "default": 1.0,
                    "max": 1.0,
                    "step": 0.01
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images, size, sigma_color, sigma_intensity):
        size -= 1

        return (cv2_layer(images, lambda x: cv2.bilateralFilter(x, size, 100 - sigma_color * 100, sigma_intensity * 100)),)

```
