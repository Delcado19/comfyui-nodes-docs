
# Documentation
- Class name: CtrlNet MiDaS Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The CtrlNet MiDaS Pipe node is designed to handle setups for depth estimation using the MiDaS model, encapsulating the configuration into a format suitable for further processing or application in a pipeline. It primarily adjusts depth-related parameters based on the input settings.

# Input types
## Required
- midas_settings
    - Specifies the configuration for depth estimation, including source, intensity, start, end, and additional parameters, which collectively determine how depth estimation is performed.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, float, float, float, float, float]

# Output types
- midas_source
    - Identifies the source image used for depth estimation.
    - Comfy dtype: INT
    - Python dtype: int
- midas_strength
    - Specifies the intensity of the depth effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midas_start
    - Defines the starting point at which the depth effect is applied.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midas_end
    - Marks the ending point at which the depth effect is applied.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midas_a
    - Adjusts specific depth parameters, influencing the overall depth effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midas_bg
    - Controls background depth parameters, affecting how background depth is rendered.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CtrlNet_MiDaS_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "midas_settings": ("BASIC_PIPE",)
            },
        }
    RETURN_TYPES = ("INT", "FLOAT", "FLOAT", "FLOAT", "FLOAT", "FLOAT",)
    RETURN_NAMES = ("midas_source", "midas_strength", "midas_start", "midas_end", "midas_a", "midas_bg",)
    FUNCTION = "give_values"

    CATEGORY="JPS Nodes/Pipes"

    def give_values(self,midas_settings):
        
        midas_source, midas_strength, midas_start, midas_end, midas_a, midas_bg = midas_settings

        return(midas_source, midas_strength, midas_start, midas_end, midas_a, midas_bg,)

```
