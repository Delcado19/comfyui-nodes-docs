# Documentation
- Class name: FakeScribblePreprocessor_Provider_for_SEGS
- Category: Image Processing
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

FakeScribblePreprocessor_Provider_for_SEGS node aims to enhance image segmentation tasks by applying a preprocessing step that simulates scribbles. This node leverages the HED (Holistically-Nested Edge Detection) algorithm's ability to create hint images, which aid the segmentation process. It is particularly useful for generating detailed and clean segmentation maps by providing additional context information to the segmentation model.

# Input types
## Required
- safe
    - The 'safty' parameter determines whether safety measures should be taken when applying preprocessing to prevent potential data corruption or loss. This is crucial for ensuring the integrity of input data during the preprocessing stage.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- result
    - The output of the FakeScribblePreprocessor_Provider_for_SEGS node is the image after the preprocessing step. This image can be directly used as input to the segmentation model, enhancing the model's ability to produce accurate segmentations.
    - Comfy dtype: image
    - Python dtype: PIL.Image or numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
```
class FakeScribblePreprocessor_Provider_for_SEGS(HEDPreprocessor_Provider_for_SEGS):

    def doit(self, safe):
        obj = HED_Preprocessor_wrapper(safe, 'FakeScribblePreprocessor')
        return (obj,)
```