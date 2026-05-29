
# Documentation
- Class name: DF_Image_scale_by_ratio
- Category: Derfuu_Nodes/Modded nodes/Image
- Output node: False

This node aims to upscale an image by a specified ratio, applying the selected upscaling method, and optionally cropping the image. It primarily focuses on resizing the image based on a scaling factor, improving image quality or fitting it to a desired size while maintaining its aspect ratio.

# Input types
## Required
- image
    - The image to be upscaled. It is the core of the node's operation, determining the basis for scaling and the target of the upscaling process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_by
    - The factor by which the image dimensions should be increased. This value directly affects the final size of the upscaled image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_method
    - The method used to upscale the image. Different methods affect the quality and characteristics of the upscaled image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- crop
    - Determines whether and how the upscaled image is cropped, affecting the final composition and aspect ratio of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The upscaled version of the input image, possibly cropped according to the specified method.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageScale_Ratio:
    scale_methods = scale_methods
    crop_methods = ["disabled", "center"]

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": Field.image(),
                "upscale_by": Field.float(),
                "upscale_method": Field.combo(cls.scale_methods),
                "crop": Field.combo(cls.crop_methods)
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "upscale"

    CATEGORY = TREE_IMAGES

    def upscale(self, image, upscale_method, upscale_by, crop):
        size = get_image_size(image)

        width_B = int(size[0])
        height_B = int(size[1])

        samples = image.movedim(-1, 1)

        height = math.ceil(height_B * upscale_by)
        width = math.ceil(width_B * upscale_by)
        cls = common_upscale(samples, width, height, upscale_method, crop)
        cls = cls.movedim(1, -1)
        return (cls,)

```
