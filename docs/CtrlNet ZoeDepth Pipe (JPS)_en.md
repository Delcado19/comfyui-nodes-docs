
# Documentation
- Class name: CtrlNet ZoeDepth Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

This node is designed to process ZoeDepth settings, converting them into concrete numerical values that can be used in further image processing or rendering tasks. It abstracts the complexity of handling depth-related parameters by providing an intuitive interface to specify depth effects.

# Input types
## Required
- zoedepth_settings
    - Specifies the ZoeDepth settings, including the source, intensity, start point, and end point of the depth effect. This input is critical for determining how the depth effect is applied in the image processing pipeline.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, float, float, float]

# Output types
- zoe_source
    - The source of depth information as determined by the ZoeDepth settings.
    - Comfy dtype: INT
    - Python dtype: int
- zoe_strength
    - The intensity of the depth effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoe_start
    - The start point of the depth effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoe_end
    - The end point of the depth effect.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CtrlNet_ZoeDepth_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "zoedepth_settings": ("BASIC_PIPE",)
            },
        }
    RETURN_TYPES = ("INT", "FLOAT", "FLOAT", "FLOAT",)
    RETURN_NAMES = ("zoe_source", "zoe_strength", "zoe_start", "zoe_end",)
    FUNCTION = "give_values"

    CATEGORY="JPS Nodes/Pipes"

    def give_values(self,zoedepth_settings):
        
        zoe_source, zoe_strength, zoe_start, zoe_end = zoedepth_settings

        return(zoe_source, zoe_strength, zoe_start, zoe_end,)

```
