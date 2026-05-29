
# Documentation
- Class name: AdainLatent
- Category: latent/filters
- Output node: False

The AdainLatent node is designed to perform adaptive instance normalization on latent representations. It achieves this by aligning the mean and standard deviation of the target latent space with those of the reference latent space, modulated by a specified factor. This process helps transfer the style characteristics of the reference latent space to the target latent space, enabling style manipulation and consistency in generative models.

# Input types
## Required
- latents
    - The target latent representation to be normalized. This input is essential for determining the underlying content or structure upon which the style characteristics of the reference latent space will be imposed.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- reference
    - The reference latent representation that provides the style characteristics to be transferred. This input is essential for defining the style attributes that will be applied to the target latent representation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- factor
    - A modulation factor that controls the degree to which the style characteristics of the reference latent space are applied to the target latent representation. It allows fine-tuning the balance between original content preservation and new style application.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The modified latent representation after applying adaptive instance normalization, reflecting the fusion of the style characteristics of the reference latent space with the original content of the target latent representation.
    - Comfy dtype: LATENT
    - Python dtype: Tuple[Dict[str, torch.Tensor]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class AdainLatent:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "latents": ("LATENT", ),
                "reference": ("LATENT", ),
                "factor": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01,  "round": 0.01}),
            },
        }

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "batch_normalize"

    CATEGORY = "latent/filters"

    def batch_normalize(self, latents, reference, factor):
        latents_copy = copy.deepcopy(latents)
        t = latents_copy["samples"] # [B x C x H x W]
        
        t = t.movedim(0,1) # [C x B x H x W]
        for c in range(t.size(0)):
            for i in range(t.size(1)):
                r_sd, r_mean = torch.std_mean(reference["samples"][i, c], dim=None) # index by original dim order
                i_sd, i_mean = torch.std_mean(t[c, i], dim=None)
                
                t[c, i] = ((t[c, i] - i_mean) / i_sd) * r_sd + r_mean
        
        latents_copy["samples"] = torch.lerp(latents["samples"], t.movedim(1,0), factor) # [B x C x H x W]
        return (latents_copy,)

```
