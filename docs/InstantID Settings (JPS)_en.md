
# Documentation
- Class name: InstantID Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

This node configures settings for generating InstantID, allowing customization of parameters such as influence weight, intensity, noise level, and start and end points of the ID generation process.

# Input types
## Required
- ip_weight
- Define the influence weight of InstantID, affecting its overall role in the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cn_strength
- Set the intensity of content noise, influencing the variability and uniqueness of the generated InstantID.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
- Specify the noise level to add to InstantID, increasing its randomness and complexity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start
- Determine the start point of InstantID generation, enabling staged or progressive application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
- Define the end point of InstantID generation, marking the completion of its application.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- instantid_settings
- Output the configured InstantID settings as a tuple, ready for direct use in the generation process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[float, float, float, float, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InstantID_Settings:

    ipamasktype = ["No Mask","Mask Editor","Mask Editor (inverted)","Red from Image","Green from Image","Blue from Image"]        
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "ip_weight": ("FLOAT", {"default": 0.8, "min": 0, "max": 1, "step": 0.01}),
                "cn_strength": ("FLOAT", {"default": 0.65, "min": 0, "max": 10, "step": 0.01}),
                "noise": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.1, }),
                "start": ("FLOAT", {"default": 0.00, "min": 0, "max": 1, "step": 0.05}),
                "end": ("FLOAT", {"default": 1.00, "min": 0, "max": 1, "step": 0.05}),
            }
        }
    RETURN_TYPES = ("BASIC_PIPE",)
    RETURN_NAMES = ("instantid_settings",)
    FUNCTION = "get_instantid"

    CATEGORY="JPS Nodes/Settings"

    def get_instantid(self,ip_weight,cn_strength,noise,start,end):

        instantid_settings = ip_weight,cn_strength,noise,start,end

        return(instantid_settings,)

```
