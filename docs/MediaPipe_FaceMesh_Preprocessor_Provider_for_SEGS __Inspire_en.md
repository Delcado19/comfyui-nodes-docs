
# Documentation
- Class name: MediaPipe_FaceMesh_Preprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node provides a preprocessor for SEGS (semantic segmentation) tasks, specifically using MediaPipe's FaceMesh technology to detect facial features and landmarks. It aims to enhance the input data for SEGS models by applying face mesh detection, thereby achieving more precise and detailed face area segmentation.

# Input types
## Required
- max_faces
    - Specify the maximum number of faces to be detected in the input image. This parameter helps optimize the detection process for multi-face images.
    - Comfy dtype: INT
    - Python dtype: int
- min_confidence
    - Set the minimum confidence threshold for face detection. Faces with confidence scores below this threshold will not be considered, ensuring that only faces detected with sufficient certainty are processed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution_upscale_by
    - Determine the magnification factor of the input image resolution before performing face mesh detection. Magnification can improve the detection of facial features in low-resolution images.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- segs_preprocessor
    - Returns a preprocessor object configured for SEGS tasks, specifically for facial feature detection using MediaPipe's FaceMesh technology.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
