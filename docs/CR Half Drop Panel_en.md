# Documentation
- Class name: CR_HalfDropPanel
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_HalfDropPanel is a node that operates on and transforms images according to a specified mode, creating a drop effect with customizable percentage values. It enhances visual presentation by applying half-drop, quarter-drop, or custom drop modes, offering users a flexible way to adjust image layout and aesthetics for various design purposes.

# Input types
## Required
- image
- The image parameter is required because it is the fundamental input for the node. It determines the source material for the drop panel effect and is critical to the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- pattern
- The mode parameter determines the type of drop effect to apply to the image. It is essential for defining the specific visual transformation the node will perform.
    - Comfy dtype: COMBO['none', 'half drop', 'quarter drop', 'custom drop %']
    - Python dtype: str
## Optional
- drop_percentage
- The drop_percentage parameter is optional but crucial when selecting a custom drop mode. It allows users to control the extent of the drop effect, providing a degree of customization for the image transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
- The transformed image output is the primary result of the node's operation. It represents the image with the drop mode applied, serving as the visual output for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a link to the documentation for further assistance. It is a useful resource for users seeking how to use the node or troubleshoot issues.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
