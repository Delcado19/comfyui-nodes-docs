
# Documentation
- Class name: UpscaleModelClamp
- Category: clamp
- Output node: False

The UpscaleModelClamp node is designed to pass an upsampling model unchanged, serving as a placeholder or checkpoint in processing flows that involve model operations.

# Input types
## Required
- upscale_model
    - The upsampling model to be passed through this node. It acts as a direct input, usable for potential further processing or utilization within the pipeline.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: torch.nn.Module

# Output types
- upscale_model
    - The unaltered upsampling model input to the node, facilitating seamless integration into subsequent pipeline stages.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UpscaleModelClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "upscale_model": ("UPSCALE_MODEL",),
            },
        }

    RETURN_TYPES = ("UPSCALE_MODEL",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, upscale_model):
        return (upscale_model,)

```
