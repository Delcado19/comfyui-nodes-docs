
# Documentation
- Class name: MediaPipeFaceMeshDetectorProvider __Inspire
- Category: InspirePack/Detector
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MediaPipeFaceMeshDetectorProvider node integrates MediaPipe's FaceMesh technology into the ComfyUI framework, enabling facial feature detection. It serves as a provider that introduces FaceMesh detection capabilities into segmentation or other image processing workflows, facilitating advanced facial analysis and processing.

# Input types
## Required
- max_faces
- Specify the maximum number of faces to detect in the given image, controlling the scope of the detection process.
    - Comfy dtype: INT
    - Python dtype: int
- face
- Indicate whether to enable and how to configure facial feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mouth
- Indicate whether to enable and how to configure mouth feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_eyebrow
- Indicate whether to enable and how to configure left eyebrow feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_eye
- Indicate whether to enable and how to configure left eye feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_pupil
- Indicate whether to enable and how to configure left pupil feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_eyebrow
- Indicate whether to enable and how to configure right eyebrow feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_eye
- Indicate whether to enable and how to configure right eye feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_pupil
- Indicate whether to enable and how to configure right pupil feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- bbox_detector
- Provide a configuration for a detector used for facial feature bounding box detection.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: MediaPipeFaceMeshDetector
- segm_detector
- Provide a configuration for a detector used for facial feature segmentation detection.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: MediaPipeFaceMeshDetector


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
