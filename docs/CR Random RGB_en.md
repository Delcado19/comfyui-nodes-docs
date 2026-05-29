# Documentation
- Class name: CR_RandomRGB
- Category: Comfyroll/Utils/Random
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_RandomRGB node generates random RGB color codes. It serves as a utility for applications that need random color generation, such as graphic design or visual effects. The node ensures each execution produces a unique set of colors, enhancing diversity and randomness of color selection.

# Input types
## Required
- seed
    - The seed parameter is crucial for initializing the random number generator to ensure repeatability of the generated random RGB colors. It allows users to control randomness and obtain the same color set when needed, which is essential for consistent color schemes across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- rgb_1
    - The first output parameter 'rgb_1' provides a string representation of a randomly generated RGB color code. It is formatted as a comma‑separated list of three integers, each ranging from 0 to 255, representing the red, green, and blue components of the color.
    - Comfy dtype: STRING
    - Python dtype: str
- rgb_2
    - The second output parameter 'rgb_2' provides another distinct randomly generated RGB color code string, similar to 'rgb_1' but with different values to ensure variety in color selection.
    - Comfy dtype: STRING
    - Python dtype: str
- rgb_3
    - The third output parameter 'rgb_3' provides yet another unique randomly generated RGB color code string, further expanding the range of colors available to different applications.
    - Comfy dtype: STRING
    - Python dtype: str
- rgb_4
    - The fourth output parameter 'rgb_4' provides an additional distinct RGB color code string, increasing the set of random colors usable in various scenarios.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output parameter provides a URL link to the documentation page for further help and information about the node's features and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
