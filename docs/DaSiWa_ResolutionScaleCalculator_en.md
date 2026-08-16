# Documentation
- Class name: DaSiWa_ResolutionScaleCalculator
- Category: DaSiWa/Scaling
- Output node: False
- Repo Ref: https://github.com/darksidewalker/ComfyUI-DaSiWa-Nodes

DaSiWa Resolution Scale Calculator
    
    Calculates mathematically precise resolutions based on a target Megapixel area.
    
    - Standard Mode: Pure mathematical scaling.

    - WAN/LTX Mode: Snaps to 32-pixel boundaries (mandatory for WAN/LTX VAEs).

    - No Scale: Overrides all math and outputs the source image dimensions directly.

# Input types
## Required
- resolution_preset
    - The resolution_preset input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- no_scale
    - The no_scale input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- scale_from_image
    - The scale_from_image input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- aspect_preset_when_not_image
    - The aspect_preset_when_not_image input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- swap_aspect_when_not_image
    - The swap_aspect_when_not_image input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- custom_aspect_width
    - The custom_aspect_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- custom_aspect_height
    - The custom_aspect_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_divisor
    - The custom_divisor input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width_int
    - The width_int output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height_int
    - The height_int output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- width_float
    - The width_float output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- height_float
    - The height_float output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/darksidewalker/ComfyUI-DaSiWa-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
