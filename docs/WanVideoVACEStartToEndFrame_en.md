# Documentation
- Class name: WanVideoVACEStartToEndFrame
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Helper node to create start/end frame batch and masks for VACE

# Input types
## Required
- num_frames
    - Number of frames to encode
    - Comfy dtype: INT
    - Python dtype: int
- empty_frame_level
    - White level of empty frame to use
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- start_image
    - The start_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- end_image
    - The end_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- control_images
    - The control_images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- inpaint_mask
    - Inpaint mask to use for the empty frames
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- start_index
    - Index to start from
    - Comfy dtype: INT
    - Python dtype: int
- end_index
    - Index to end at
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
