
# Documentation
- Class name: CtrlNet CannyEdge Pipe (JPS)
- Category: JPS Nodes/Pipes
- Output node: False

The CtrlNet CannyEdge Pipe node is designed to handle Canny edge detection settings, returning multiple parameters such as source, intensity, start, end, and thresholds. This node belongs to the JPS Nodes/Pipes category and focuses on image processing and manipulation by applying the Canny edge detection algorithm.

# Input types
## Required
- cannyedge_settings
    - Specifies the configuration for Canny edge detection, including source, intensity, start and end positions, and low and high thresholds. This input is crucial for determining how edge detection is performed and its sensitivity.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, float, float, float, int, int]

# Output types
- cannyedge_source
    - The image source for Canny edge detection.
    - Comfy dtype: INT
    - Python dtype: int
- cannyedge_strength
    - The intensity of the Canny edge detection effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_start
    - The start position for applying Canny edge detection.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_end
    - The end position for applying Canny edge detection.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_low
    - The low threshold for Canny edge detection.
    - Comfy dtype: INT
    - Python dtype: int
- cannyedge_high
    - The high threshold for Canny edge detection.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CtrlNet_CannyEdge_Pipe:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "cannyedge_settings": ("BASIC_PIPE",)
            },
        }
    RETURN_TYPES = ("INT", "FLOAT", "FLOAT", "FLOAT", "INT", "INT", )
    RETURN_NAMES = ("cannyedge_source", "cannyedge_strength", "cannyedge_start", "cannyedge_end", "cannyedge_low", "cannyedge_high",)
    FUNCTION = "give_values"

    CATEGORY="JPS Nodes/Pipes"

    def give_values(self,cannyedge_settings):
        
        cannyedge_source, cannyedge_strength, cannyedge_start, cannyedge_end, cannyedge_low, cannyedge_high = cannyedge_settings

        return(cannyedge_source, cannyedge_strength, cannyedge_start, cannyedge_end, cannyedge_low, cannyedge_high,)

```
