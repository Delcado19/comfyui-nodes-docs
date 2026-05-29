
# Documentation
- Class name: LeRes_DepthMap_Preprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False

This node provides the functionality to preprocess depth maps using the LeReS algorithm within the SEGS framework. It is primarily used to remove nearest and background elements from depth maps, and optionally enhance remaining features to improve depth perception in subsequent processing stages.

# Input types
## Required
- rm_nearest
    - Specifies the degree to which nearest elements should be removed from the depth map, affecting the clarity and focus of the depth map.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rm_background
    - Determines the extent to which background elements are removed from the depth map, improving the overall quality of the depth map by focusing on relevant features.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- boost
    - A boolean flag that, when enabled, enhances the features of the depth map after removing nearest and background elements, thereby improving depth perception.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- segs_preprocessor
    - Returns a preprocessed depth map object that can be used for further processing in the SEGS framework.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: LeReS_DepthMap_Preprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LeReS_DepthMap_Preprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "rm_nearest": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 100, "step": 0.1}),
                "rm_background": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 100, "step": 0.1})
            },
            "optional": {
                "boost": ("BOOLEAN", {"default": False, "label_on": "enable", "label_off": "disable"}),
            }
        }
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self, rm_nearest, rm_background, boost=False):
        obj = LeReS_DepthMap_Preprocessor_wrapper(rm_nearest, rm_background, boost)
        return (obj, )

```
