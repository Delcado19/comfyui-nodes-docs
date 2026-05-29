
# Documentation
- Class name: CtrlNet ZoeDepth Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

This node is designed to configure network settings with a focus on ZoeDepth. It allows users to select the depth source, adjust depth intensity, and define the start and end points for depth application, providing customizable depth effects for images.

# Input types
## Required
- zoe_from
    - Specifies the source of depth information, allowing selection from predefined options such as source image, support image, or direct support. This choice determines the origin of the depth data used for processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[str]
- zoe_strength
    - Controls the intensity of the depth effect, with a range allowing from subtle to pronounced depth enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoe_start
    - Defines the starting point for depth application, enabling fine-tuning of where the depth effect begins in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoe_end
    - Sets the endpoint for depth application, allowing users to specify where the depth effect ends in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- zoedepth_settings
    - Outputs the configured ZoeDepth settings as a tuple, usable in subsequent processing stages.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, float, float, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CtrlNet_ZoeDepth_Settings:
    zoefrom = ["Source Image", "Support Image", "Support Direct"]
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "zoe_from": (s.zoefrom,),
                "zoe_strength": ("FLOAT", {"default": 1.00, "min": 0.00, "max": 10.00, "step": 0.10}),
                "zoe_start": ("FLOAT", {"default": 0.000, "min": 0.000, "max": 1.000, "step": 0.05}),
                "zoe_end": ("FLOAT", {"default": 1.000, "min": 0.000, "max": 1.000, "step": 0.05}),
            }   
        }
    RETURN_TYPES = ("BASIC_PIPE",) 
    RETURN_NAMES = ("zoedepth_settings",)
    FUNCTION = "get_ctrlnet_zoedepth"

    CATEGORY="JPS Nodes/Settings"

    def get_ctrlnet_zoedepth(self, zoe_from, zoe_strength, zoe_start, zoe_end):

        zoe_source = int (1)
        if (zoe_from == "Support Image"):
            zoe_source = int(2)
        if (zoe_from == "Support Direct"):
            zoe_source = int(3)
        
        zoedepth_settings = zoe_source, zoe_strength, zoe_start, zoe_end

        return(zoedepth_settings,)

```
