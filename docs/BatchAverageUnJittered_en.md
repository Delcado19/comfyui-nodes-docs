
# Documentation
- Class name: `BatchAverageUnJittered`
- Category: `image/filters/jitter`
- Output node: `False`

The BatchAverageUnJittered node processes a batch of images by applying a mean or median operation to reduce jitter effects. It operates on sub-batches of images, applying the specified operation to create smoother, more stable output images.

# Input types
## Required
- images
    - The batch of images to be processed. This input is critical for determining the set of images to which the mean or median operation will be applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- operation
    - Specifies the operation to apply to the images ('mean' or 'median'). This choice affects the jitter reduction method and the final appearance of the output images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The batch of images after the specified mean or median operation has been applied to reduce jitter effects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BatchAverageUnJittered:
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

    CATEGORY = "image/filters/jitter"

    def apply(self, images, operation):
        t = images.detach().clone()
        
        batch = []
        for i in range(t.shape[0] // 9):
            if operation == "mean":
                batch.append(torch.mean(t[i*9:i*9+9], dim=0, keepdim=True))
            elif operation == "median":
                batch.append(torch.median(t[i*9:i*9+9], dim=0, keepdim=True)[0])
        
        return (torch.cat(batch, dim=0),)

```
