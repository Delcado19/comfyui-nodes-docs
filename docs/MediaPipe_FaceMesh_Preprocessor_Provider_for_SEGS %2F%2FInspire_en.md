# Documentation
- Class name: MediaPipe_FaceMesh_Preprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node uses MediaPipe's FaceMesh model to preprocess images for semantic segmentation tasks by detecting faces and generating corresponding masks. It enhances segmentation of the input image by focusing on facial features, which is critical for applications requiring detailed facial segmentation.

# Input types
## Required
- max_faces
    - This parameter determines the maximum number of faces the model should detect in the input image. It is critical for controlling the granularity of face detection and affects the balance between performance and accuracy.
    - Comfy dtype: INT
    - Python dtype: int
- min_confidence
    - The minimum confidence threshold for face detection. It filters out detections below this confidence level, which is important for ensuring the quality of the generated segmentation masks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution_upscale_by
    - This parameter adjusts the resolution of the input image via a scaling factor. Upscaling the image can improve detection accuracy but may increase computational demands.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SEGS_PREPROCESSOR
    - The output is a preprocessed image with detected faces and segmentation masks, serving as input for downstream semantic segmentation tasks.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: object

# Usage tips
- Infra type: CPU

# Source code
```
class MediaPipe_FaceMesh_Preprocessor_Provider_for_SEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'max_faces': ('INT', {'default': 10, 'min': 1, 'max': 50, 'step': 1}), 'min_confidence': ('FLOAT', {'default': 0.5, 'min': 0.01, 'max': 1.0, 'step': 0.01}), 'resolution_upscale_by': ('FLOAT', {'default': 1.0, 'min': 0.5, 'max': 100, 'step': 0.1})}}
    RETURN_TYPES = ('SEGS_PREPROCESSOR',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/SEGS/ControlNet'

    def doit(self, max_faces, min_confidence, resolution_upscale_by):
        obj = MediaPipe_FaceMesh_Preprocessor_wrapper(max_faces, min_confidence, upscale_factor=resolution_upscale_by)
        return (obj,)
```