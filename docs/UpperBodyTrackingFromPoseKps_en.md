# Documentation
- Class name: UpperBodyTrackingFromPoseKps
- Category: ControlNet Preprocessors/Pose Keypoint Postprocess
- Output node: False
- Repo Ref: https://github.com/Fannovel16/comfyui_controlnet_aux

Plug-and-play ComfyUI node sets for making ControlNet hint images

# Input types
## Required
- pose_kps
    - The pose_kps input is used by this node during execution.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: object
- id_include
    - The id_include input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- Head_width_height
    - The Head_width_height input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- Neck_width_height
    - The Neck_width_height input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- Shoulder_width_height
    - The Shoulder_width_height input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- Torso_width_height
    - The Torso_width_height input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- RArm_width_height
    - The RArm_width_height input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- RForearm_width_height
    - The RForearm_width_height input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- LArm_width_height
    - The LArm_width_height input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- LForearm_width_height
    - The LForearm_width_height input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- tracking
    - The tracking output is produced by this node.
    - Comfy dtype: TRACKING
    - Python dtype: object
- prompt
    - The prompt output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Fannovel16/comfyui_controlnet_aux)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
