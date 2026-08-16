# Documentation
- Class name: LayerColor: AutoAdjustV2
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- brightness
    - The brightness input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- contrast
    - The contrast input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- saturation
    - The saturation input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- red
    - The red input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The green input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The blue input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
