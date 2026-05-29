
# Documentation
- Class name: FlatLatentsIntoSingleGrid
- Category: Bmad/latent
- Output node: False

The FlatLatentsIntoSingleGrid node converts a batch of latent representations into a single flat grid layout. This operation is useful for collectively visualizing and processing multiple latent samples, as it spatially rearranges them into a unified structure.

# Input types
## Required
- latents
    - The 'latents' input represents a batch of latent samples to be arranged into a grid. This input is critical for determining the structure and size of the resulting grid, influencing how the latent samples are spatially organized.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latent
    - The output is a single latent representation in grid form, containing the rearranged input latent batch. This consolidated form facilitates further operations or visualization on the entire batch.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FlatLatentsIntoSingleGrid:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"latents": ("LATENT",), }}

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "flat_into_grid"
    CATEGORY = "Bmad/latent"

    def flat_into_grid(self, latents):
        n, lc, lh, lw = latents['samples'].size()
        length_in_tiles = math.ceil(math.sqrt(n))
        new_latent = torch.zeros((1, lc, lh * math.ceil(n / length_in_tiles), lw * length_in_tiles),
                                 dtype=latents["samples"].dtype, device=latents["samples"].device)
        r = c = 0  # row and column indexes
        for i in range(n):
            x1 = x2 = lw * c
            x2 += lw
            y1 = y2 = lh * r
            y2 += lh
            new_latent[0, :, y1:y2, x1:x2] = latents["samples"][i, :, :, :]
            c += 1
            if c >= length_in_tiles:
                c = 0
                r += 1

        return ({"samples": new_latent},)

```
