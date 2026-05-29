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
```
class CR_RandomRGBGradient:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'rows': ('INT', {'default': 5, 'min': 1, 'max': 2048})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('multiline_text', 'show_help')
    FUNCTION = 'generate'
    CATEGORY = icons.get('Comfyroll/Utils/Random')

    def generate(self, rows, seed):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-random-RGB-gradient'
        random.seed(seed)
        temp = 0
        multiline_text = ''
        for i in range(1, rows + 1):
            print(temp)
            if temp <= 99 - rows + i:
                upper_bound = min(99, temp + (99 - temp) // (rows - i + 1))
                current_value = random.randint(temp, upper_bound)
                multiline_text += f'{current_value}:{random.randint(0, 255)},{random.randint(0, 255)},{random.randint(0, 255)}\n'
                temp = current_value + 1
        return (multiline_text, show_help)
```