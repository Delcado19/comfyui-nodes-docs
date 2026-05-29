# Documentation
- Class name: CR_DiamondPanel
- Category: Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_DiamondPanel is a node for creating visually appealing diamond panels from images. It enhances layout functionality by providing pattern designs, which can be seamlessly integrated into various graphics applications. This node focuses on the aesthetic display of images, allowing creative freedom in panel arrangement and design.

# Input types
## Required
- image
    - The image parameter is the core input of the CR_DiamondPanel node for generating diamond panels. It is crucial because it determines the visual content of the output panel.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- pattern
    - The pattern parameter determines the type of design applied to the panel. It is important because it allows users to choose between standard or diamond patterns, affecting the final appearance of the layout.
    - Comfy dtype: COMBO['none', 'diamond']
    - Python dtype: str
## Optional
- drop_percentage
    - The drop_percentage parameter adjusts the spacing between diamond panels. It plays a crucial role in the overall composition by controlling the density and arrangement of panels in the layout.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The image output of the CR_DiamondPanel node represents the final diamond pattern layout. It is a combination of the input image and the selected pattern, available for further use or display.
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
