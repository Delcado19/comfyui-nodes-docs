
# Documentation
- Class name: LineArt_Preprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False

This node provides a preprocessor that generates line art from images, specifically designed for SEGS (Semantic Edge Guided Synthesis) models. It allows adjusting the thickness of line art to achieve various artistic effects from delicate to bold.

# Input types
## Required
- coarse
    - Determines whether the generated line art is bold or delicate. Enabling this option produces thicker, more prominent lines, while disabling it generates finer, more detailed line art.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- segs_preprocessor
    - Returns an object that preprocesses images into line art suitable for SEGS models, aiding in the creation of stylized images or animations.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: LineArt_Preprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LineArt_Preprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "coarse": ("BOOLEAN", {"default": False, "label_on": "enable", "label_off": "disable"}),
        }}
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self, coarse):
        obj = LineArt_Preprocessor_wrapper(coarse)
        return (obj, )

```
