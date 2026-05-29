# Documentation
- Class name: CR_ColorTint
- Category: Comfyroll/Graphics/Filter
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ColorTint node applies a color tint to images, enhancing visual appeal by overlaying the selected color. It offers a versatile color manipulation method, allowing users to choose from predefined colors or enter custom hexadecimal values. It is optimized for custom color application and batch processing, ensuring efficiency and consistency across multiple images.

# Input types
## Required
- image
- The image parameter is required because it is the input the node will process. It is the basis for applying the color tint effect and a key component of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- strength
- The intensity parameter controls the strength of the color tint applied to the image. It allows fine‑tuning of the effect to achieve the desired visual result and is an important aspect of the node's functionality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
- The mode parameter determines the type of color tint to apply. It provides a range of preset options so users can select a specific color tone that fits their creative vision.
    - Comfy dtype: COMBO['custom', 'white', 'black', 'sepia', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'purple', 'orange', 'warm', 'cool', 'lime', 'navy', 'vintage', 'rose', 'teal', 'maroon', 'peach', 'lavender', 'olive']
    - Python dtype: str
- tint_color_hex
- When a custom color is selected, use the tint_color_hex parameter. It lets users specify the exact hexadecimal color for the tint, offering high customization for the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
- The IMAGE output is the processed image with the color tint applied. It represents the final result of the node's operation and is the primary output for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- The show_help output provides a URL to the node documentation. It is a useful resource for users seeking effective use of the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
