
# Documentation
- Class name: CtrlNet CannyEdge Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/jps-yes/ComfyUI_JPS

This node configures the Canny edge detection process settings in the pipeline, allowing users to specify parameters such as edge detection strength, start and end thresholds, and low and high thresholds.

# Input types
## Required
- cannyedge_from
    - Specifies the image source for Canny edge detection, allowing selection from predefined sources such as "Source Image", "Support Image", or "Direct Support".
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cannyedge_strength
    - Determines the strength of the edge detection process, with a range allowing fine-tuning of edge detection sensitivity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_start
    - Sets the start threshold for edge detection, controlling the minimum edge strength to be considered.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_end
    - Defines the end threshold for edge detection, allowing users to limit the maximum edge strength to be detected.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_low
    - Specifies the low threshold for the hysteresis process in Canny edge detection, affecting the detection of weaker edges.
    - Comfy dtype: INT
    - Python dtype: int
- cannyedge_high
    - Sets the high threshold for the hysteresis process in Canny edge detection, affecting the detection of stronger edges.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cannyedge_settings
    - Outputs the configured Canny edge detection settings as a tuple, ready for direct use in the detection process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, float, float, float, int, int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CtrlNet_CannyEdge_Settings:
    cannyedgefrom = ["Source Image", "Support Image", "Support Direct"]
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "cannyedge_from": (s.cannyedgefrom,),
                "cannyedge_strength": ("FLOAT", {"default": 1.00, "min": 0.00, "max": 10.00, "step": 0.10}),
                "cannyedge_start": ("FLOAT", {"default": 0.000, "min": 0.000, "max": 1.000, "step": 0.05}),
                "cannyedge_end": ("FLOAT", {"default": 1.000, "min": 0.000, "max": 1.000, "step": 0.05}),
                "cannyedge_low": ("INT", {"default": 100, "min": 0, "max": 255, "step": 1}),
                "cannyedge_high": ("INT", {"default": 200, "min": 0, "max": 255, "step": 1}),
            }   
        }
    RETURN_TYPES = ("BASIC_PIPE",) 
    RETURN_NAMES = ("cannyedge_settings",)
    FUNCTION = "get_ctrlnet_cannyedge"

    CATEGORY="JPS Nodes/Settings"

    def get_ctrlnet_cannyedge(self, cannyedge_from, cannyedge_strength, cannyedge_start, cannyedge_end, cannyedge_low, cannyedge_high):

        cannyedge_source = int (1)
        if (cannyedge_from == "Support Image"):
            cannyedge_source = int(2)
        if (cannyedge_from == "Support Direct"):
            cannyedge_source = int(3)
        
        cannyedge_settings = cannyedge_source, cannyedge_strength, cannyedge_start, cannyedge_end, cannyedge_low, cannyedge_high

        return(cannyedge_settings,)

```
