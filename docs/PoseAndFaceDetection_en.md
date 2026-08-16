# Documentation
- Class name: PoseAndFaceDetection
- Category: WanAnimatePreprocess
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanAnimatePreprocess

Detects human poses and face images from input images. Optionally retargets poses based on a reference image.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: POSEMODEL
    - Python dtype: object
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Width of the generation
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the generation
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- retarget_image
    - Optional reference image for pose retargeting
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- face_padding
    - When > 0, the detected face images are padded and resized to 512x512
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pose_data
    - The pose_data output is produced by this node.
    - Comfy dtype: POSEDATA
    - Python dtype: object
- face_images
    - The face_images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- key_frame_body_points
    - The key_frame_body_points output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- bboxes
    - The bboxes output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- face_bboxes
    - The face_bboxes output is produced by this node.
    - Comfy dtype: BBOX,
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanAnimatePreprocess)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
