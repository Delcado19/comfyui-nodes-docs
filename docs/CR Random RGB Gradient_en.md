# Documentation
- Class name: CR_RandomRGBGradient
- Category: Comfyroll/Utils/Random
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_RandomRGBGradient is a node for generating random RGB gradients. It creates a series of smoothly transitioning RGB values, moving from one color to the next, ensuring visually appealing gradient effects. The node is especially suitable for designers and developers who need dynamic and diverse color schemes for projects.

# Input types
## Required
- seed
    - The "seed" parameter is crucial for the node's random number generation. It makes the generated RGB values reproducible, allowing consistent results across runs. This is especially important when the same gradient must be generated multiple times.
    - Comfy dtype: INT
    - Python dtype: int
- rows
    - The "rows" parameter determines the number of color stops in the generated gradient. Higher values produce more detailed gradients with additional intermediate colors, while lower values yield simpler gradients with fewer transitions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- multiline_text
    - The "multiline_text" output contains the RGB gradient data formatted as multiple lines. Each line represents a color stop, with RGB values separated by commas. This format is convenient for applications that require line‑by‑line gradient input.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The "show_help" output provides a URL link to the node's documentation page. This is useful for users who need extra information or guidance on effectively using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
