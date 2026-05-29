
# Documentation
- Class name: Repeat Into Grid (latent)
- Category: Bmad/latent
- Output node: False

This node tiles the input latent samples into a configurable grid, effectively creating a larger grid-like structure by repeating the samples across a specified number of rows and columns.

# Input types
## Required
- samples
    - The latent samples that need to be tiled into the grid. This input is crucial for determining the pattern and content of the final grid.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- columns
    - Specifies the number of columns in the grid. This affects the number of times the samples are repeated horizontally.
    - Comfy dtype: INT
    - Python dtype: int
- rows
    - Specifies the number of rows in the grid. This affects the number of times the samples are repeated vertically.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The grid of latent samples arranged by repeating them according to the specified number of rows and columns.
    - Comfy dtype: LATENT
    - Python dtype: Tuple[Dict[str, torch.Tensor]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RepeatIntoGridLatent:
    """
    Tiles the input samples into a grid of configurable dimensions.
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"samples": ("LATENT",),
                             "columns": grid_len_INPUT,
                             "rows": grid_len_INPUT,
                             }}

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "repeat_into_grid"
    CATEGORY = "Bmad/latent"

    def repeat_into_grid(self, samples, columns, rows):
        s = samples.copy()
        samples = samples['samples']
        tiled_samples = samples.repeat(1, 1, rows, columns)
        s['samples'] = tiled_samples
        return (s,)

```
