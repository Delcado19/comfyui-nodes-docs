
# Documentation
- Class name: ImageScaleDownToSize
- Category: Art Venture/Utils
- Output node: False

The ImageScaleDownToSize node is designed to scale images down to a specific size while maintaining their aspect ratio. It offers modes based on maximum or minimum dimensions for scaling, ensuring flexibility when reducing image size.

# Input types
## Required
- images
    - The images parameter represents the collection of images to be scaled down. It is crucial for defining the input images that will undergo scaling.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size
    - The size parameter specifies the target size to which the images will be scaled down. It plays a key role in determining the new dimensions of the images.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The mode parameter determines whether the maximum or minimum dimension of the image is considered during scaling. This choice affects how the aspect ratio is maintained during the scaling process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The output is an image tensor scaled down to the specified size while maintaining its aspect ratio.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilImageScaleDownToSize(UtilImageScaleDownBy):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "size": ("INT", {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 1}),
                "mode": ("BOOLEAN", {"default": True, "label_on": "max", "label_off": "min"}),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "image_scale_down_to_size"

    def image_scale_down_to_size(self, images, size, mode):
        width = images.shape[2]
        height = images.shape[1]

        if mode:
            scale_by = size / max(width, height)
        else:
            scale_by = size / min(width, height)

        scale_by = min(scale_by, 1.0)
        return self.image_scale_down_by(images, scale_by)

```
