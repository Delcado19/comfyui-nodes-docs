# Documentation
- Class name: CreateTextOnPath
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Creates a mask or batch of masks with the specified text.  
Locations are center locations.

# Input types
## Required
- coordinates
    - The coordinates input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_width
    - The frame_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The frame_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- font
    - The font input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- font_size
    - The font_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- alignment
    - The alignment input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text_color
    - The text_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- size_multiplier
    - The size_multiplier input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_inverted
    - The mask_inverted output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
