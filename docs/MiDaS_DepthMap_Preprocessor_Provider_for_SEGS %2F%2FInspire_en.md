# Documentation
- Class name: MiDaS_DepthMap_Preprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node generates a depth map for semantic segmentation tasks using the MiDaS model, improving the quality of segmentation output.

# Input types
## Required
- a
    - The 'a' parameter is a key input that affects the depth estimation process, influencing the overall accuracy and detail of the depth map.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bg_threshold
    - The 'bg_threshold' parameter is crucial for distinguishing foreground and background in the depth map, thereby improving segmentation accuracy.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SEGS_PREPROCESSOR
    - The output provides a preprocessed depth map as input to the segmentation model, significantly enhancing the quality of segmentation results.
    - Comfy dtype: NODE
    - Python dtype: MiDaS_DepthMapPreprocessor

# Usage tips
- Infra type: GPU

# Source code
```
class MiDaS_DepthMap_Preprocessor_Provider_for_SEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'a': ('FLOAT', {'default': np.pi * 2.0, 'min': 0.0, 'max': np.pi * 5.0, 'step': 0.05}), 'bg_threshold': ('FLOAT', {'default': 0.1, 'min': 0, 'max': 1, 'step': 0.05})}}
    RETURN_TYPES = ('SEGS_PREPROCESSOR',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/SEGS/ControlNet'

    def doit(self, a, bg_threshold):
        obj = MiDaS_DepthMap_Preprocessor_wrapper(a, bg_threshold)
        return (obj,)
```