
# Documentation
- Class name: Conditioning Grid (string) Advanced
- Category: Bmad/conditioning
- Output node: False

Conditioning Grid (string) Advanced node enhances the functionality of ConditioningGridCond by using AdvancedCLIPTextEncode for advanced text encoding of each text input. It automates the process of generating conditioning from text inputs, which are then used as inputs for the AreaConditioners of the grid, simplifying the creation of complex conditioning grids.

# Input types
## Required
- clip
    - CLIP model used for encoding text inputs. It plays a crucial role in determining the quality and relevance of the generated conditioning.
    - Comfy dtype: CLIP
    - Python dtype: comfy.sd.CLIP
- base
    - Basic text input serving as the base conditioning layer for the grid. It is encoded and integrated into the overall conditioning of the grid.
    - Comfy dtype: STRING
    - Python dtype: str
- columns
    - Specifies the number of columns in the grid. It determines the horizontal dimension of the grid and affects how conditioning is distributed.
    - Comfy dtype: INT
    - Python dtype: int
- rows
    - Specifies the number of rows in the grid. It determines the vertical dimension of the grid and affects how conditioning is distributed.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Width of each grid cell. It affects the spatial resolution of the conditioning applied to each cell.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of each grid cell. It affects the spatial resolution of the conditioning applied to each cell.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - Determines the strength of the applied conditioning. It affects the degree to which conditioning influences the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- token_normalization
    - Specifies the normalization method for tokens in the text input, affecting the encoding process and the resulting conditioning.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_interpretation
    - Defines how weights are interpreted during encoding, affecting the impact of conditioning on the generated content.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- conditioning
    - Output is a complex conditioning grid constructed from encoded text inputs, which can be used for generating content.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConditioningGridStr_ADVEncode:
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

            "token_normalization": (["none", "mean", "length", "length+mean"],),
            "weight_interpretation": (["comfy", "A1111", "compel", "comfy++", "down_weight"],)
        }}

    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "set_conditioning"
    CATEGORY = "Bmad/conditioning"

#def encode(self, clip: comfy.sd.CLIP, text: str, parser: str, mean_normalization: bool, multi_conditioning: bool, use_old_emphasis_implementation: bool, use_CFGDenoiser:bool,with_SDXL=False,text_g="",text_l=""):
    def set_conditioning(self, clip, base, columns, rows, width, height, strength,
                         token_normalization, weight_interpretation,
                         **kwargs):
        text_encode_node = AdvancedCLIPTextEncode()
        cond_grid_node = ConditioningGridCond()

        encoded_base = text_encode_node.encode(clip, base, token_normalization, weight_interpretation,'disable')[0]
        encoded_grid = {}
        for r in range(rows):
            for c in range(columns):
                cell = f"r{r + 1}_c{c + 1}"
                encoded_grid[cell] = text_encode_node.encode(clip, kwargs[cell], token_normalization, weight_interpretation,'disable')[0]

        return cond_grid_node.set_conditioning(encoded_base, columns, rows, width, height, strength, **encoded_grid)

```
