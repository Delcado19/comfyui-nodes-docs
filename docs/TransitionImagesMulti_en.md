# Documentation
- Class name: TransitionImagesMulti
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Creates transitions between images.

# Input types
## Required
- inputcount
    - The inputcount input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- interpolation
    - The interpolation input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- transition_type
    - The transition_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- transitioning_frames
    - The transitioning_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- blur_radius
    - The blur_radius input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reverse
    - The reverse input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
