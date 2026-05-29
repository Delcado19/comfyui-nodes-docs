# Documentation
- Class name: CR_RandomHexColor
- Category: Comfyroll/Utils/Random
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_RandomHexColor node is designed to generate random hexadecimal color codes. Its purpose is to provide users with a set of unique, randomly generated colors that can be used in various graphic design or visual applications. The node emphasizes creating diversity in color selection without manual specification, thereby simplifying the design process and offering a convenient way to experiment with color variations.

# Input types
## Required
- seed
    - The "seed" parameter is critical to the node's operation because it initializes the random number generator, ensuring that the generated colors are reproducible. This feature is particularly important for maintaining consistency across different runs or for debugging purposes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- hex_color1
    - The "hex_color1" output provides the first randomly generated hexadecimal color code. It is significant because it represents one of the diverse color options the node can produce, suitable for direct use in color-related applications.
    - Comfy dtype: STRING
    - Python dtype: str
- hex_color2
    - The "hex_color2" output provides a second unique hexadecimal color code. Like "hex_color1", it is designed to offer users a different color choice, expanding the range of colors available for their projects.
    - Comfy dtype: STRING
    - Python dtype: str
- hex_color3
    - The "hex_color3" output generates a third distinct hexadecimal color code. This output further enhances the diversity of colors that can be used, providing more options for creative work.
    - Comfy dtype: STRING
    - Python dtype: str
- hex_color4
    - The "hex_color4" output represents the fourth randomly generated hexadecimal color code. It continues to expand the range of color choices, ensuring users have multiple options to choose from for their design needs.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The "show_help" output provides a URL link to a documentation page for further assistance. This is a useful resource for users who may need additional guidance or information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_RandomHexColor:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('STRING', 'STRING', 'STRING', 'STRING', 'STRING')
    RETURN_NAMES = ('hex_color1', 'hex_color2', 'hex_color3', 'hex_color4', 'show_help')
    FUNCTION = 'get_colors'
    CATEGORY = icons.get('Comfyroll/Utils/Random')

    def get_colors(self, seed):
        random.seed(seed)
        hex_color1 = random_hex_color()
        hex_color2 = random_hex_color()
        hex_color3 = random_hex_color()
        hex_color4 = random_hex_color()
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-random-hex-color'
        return (hex_color1, hex_color2, hex_color3, hex_color4, show_help)
```