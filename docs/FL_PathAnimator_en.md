# Documentation
- Class name: FL_PathAnimator
- Category: 🎨 FL Path Animator
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Creates animated shapes that follow user-drawn paths.
Open the path editor to draw trajectories on a reference image, then shapes will follow these paths over time.
Outputs WAN ATI-compatible coordinate strings with proper 121-point resampling for stable video generation.

# Input types
## Required
- frame_width
    - The frame_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The frame_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_count
    - The frame_count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shape
    - The shape input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- shape_size
    - The shape_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shape_color
    - The shape_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- bg_color
    - The bg_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- blur_radius
    - The blur_radius input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trail_length
    - The trail_length input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation_speed
    - The rotation_speed input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- border_width
    - The border_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The border_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- paths_data
    - The paths_data input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- timeout_seconds
    - The timeout_seconds input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- coordinates
    - The coordinates output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
