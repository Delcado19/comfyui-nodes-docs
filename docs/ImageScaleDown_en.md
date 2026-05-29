
# Documentation
- Class name: ImageScaleDown
- Category: Art Venture/Utils
- Output node: False

The ImageScaleDown node reduces one or a batch of images to smaller dimensions while preserving aspect ratio, optionally performing center cropping to fit specified size. This operation optimizes image processing workflows, reduces computational load, and prepares images for further processing or display.

# Input types
## Required
- images
- Input images to be downscaled. This parameter is critical because it directly influences the output and determines which images undergo scaling.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
- Target width of the downscaled image. This parameter defines the horizontal size of the output image and affects the scaling ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
- Target height of the downscaled image. This parameter defines the vertical size of the output image and affects the scaling ratio.
    - Comfy dtype: INT
    - Python dtype: int
- crop
- Mode specifying whether and how the image should be cropped after scaling to ensure it fits the target dimensions. This influences the final appearance of the scaled image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
- Downscaled image, possibly cropped to fit the specified dimensions. This output is the direct result of applying the scaling operation to the input images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilImageScaleDown:
    crop_methods = ["disabled", "center"]

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "width": (
                    "INT",
                    {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 1},
                ),
                "height": (
                    "INT",
                    {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 1},
                ),
                "crop": (s.crop_methods,),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "image_scale_down"

    def image_scale_down(self, images, width, height, crop):
        if crop == "center":
            old_width = images.shape[2]
            old_height = images.shape[1]
            old_aspect = old_width / old_height
            new_aspect = width / height
            x = 0
            y = 0
            if old_aspect > new_aspect:
                x = round((old_width - old_width * (new_aspect / old_aspect)) / 2)
            elif old_aspect < new_aspect:
                y = round((old_height - old_height * (old_aspect / new_aspect)) / 2)
            s = images[:, y : old_height - y, x : old_width - x, :]
        else:
            s = images

        results = []
        for image in s:
            img = tensor2pil(image).convert("RGB")
            img = img.resize((width, height), Image.LANCZOS)
            results.append(pil2tensor(img))

        return (torch.cat(results, dim=0),)

```
