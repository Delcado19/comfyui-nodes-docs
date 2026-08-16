# Documentation
- Class name: FL_AnimatedShapePatterns
- Category: 🏵️Fill Nodes/WIP
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Creates animated geometric shape patterns with various algorithms.
Generates a batch of images with shapes arranged in interesting patterns.

# Input types
## Required
- pattern_type
    - The pattern_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- frame_count
    - The frame_count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_width
    - The frame_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The frame_height input is used by this node during execution.
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
- count
    - The count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- speed
    - The speed input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - The amplitude input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frequency
    - The frequency input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- blur_radius
    - The blur_radius input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- trail_length
    - The trail_length input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- size_variation
    - The size_variation input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation
    - The rotation input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- phase_offset
    - The phase_offset input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- intensity
    - The intensity input is used by this node during execution.
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
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
