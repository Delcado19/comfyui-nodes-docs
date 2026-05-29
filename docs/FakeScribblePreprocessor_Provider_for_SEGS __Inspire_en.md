
# Documentation
- Class name: FakeScribblePreprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False

This node provides a preprocessing step for SEGS (semantic segmentation model) by applying a pseudo-scribble effect. It prepares images for further processing by enhancing or modifying image features to better meet the requirements of the SEGS model.

# Input types
## Required
- safe
    - This parameter determines whether preprocessing is executed in "safe" mode. It affects the execution process and results, potentially altering the intensity or methods used in processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- segs_preprocessor
    - Outputs a preprocessed object specifically for the SEGS model, with the pseudo-scribble effect applied.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: HED_Preprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FakeScribblePreprocessor_Provider_for_SEGS(HEDPreprocessor_Provider_for_SEGS):
    def doit(self, safe):
        obj = HED_Preprocessor_wrapper(safe, "FakeScribblePreprocessor")
        return (obj, )

```
