
# Documentation
- Class name: ChangeImageBatchSize __Inspire
- Category: InspirePack/Util
- Output node: False

The ChangeImageBatchSize node aims to adjust the image tensor batch size to a specified size, extending or cropping the batch via a simple mode to reach the desired count. This functionality is critical for ensuring image data is correctly formatted for batch processing in various image processing and generation tasks.

# Input types
## Required
- image
    - Image tensors that need resizing. This is critical for batch processing that requires adjusting batch size to meet specific requirements.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- batch_size
    - Target batch size for the image tensor, determining how the tensor will be resized.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - Mode for resizing, currently supporting the \"simple\" method for extending or cropping tensors.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Image tensor with adjusted batch size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ChangeImageBatchSize:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                                "image": ("IMAGE",),
                                "batch_size": ("INT", {"default": 1, "min": 1, "max": 4096, "step": 1}),
                                "mode": (["simple"],)
                            }
                }

    CATEGORY = "InspirePack/Util"

    RETURN_TYPES = ("IMAGE", )
    FUNCTION = "doit"

    @staticmethod
    def resize_tensor(input_tensor, batch_size, mode):
        if mode == "simple":
            if len(input_tensor) < batch_size:
                last_frame = input_tensor[-1].unsqueeze(0).expand(batch_size - len(input_tensor), -1, -1, -1)
                output_tensor = torch.concat((input_tensor, last_frame), dim=0)
            else:
                output_tensor = input_tensor[:batch_size, :, :, :]
            return output_tensor
        else:
            print(f"[WARN] ChangeImage(Latent)BatchSize: Unknown mode `{mode}` - ignored")
            return input_tensor

    @staticmethod
    def doit(image, batch_size, mode):
        res = ChangeImageBatchSize.resize_tensor(image, batch_size, mode)
        return (res,)

```
