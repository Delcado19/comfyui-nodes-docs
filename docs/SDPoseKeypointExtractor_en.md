# Documentation
- Class name: SDPoseKeypointExtractor
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Extract pose keypoints from images using the SDPose model: https://huggingface.co/Comfy-Org/SDPose/tree/main/checkpoints

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- bboxes
    - Optional bounding boxes for more accurate detections. Required for multi-person detection.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object

# Output types
- keypoints
    - Keypoints in OpenPose frame format (canvas_width, canvas_height, people)
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
