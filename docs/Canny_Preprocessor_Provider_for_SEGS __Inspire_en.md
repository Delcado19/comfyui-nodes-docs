
# Documentation
- Class name: Canny_Preprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node provides a Canny edge detection preprocessor for SEGS (Semantic Edge-Guided Synthesis), designed to enhance image edges for better segmentation and synthesis results. Canny edge detection is a popular algorithm that effectively identifies edge features in images, playing a crucial role in subsequent image segmentation and processing tasks.

# Input types
## Required
- low_threshold
    - Specifies the lower limit for the hysteresis thresholding step in the Canny edge detection algorithm, affecting the detection of weaker edges. A lower threshold results in more edges being detected, including some potentially noisy weak edges.
    - Comfy dtype: FLOAT
    - Python dtype: float
- high_threshold
    - Defines the upper limit for the hysteresis thresholding step, determining the detection of the most prominent edges. A higher threshold leads to only the strongest edges being detected, potentially overlooking important but less prominent edges.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- segs_preprocessor
    - Outputs a preprocessor object configured for Canny edge detection, ready for use in SEGS workflows. This preprocessor applies the specified low and high threshold parameters to perform Canny edge detection.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: Canny_Preprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Canny_Preprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "low_threshold": ("FLOAT", {"default": 0.4, "min": 0.01, "max": 0.99, "step": 0.01}),
                "high_threshold": ("FLOAT", {"default": 0.8, "min": 0.01, "max": 0.99, "step": 0.01})
            }
        }
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self, low_threshold, high_threshold):
        obj = Canny_Preprocessor_wrapper(low_threshold, high_threshold)
        return (obj, )

```
