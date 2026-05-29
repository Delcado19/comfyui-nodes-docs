
# Documentation
- Class name: TilePreprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False

This node provides preprocessing services for SEGS (Semantic Edge Guided Synthesis), applying a tiling preprocessing technique. It aims to enhance input data by adjusting resolution through pyramid upsampling to improve performance in SEGS applications.

# Input types
## Required
- pyrUp_iters
    - Specifies the iteration count of pyramid upsampling, affecting the final resolution of the processed image. Higher iteration count produces finer resolution, potentially improving the quality of SEGS output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- segs_preprocessor
    - Returns a preprocessed object ready for SEGS processing, encapsulating the adjustments made during the tiling preprocessing stage.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: TilePreprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TilePreprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {'pyrUp_iters': ("INT", {"default": 3, "min": 1, "max": 10, "step": 1})}}
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self, pyrUp_iters):
        obj = TilePreprocessor_wrapper(pyrUp_iters)
        return (obj, )

```
