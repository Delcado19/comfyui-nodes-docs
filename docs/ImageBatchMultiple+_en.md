
# Documentation
- Class name: ImageBatchMultiple+
- Category: essentials
- Output node: False
- Repo Ref: https://github.com/shleemr/ComfyUI-Custom-Nodes

The ImageBatchMultiple+ node merges multiple images into a single batch, facilitating batch image processing. It abstracts the complexity of handling various image formats and sizes, ensuring compatibility for batch operations.

# Input types
## Required
- image_i
    - Represents the images to be included in the batch. Their format and size are adjusted as needed to ensure compatibility with other images in the batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - Specifies the method for merging images into the batch, ensuring consistency and compatibility of all images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional

# Output types
- image
    - The output is a batch of images combined from the input images. This batch can be used for further image processing or analysis tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageBatchMultiple:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image_1": ("IMAGE",),
                "image_2": ("IMAGE",),
                "method": (["nearest-exact", "bilinear", "area", "bicubic", "lanczos"], { "default": "lanczos" }),
            }, "optional": {
                "image_3": ("IMAGE",),
                "image_4": ("IMAGE",),
                "image_5": ("IMAGE",),
            },
        }
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"
    CATEGORY = "essentials"

    def execute(self, image_1, image_2, method, image_3=None, image_4=None, image_5=None):
        if image_1.shape[1:] != image_2.shape[1:]:
            image_2 = comfy.utils.common_upscale(image_2.movedim(-1,1), image_1.shape[2], image_1.shape[1], method, "center").movedim(1,-1)
        out = torch.cat((image_1, image_2), dim=0)

        if image_3 is not None:
            if image_1.shape[1:] != image_3.shape[1:]:
                image_3 = comfy.utils.common_upscale(image_3.movedim(-1,1), image_1.shape[2], image_1.shape[1], method, "center").movedim(1,-1)
            out = torch.cat((out, image_3), dim=0)
        if image_4 is not None:
            if image_1.shape[1:] != image_4.shape[1:]:
                image_4 = comfy.utils.common_upscale(image_4.movedim(-1,1), image_1.shape[2], image_1.shape[1], method, "center").movedim(1,-1)
            out = torch.cat((out, image_4), dim=0)
        if image_5 is not None:
            if image_1.shape[1:] != image_5.shape[1:]:
                image_5 = comfy.utils.common_upscale(image_5.movedim(-1,1), image_1.shape[2], image_1.shape[1], method, "center").movedim(1,-1)
            out = torch.cat((out, image_5), dim=0)
        
        return (out,)

```
