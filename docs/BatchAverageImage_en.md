
# Documentation
- Class name: BatchAverageImage
- Category: image/filters
- Output node: False

The BatchAverageImage node performs statistical averaging on a batch of images, such as computing the mean or median. This process creates a single representative image from a set by calculating the pixel-wise mean or median across all images in the batch.

# Input types
## Required
- images
    - The collection of images to process. This parameter is essential for determining the input data on which the averaging operation will be performed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- operation
    - The type of averaging operation to apply to the image batch, such as "mean" or "median". This choice directly affects the resulting output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output image obtained after applying the specified averaging operation to the input batch. It represents a statistical summary of the input batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BatchAverageImage:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "operation": (["mean", "median"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "apply"

    CATEGORY = "image/filters"

    def apply(self, images, operation):
        t = images.detach().clone()
        if operation == "mean":
            return (torch.mean(t, dim=0, keepdim=True),)
        elif operation == "median":
            return (torch.median(t, dim=0, keepdim=True)[0],)
        return(t,)

```
