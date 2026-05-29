
# Documentation
- Class name: StyleModelClamp
- Category: clamp
- Output node: False

The StyleModelClamp node is designed to pass style model data without modification, acting as a placeholder or checkpoint in the data processing flow. It ensures the integrity and continuity of style model information as it flows through different processing stages.

# Input types
## Required
- style_model
    - The 'style_model' input represents the style model data to be clamped. This parameter is essential for keeping the style model information flowing unchanged through the node.
    - Comfy dtype: STYLE_MODEL
    - Python dtype: comfy.sd.StyleModel

# Output types
- style_model
    - The output is the unmodified style model data, ensuring the integrity of the style model information as it passes through the node.
    - Comfy dtype: STYLE_MODEL
    - Python dtype: comfy.sd.StyleModel


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class StyleModelClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "style_model": ("STYLE_MODEL",),
            },
        }

    RETURN_TYPES = ("STYLE_MODEL",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, style_model):
        return (style_model,)

```
