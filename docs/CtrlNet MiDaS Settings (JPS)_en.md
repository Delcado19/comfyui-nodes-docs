
# Documentation
- Class name: CtrlNet MiDaS Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

This node configures settings for the MiDaS depth estimation model in the control network, allowing users to specify the source of depth information, intensity, and the range over which depth effects are applied.

# Input types
## Required
- midas_from
    - Specifies the source of depth information, offering options such as "source image", "support image", or "direct support". This choice determines the origin of the depth data used for processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[str]
- midas_strength
    - Controls the intensity of the depth effect applied by the MiDaS model, with a range that allows fine-tuning of depth perception.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midas_start
    - Defines the starting point where the depth effect is applied, enabling precise control over where depth begins to take effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midas_end
    - Sets the endpoint of the depth effect, allowing users to limit the influence of depth to a specific range within the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midas_a
    - Adjusts specific parameters within the MiDaS model, providing additional customization options for depth effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midas_bg
    - Modifies the background depth value, allowing users to fine-tune the background intensity of the depth effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- midas_settings
    - Outputs the MiDaS model's configuration settings in tuple form, ready for direct use in the depth estimation process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, float, float, float, float, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CtrlNet_MiDaS_Settings:
    midasfrom = ["Source Image", "Support Image", "Support Direct"]
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "midas_from": (s.midasfrom,),
                "midas_strength": ("FLOAT", {"default": 1.00, "min": 0.00, "max": 10.00, "step": 0.10}),
                "midas_start": ("FLOAT", {"default": 0.000, "min": 0.000, "max": 1.000, "step": 0.05}),
                "midas_end": ("FLOAT", {"default": 1.000, "min": 0.000, "max": 1.000, "step": 0.05}),
                "midas_a": ("FLOAT", {"default": 6.28, "min": 0.00, "max": 15.71, "step": 0.05}),
                "midas_bg": ("FLOAT", {"default": 0.10, "min": 0.00, "max": 1.00, "step": 0.05}),
            }   
        }
    RETURN_TYPES = ("BASIC_PIPE",) 
    RETURN_NAMES = ("midas_settings",)
    FUNCTION = "get_ctrlnet_midas"

    CATEGORY="JPS Nodes/Settings"

    def get_ctrlnet_midas(self, midas_from, midas_strength, midas_start, midas_end, midas_a, midas_bg):

        midas_source = int (1)
        if (midas_from == "Support Image"):
            midas_source = int(2)
        if (midas_from == "Support Direct"):
            midas_source = int(3)
        
        midas_settings = midas_source, midas_strength, midas_start, midas_end, midas_a, midas_bg

        return(midas_settings,)

```
