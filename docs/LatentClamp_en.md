
# Documentation
- Class name: LatentClamp
- Category: clamp
- Output node: False

The LatentClamp node is designed to pass the latent representation without any modification. It acts as a placeholder or checkpoint in the pipeline, ensuring the latent data structure is preserved for subsequent processing steps.

# Input types
## Required
- latent
    - The latent parameter represents the latent data structure to be passed through. Maintaining its integrity during operations or analysis of the latent representation is critical for preserving data flow consistency.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latent
    - Returns the unmodified latent data structure, ensuring continuity in processing pipelines where the latent representation is essential.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LatentClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "latent": ("LATENT",),
            },
        }

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, latent):
        return (latent,)

```
