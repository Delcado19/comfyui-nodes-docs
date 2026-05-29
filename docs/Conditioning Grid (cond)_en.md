
# Documentation
- Class name: Conditioning Grid (cond)
- Category: Bmad/conditioning
- Output node: False

The Conditioning Grid (cond) node applies conditional control to a mesh structure, enabling the content generation process to be customized based on specific grid coordinates. This node supports complex grid-based conditional control scenarios, allowing fine-grained control during generation.

# Input types
## Required
- columns
    - Specifies the number of columns in the grid, determining its horizontal dimension. This value directly affects the complexity and fineness of the generated content along the horizontal axis.
    - Comfy dtype: INT
    - Python dtype: int
- rows
    - Defines the number of rows in the grid, setting its vertical dimension. This parameter plays a key role in the structure and detail distribution of the generated content along the vertical axis.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Sets the width of each grid cell, affecting the spatial resolution of applied conditional control. Larger width values may result in coarser control, while smaller values enable finer adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Determines the height of each grid cell, affecting the spatial resolution of applied conditional control. The choice of height value influences detail representation and control precision along the vertical axis.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - Controls the intensity of the conditional effect, allowing fine-tuning of generated content features. Higher intensity values produce more pronounced conditional effects, while lower values yield subtler influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- base
    - Serves as the base conditional control that acts as a starting point for further modifications. This is crucial for establishing the initial context or theme of the generated content, laying the foundation for subsequent customization.
    - Comfy dtype: CONDITIONING
    - Python dtype: str

# Output types
- conditioning
    - The output after applying conditional control, representing the modified mesh structure. This output encapsulates conditional information for all grid coordinates and can be directly utilized by subsequent generation processes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConditioningGridCond:
    """
    Does the job of multiple area conditions of the same size adjacent to each other.
    Saves space, and is easier and quicker to set up and modify.


    Inputs related notes
    ----------
    base : conditioning
        for most cases, you can set the base from a ClipTextEncode with an empty string.
        If you wish to have something between the cells as common ground, lower the strength and set
        the base with the shared elements.
    columns and rows : integer
        after setting the desired grid size, call the menu option "update inputs" to update
        the node's conditioning input sockets.

        In most cases, columns and rows, should not be converted to input.

        dev note: I've considered disabling columns and rows options to convert to input
        on the javascript side, which (that I am aware) could be done with a modification
        to the core/WidgetInputs.js -> isConvertableWidget(...).
        However, upon reflection, I think there may be use cases in which the inputs are set for the
        maximum size but only a selected number of columns or rows given via input are used.
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "columns": grid_len_INPUT,
            "rows": grid_len_INPUT,
            "width": ("INT", {"default": 256, "min": 16, "max": 2048, "step": 1}),
            "height": ("INT", {"default": 256, "min": 16, "max": 2048, "step": 1}),
            "strength": ("FLOAT", {"default": 3, }),
            "base": ("CONDITIONING",)
        }}

    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "set_conditioning"
    CATEGORY = "Bmad/conditioning"

    def set_conditioning(self, base, columns, rows, width, height, strength, **kwargs):
        cond = base
        cond_set_area_node = nodes.ConditioningSetArea()
        cond_combine_node = nodes.ConditioningCombine()

        for r in range(rows):
            for c in range(columns):
                arg_name = f"r{r + 1}_c{c + 1}"
                new_cond = kwargs[arg_name]
                new_cond_area = cond_set_area_node.append(new_cond, width, height, c * width, r * height, strength)[0]
                new_cond = cond_combine_node.combine(new_cond_area, cond)[0]

                cond = new_cond
        return (cond,)

```
