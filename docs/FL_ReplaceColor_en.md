# Documentation
- Class name: FL_ReplaceColor
- Category: 🏵️Fill Nodes/Image
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

FL_ReplaceColor allows you to replace a specific color in an image with another color. 
You can use the interactive color pickers to select the source color to replace and the target color to replace it with.
The tolerance parameter controls how closely colors need to match the source color to be replaced.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- source_color
    - The source_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- target_color
    - The target_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- tolerance
    - The tolerance input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- expand_pixels
    - The expand_pixels input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- contract_pixels
    - The contract_pixels input is used by this node during execution.
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
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
