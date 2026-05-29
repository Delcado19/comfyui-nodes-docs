
# Documentation
- Class name: MeshGraphormerDepthMapPreprocessorProvider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False

This node provides SEGS applications with a dedicated depth map generation pre‑processor, using the MeshGraphormer framework. It encapsulates the complexity of depth map preprocessing, ensuring compatibility with the SEGS project and optimal preprocessing.

# Input types
## Required
This node has no required input parameters.

# Output types
- segs_preprocessor
- This output is processed and suitable for SEGS applications. It ensures the depth map is optimized for further processing or analysis within the SEGS framework.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class MeshGraphormerDepthMapPreprocessorProvider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {}}
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self):
        obj = MeshGraphormerDepthMapPreprocessorProvider_wrapper()
        return (obj, )

```
