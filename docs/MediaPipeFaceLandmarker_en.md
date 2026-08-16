# Documentation
- Class name: MediaPipeFaceLandmarker
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Detects facial landmarks using MediaPipe model.

# Input types
## Required
- face_detection_model
    - The face_detection_model input is used by this node during execution.
    - Comfy dtype: FACE_DETECTION_MODEL
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- detector_variant
    - Face detector range. 'short' is tuned for close-up faces (within ~2 m of the camera); 'full' covers farther / smaller faces (up to ~5 m) but is slower. 'both' runs both detectors and keeps whichever found more faces per frame (~2× detection cost).
    - Comfy dtype: COMBO
    - Python dtype: object
- num_faces
    - Maximum faces to return per frame. 0 = no cap (return all detected).
    - Comfy dtype: INT
    - Python dtype: int
- min_confidence
    - BlazeFace score threshold. Lower to catch small/occluded faces.
    - Comfy dtype: FLOAT
    - Python dtype: float
- missing_frame_fallback
    - Per-frame behaviour when detection fails in a batch. 'empty' leaves the frame faceless. 'previous' copies the most recent successful detection. 'interpolate' lerps landmarks/bbox/blendshapes between bracketing successful frames. Multi-face: pairs faces across frames by greedy bbox-centre NN.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- face_landmarks
    - The face_landmarks output is produced by this node.
    - Comfy dtype: FACE_LANDMARKS
    - Python dtype: object
- bboxes
    - The bboxes output is produced by this node.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
