
# Documentation
- Class name: HEDPreprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node provides a pre‑processor for SEGS (Semantic Edge‑Guided Synthesis) that uses the HED (Holistically‑Nested Edge Detection) algorithm. It preprocesses images by comprehensively detecting edges, enhancing the input for SEGS applications. The HED algorithm captures edge information holistically, which is valuable for subsequent semantic edge‑guided synthesis tasks.

# Input types
## Required
- safe
- This parameter determines whether preprocessing should run in safe mode. Safe mode may affect edge detection results and may use a more conservative approach to avoid potential errors or anomalies.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- segs_preprocessor
- The output is a preprocessed object customized for SEGS, specifically optimized for enhanced edge detection. This preprocessor can be used directly in subsequent SEGS‑related tasks, providing high‑quality edge information as input.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class HEDPreprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "safe": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"})
            }
        }
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self, safe):
        obj = HED_Preprocessor_wrapper(safe, "HEDPreprocessor")
        return (obj, )

```
