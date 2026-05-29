# Documentation
- Class name: OpenPose_Preprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The OpenPose_Preprocessor_Provider_for_SEGS class facilitates image semantic segmentation preprocessing by detecting and analyzing human poses using OpenPose technology. It identifies hands, bodies, and faces in images, which is critical for applications that need to understand human posture and interactions within a scene.

# Input types
## Required
- detect_hand
    - This parameter controls whether the node attempts to detect hands in the input image. Enabling this feature provides valuable data for applications that need to understand hand positions and interactions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_body
    - This parameter enables or disables human body detection in the image. Body detection is essential for applications that need to understand the overall structure and posture of individuals within a scene.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_face
    - Toggling this parameter instructs the node to detect facial features. This capability is critical for applications that need to analyze facial expressions and interactions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- resolution_upscale_by
    - This parameter adjusts the resolution of the input image, which can improve the accuracy of pose detection. Increasing the resolution provides more detailed information, which is beneficial for complex scenes or high-resolution segmentation tasks.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SEGS_PREPROCESSOR
    - The output of this node is a preprocessed image containing human pose annotations, which can serve as the foundation for semantic segmentation tasks. These annotations are critical for accurately identifying and classifying different elements within a scene.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
