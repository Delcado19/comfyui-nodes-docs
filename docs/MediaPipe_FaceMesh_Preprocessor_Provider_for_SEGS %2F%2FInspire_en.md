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
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
