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
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
