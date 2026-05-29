
# Documentation
- Class name: ImageContainerInheritanceScale
- Category: image/container
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageContainerInheritanceScale node is designed to resize images based on specified width and height scaling factors. It not only adjusts the dimensions of the input image but also applies additional image processing operations through subsequent nodes, such as color adjustment. This node plays a critical role in image preprocessing and post-processing, enabling flexible image resizing and basic color correction.

# Input types
## Required
- images
    - The input image that needs to be scaled. This parameter is essential as it provides the raw data for the scaling operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- scale_width
    - The scaling factor for the input image width. This directly affects the final image width.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_height
    - The scaling factor for the input image height. This directly affects the final image height.
    - Comfy dtype: FLOAT
    - Python dtype: float
- red
    - The red component applied to the image. This affects the overall color balance of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The green component applied to the image. This affects the overall color balance of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The blue component applied to the image. This affects the overall color balance of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The alpha (transparency) value applied to the image. This determines the opacity of the output image.
    - Comfy dtype: FLOAT
    - Python dtype: int
- method
    - The method used for scaling and applying color adjustments. This parameter determines the specific algorithm or technique used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The node's output is one or a set of images that have been scaled and color-adjusted according to the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageContainerInheritanceScale:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "scale_width": ("FLOAT", {
                    "default": 1.0,
                    "step": 0.1
                }),
                "scale_height": ("FLOAT", {
                    "default": 1.0,
                    "step": 0.1
                }),
                "red": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "green": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "blue": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "alpha": ("FLOAT", {
                    "default": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "method": (["single", "for_each"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/container"

    def node(self, images, scale_width, scale_height, red, green, blue, alpha, method):
        height, width = images[0, :, :, 0].shape

        width = int((width * scale_width) - width)
        height = int((height * scale_height) - height)

        return ImageContainerInheritanceAdd() \
            .node(images, width, height, red, green, blue, alpha, method)

```
