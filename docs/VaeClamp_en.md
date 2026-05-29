
# Documentation
- Class name: VaeClamp
- Category: clamp
- Output node: False

The VaeClamp node is designed to pass through a Variational Autoencoder (VAE) model without any modifications. It serves as a utility in processing pipelines, ensuring compatibility or enforcing constraints without altering the VAE model itself.

# Input types
## Required
- vae
    - The 'vae' input is a Variational Autoencoder (VAE) model. This node receives the model as input and returns it as-is. It is essential for maintaining the integrity of the VAE model within processing pipelines.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE

# Output types
- vae
    - Returns the unmodified Variational Autoencoder (VAE) model passed into the node.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class VaeClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "vae": ("VAE",),
            }
        }

    RETURN_TYPES = ("VAE",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, vae):
        return (vae,)

```
