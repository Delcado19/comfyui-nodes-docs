
# Documentation
- Class name: Conditioning Grid (string)
- Category: Bmad/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Conditioning Grid (string) node automates the conditional generation process for grid layouts. It encodes each text input into conditions using the ClipTextEncode node, then applies them to the grid's AreaConditioners. This approach simplifies creating conditioned grids for generation tasks.

# Input types
## Required
- clip
    - The clip parameter is the CLIP model used to encode text inputs into conditions. It plays a key role in interpreting text and converting it into a format usable for conditioning.
    - Comfy dtype: CLIP
    - Python dtype: comfy.sd.CLIP
- base
    - The base parameter is the basic text input serving as the grid's base condition. This input is encoded and used as the starting point for further conditioning.
    - Comfy dtype: STRING
    - Python dtype: str
- columns
    - The columns parameter defines the number of columns in the grid. It determines the grid's horizontal dimension and affects how text inputs are organized and conditioned.
    - Comfy dtype: INT
    - Python dtype: int
- rows
    - The rows parameter defines the number of rows in the grid. It determines the grid's vertical dimension and affects how text inputs are organized and conditioned.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width parameter sets the width of each cell in the grid (in pixels). This affects the spatial resolution of conditioning applied to each grid cell.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of each cell in the grid (in pixels). This affects the spatial resolution of conditioning applied to each grid cell.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength parameter controls the intensity of conditioning applied to the grid. This parameter influences how strongly the conditioning affects the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning is the final conditioned result of the grid, ready for use in generation tasks. It encapsulates the encoded text inputs applied to the grid layout.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConditioningGridStr:
    """
    Node similar to ConditioningGridCond, but automates an additional step, using a ClipTextEncode per text input.
    Each conditioning obtained from the text inputs is then used as input for the Grid's AreaConditioners.
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "clip": ("CLIP",),
            "base": ("STRING", {"default": '', "multiline": False}),
            "columns": grid_len_INPUT,
            "rows": grid_len_INPUT,
            "width": ("INT", {"default": 256, "min": 16, "max": 2048, "step": 1}),
            "height": ("INT", {"default": 256, "min": 16, "max": 2048, "step": 1}),
            "strength": ("FLOAT", {"default": 3, }),
        }}

    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "set_conditioning"
    CATEGORY = "Bmad/conditioning"

    def set_conditioning(self, clip, base, columns, rows, width, height, strength, **kwargs):
        text_encode_node = nodes.CLIPTextEncode()
        cond_grid_node = ConditioningGridCond()

        encoded_base = text_encode_node.encode(clip, base)[0]
        encoded_grid = {}
        for r in range(rows):
            for c in range(columns):
                cell = f"r{r + 1}_c{c + 1}"
                encoded_grid[cell] = text_encode_node.encode(clip, kwargs[cell])[0]

        return cond_grid_node.set_conditioning(encoded_base, columns, rows, width, height, strength, **encoded_grid)

```
