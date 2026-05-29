
# Documentation
- Class name: OpenPose_Preprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The OpenPose Preprocessor Provider (SEGS) node provides a preprocessor using OpenPose for SEGS (semantic segmentation). This node is capable of detecting and processing human hands, bodies, and faces in images. It allows adjusting detection functions and image resolution scaling to prepare images for further processing or analysis.

# Input types
## Required
- detect_hand
    - Enable or disable hand detection in images. This affects the node's ability to recognize and process hand-related features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_body
    - Enable or disable body detection in images. This affects the node's ability to recognize and process body-related features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_face
    - Enable or disable face detection in images. This affects the node's ability to recognize and process face-related features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- resolution_upscale_by
    - Adjust the image resolution by a specified upscaling factor. This affects the sharpness and detail of the processed image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- segs_preprocessor
    - Provide a preprocessed image object specifically tailored for SEGS applications, which can be used for semantic segmentation tasks.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: OpenPose_Preprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
