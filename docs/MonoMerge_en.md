
# Documentation
- Class name: MonoMerge
- Category: Bmad/image
- Output node: False

The MonoMerge node merges two images into a single monochrome image based on a target color scheme (biased toward white or black). This process compares the brightness of corresponding pixels from both images, selecting pixels that align with the target color scheme to create a new image that highlights the bright or dark features of the merged images.

# Input types
## Required
- image1
    - The first image to merge. Plays a key role in the merge process; its pixels are compared against the second image's pixels to determine the final image based on the target color scheme.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The second image to merge. Equally important as the first image; its pixels are compared against the first image's pixels to create the final monochrome image based on the target color scheme.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target
    - Specifies the target color scheme for merging, either 'white' or 'black'. This determines whether the merge emphasizes the bright or dark areas of the images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_format
    - Defines the output format of the merged image, providing flexibility for how the result is used or displayed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is a monochrome image that combines elements from the input images according to the specified target color scheme, emphasizing either bright or dark tones.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MonoMerge:
    target = ["white", "black"]

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image1": ("IMAGE",),
                "image2": ("IMAGE",),
                "target": (s.target, {"default": "white"}),
                "output_format": (image_output_formats_options, {
                    "default": image_output_formats_options[0]
                })
                ,
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "monochromatic_merge"
    CATEGORY = "Bmad/image"

    def monochromatic_merge(self, image1, image2, target, output_format):
        image1 = tensor2opencv(image1, 1)
        image2 = tensor2opencv(image2, 1)

        # Select the lesser L component at each pixel
        if target == "white":
            image = np.maximum(image1, image2)
        else:
            image = np.minimum(image1, image2)

        image = maybe_convert_img(image, 1, image_output_formats_options_map[output_format])
        image = opencv2tensor(image)

        return (image,)

```
