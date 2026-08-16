# Documentation
- Class name: RenderPeopleKps
- Category: ControlNet Preprocessors/Pose Keypoint Postprocess
- Output node: False
- Repo Ref: https://github.com/Fannovel16/comfyui_controlnet_aux

Plug-and-play ComfyUI node sets for making ControlNet hint images

# Input types
## Required
- kps
    - The kps input is used by this node during execution.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: object
- render_body
    - The render_body input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- render_hand
    - The render_hand input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- render_face
    - The render_face input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Fannovel16/comfyui_controlnet_aux)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
