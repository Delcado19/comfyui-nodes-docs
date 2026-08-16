# Documentation
- Class name: DaSiWa_Watermark
- Category: DaSiWa/Video
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

DaSiWa Watermark: A professional-grade watermark overlay node with stable CPU compositing.
Stores output batches in RAM and blends from initialized source frames to avoid flicker,
Bicubic/Lanczos scaling, rotation, and 'Optical Padding' for perfect visual alignment.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- watermark_path
    - The watermark_path input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- position
    - The position input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resampling
    - The resampling input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- transparency
    - The transparency input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation
    - The rotation input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- padding_x
    - The padding_x input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- padding_y
    - The padding_y input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- optical_padding
    - The optical_padding input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- optical_strength
    - The optical_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- random_switches
    - The random_switches input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- fade
    - The fade input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fade_margin
    - The fade_margin input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- randomize_position
    - The randomize_position input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_seed
    - The random_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
