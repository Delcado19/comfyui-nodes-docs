
# Documentation
- Class name: ImageScaleToMegapixels
- Category: Art Venture/Utils
- Output node: False

The ImageScaleToMegapixels node resizes an image so its total pixel count matches a specified megapixel target. Whether upscaling or downscaling, it uses various upscaling methods to achieve the desired image quality and size, ensuring the final image maintains its aspect ratio while meeting the specified megapixel count.

# Input types
## Required
- images
    - The input image to be resized. This parameter is critical as it serves as the basis for the scaling operation, determining the starting point for any upscaling or downscaling needed to achieve the target megapixel size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- megapixels
    - Defines the target size of the image in megapixels, guiding the scaling process to increase or decrease the image dimensions to meet this specification.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- upscale_model_opt
    - Optionally specifies an upscaling model for enlarging the image, allowing advanced customization of the scaled image's quality and appearance. This parameter affects the visual outcome of the resized image when upscaling beyond a certain threshold.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: str

# Output types
- image
    - The resized image, adjusted to match the specified megapixel count. This output is the direct result of the scaling operation, reflecting the dimensional changes and potentially reflecting quality changes based on the chosen upscaling method.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilImageScaleToTotalPixels(UtilImageScaleDownBy, ImageUpscaleWithModel):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "megapixels": ("FLOAT", {"default": 1, "min": 0.1, "max": 100, "step": 0.05}),
            },
            "optional": {
                "upscale_model_opt": ("UPSCALE_MODEL",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "image_scale_down_to_total_pixels"

    def image_scale_up_by(self, images: torch.Tensor, scale_by, upscale_model_opt):
        width = round(images.shape[2] * scale_by)
        height = round(images.shape[1] * scale_by)

        if scale_by < 1.2 or upscale_model_opt is None:
            s = images.movedim(-1, 1)
            s = comfy.utils.common_upscale(s, width, height, "bicubic", "disabled")
            s = s.movedim(1, -1)
            return (s,)
        else:
            s = self.upscale(upscale_model_opt, images)[0]
            return self.image_scale_down(s, width, height, "center")

    def image_scale_down_to_total_pixels(self, images, megapixels, upscale_model_opt=None):
        width = images.shape[2]
        height = images.shape[1]
        scale_by = np.sqrt((megapixels * 1024 * 1024) / (width * height))

        if scale_by <= 1.0:
            return self.image_scale_down_by(images, scale_by)
        else:
            return self.image_scale_up_by(images, scale_by, upscale_model_opt)

```
