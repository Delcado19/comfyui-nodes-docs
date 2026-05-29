
# Documentation
- Class name: ImageFilterSharpen
- Category: image/filter
- Output node: False

The ImageFilterSharpen node applies a sharpening filter to an image, enhancing image details to make it look clearer and sharper.

# Input types
## Required
- images
    - Image to be sharpened. This input is crucial for defining the visual content that will be enhanced to become clearer and sharper.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - Image processed after applying the sharpening filter, resulting in enhanced sharpness and detail.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [SaveImageExtended](../../save-image-extended-comfyui/Nodes/SaveImageExtended.md)
    - [PlaySound|pysssss](../../ComfyUI-Custom-Scripts/Nodes/PlaySound|pysssss.md)



## Source code
```python
class ImageFilterSharpen:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images):
        return applyImageFilter(images, ImageFilter.SHARPEN)

```
