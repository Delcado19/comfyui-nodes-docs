
# Documentation
- Class name: CondPassThrough
- Category: KJNodes/misc
- Output node: False

The CondPassThrough node is designed to pass positive and negative conditioning data through directly. It serves as a workaround, enabling bypass of inputs in cases where Set node limitations may obstruct such operations.

# Input types
## Required
- positive
    - Represents the positive conditioning data to be passed through. It plays a key role in maintaining data flow integrity, especially in bypass scenarios.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple
- negative
    - Represents the negative conditioning data to be passed through. It ensures negative conditioning data is also seamlessly integrated into the workflow without alteration.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple

# Output types
- positive
    - Outputs the unmodified positive conditioning data, ensuring it is available for subsequent processing steps.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple
- negative
    - Outputs the unmodified negative conditioning data, preserving its original form for further use.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CondPassThrough:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "positive": ("CONDITIONING", ),
                "negative": ("CONDITIONING", ),
            }, 
    }

    RETURN_TYPES = ("CONDITIONING", "CONDITIONING",)
    RETURN_NAMES = ("positive", "negative")
    FUNCTION = "passthrough"
    CATEGORY = "KJNodes/misc"
    DESCRIPTION = """
    Simply passes through the positive and negative conditioning,
    workaround for Set node not allowing bypassed inputs.
"""

    def passthrough(self, positive, negative):
        return (positive, negative,)

```
