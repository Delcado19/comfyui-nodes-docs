
# Documentation
- Class name: InstantID Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The InstantID Pipe node is designed to handle the setup of instant identity recognition functionality, encapsulating the logic for processing various parameters such as weight, strength, noise, and range, and returning these processed settings for further use in identity recognition tasks.

# Input types
## Required
- instantid_settings
    - Defines the settings for instant identity recognition, including parameters such as weight, strength, noise, start, and end. Each parameter plays a critical role in the fine-tuning recognition process: 'weight' adjusts the emphasis on certain features, 'strength' controls the robustness of recognition, 'noise' can simulate variability in recognition scenarios, 'start' and 'end' define the operational range, ensuring precise control over the recognition stages.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[float, float, float, float, float]

# Output types
- ip_weight
    - Weight parameter that influences the recognition process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cn_strength
    - Strength parameter that controls the influence of the network.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - Noise level parameter in the recognition process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start
    - Start parameter that defines the starting point of the recognition range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
    - End parameter that defines the endpoint of the recognition range.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InstantID_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "instantid_settings": ("BASIC_PIPE",),
            }
        }
    RETURN_TYPES = ("FLOAT","FLOAT","FLOAT","FLOAT","FLOAT",)
    RETURN_NAMES = ("ip_weight","cn_strength","noise","start","end",)
    FUNCTION = "get_instantid"

    CATEGORY="JPS Nodes/Pipes"

    def get_instantid(self,instantid_settings):

        ip_weight,cn_strength,noise,start,end = instantid_settings

        return(ip_weight,cn_strength,noise,start,end)

```
