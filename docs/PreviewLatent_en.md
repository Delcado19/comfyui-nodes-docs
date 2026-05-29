
# Documentation
- Class name: PreviewLatent
- Category: latent
- Output node: True

The PreviewLatent node provides a mechanism to generate visual previews of latent representations. It utilizes a base model and optional parameters to produce images that visually illustrate the information encoded in the latent space.

# Input types
## Required
- latent
    - The latent representation to be visualized. This is the core input for generating preview images.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latent
    - Returns the same latent input, allowing for further processing or analysis of the latent.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class PreviewLatent(PreviewLatentAdvanced):
    @classmethod
    def INPUT_TYPES(cls):
        return {"required":
                    {"latent": ("LATENT",),
                     },
                "hidden": {"prompt": "PROMPT",
                           "extra_pnginfo": "EXTRA_PNGINFO",
                           "my_unique_id": "UNIQUE_ID",},
                }

    RETURN_TYPES = ("LATENT",)
    RETURN_NAMES = ("latent",)
    OUTPUT_NODE = True
    FUNCTION = "lpreview_basic"
    CATEGORY = "latent"

    def lpreview_basic(self, latent, prompt=None, extra_pnginfo=None, my_unique_id=None):
        return PreviewLatentAdvanced().lpreview(latent=latent, base_model="SD15", preview_method="auto", prompt=prompt, extra_pnginfo=extra_pnginfo, my_unique_id=my_unique_id)

```
