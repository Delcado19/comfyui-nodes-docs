
# Documentation
- Class name: ChangeLatentBatchSize __Inspire
- Category: InspirePack/Util
- Output node: False

Modifies the batch size of a given latent representation. Adjusts tensors linked to latent samples using the specified new batch size and pattern, preserving structure while adapting to the new batch size.

# Input types
## Required
- latent
    - Requires a resized latent representation. Maintaining data integrity is critical when adjusting batch size.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- batch_size
    - Target batch size for the latent representation, directly influencing the resizing operation.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - Determines the resizing method, providing flexibility for how batch size adjustments are performed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- latent
    - Resized latent representation now matches the specified batch size.
    - Comfy dtype: LATENT
    - Python dtype: Tuple[Dict[str, torch.Tensor]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ChangeLatentBatchSize:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                                "latent": ("LATENT",),
                                "batch_size": ("INT", {"default": 1, "min": 1, "max": 4096, "step": 1}),
                                "mode": (["simple"],)
                            }
                }

    CATEGORY = "InspirePack/Util"

    RETURN_TYPES = ("LATENT", )
    FUNCTION = "doit"

    @staticmethod
    def doit(latent, batch_size, mode):
        res_latent = latent.copy()
        samples = res_latent['samples']
        samples = ChangeImageBatchSize.resize_tensor(samples, batch_size, mode)
        res_latent['samples'] = samples
        return (res_latent,)

```
