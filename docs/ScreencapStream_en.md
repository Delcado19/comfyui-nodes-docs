# Documentation
- Class name: ScreencapStream
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Captures a frame from a browser screen/window share stream.
Click 'Start capture' to select a screen or window to share.
Live preview is shown in the node. Works with auto-queue.

Crop controls:
- Drag on preview to draw a crop box
- Drag inside the box to move it
- Drag edges or corners to resize
- Shift+drag to lock aspect ratio
- Right-click or double-click to clear crop

# Input types
## Required
- frame_data
    - The frame_data input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- crop_width
    - The crop_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- crop_height
    - The crop_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
