# Documentation
- Class name: Canny_Preprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The Canny_Preprocessor_Provider_for_SEGS node aims to preprocess images by applying the Canny edge detection algorithm for segmentation tasks. It enhances the image's edges, which can significantly improve performance of subsequent segmentation models by providing more detailed structural information.

# Input types
## Required
- low_threshold
    - The low_threshold parameter is critical for the Canny edge detection algorithm, as it determines the lower bound of edge detection. It influences the algorithm's sensitivity to noise and the precision of detected edges.
    - Comfy dtype: FLOAT
    - Python dtype: float
- high_threshold
    - The high_threshold parameter plays a key role in the Canny edge detection process, setting the upper bound for edge linking. It defines how strong edge evidence must be to be considered significant.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SEGS_PREPROCESSOR
    - The SEGS_PREPROCESSOR output is a preprocessed image with enhanced edges, suitable for segmentation tasks. It is the result of applying Canny edge detection with specified thresholds.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: Canny_Preprocessor_wrapper

# Usage tips
- Infra type: CPU

# Source code
```
class Canny_Preprocessor_Provider_for_SEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'low_threshold': ('FLOAT', {'default': 0.4, 'min': 0.01, 'max': 0.99, 'step': 0.01}), 'high_threshold': ('FLOAT', {'default': 0.8, 'min': 0.01, 'max': 0.99, 'step': 0.01})}}
    RETURN_TYPES = ('SEGS_PREPROCESSOR',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/SEGS/ControlNet'

    def doit(self, low_threshold, high_threshold):
        obj = Canny_Preprocessor_wrapper(low_threshold, high_threshold)
        return (obj,)
```