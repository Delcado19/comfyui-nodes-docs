# Documentation
- Class name: CR_BinaryPatternSimple
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_BinaryPatternSimple node parses a binary pattern and renders it as a visual grid. It accepts a string of binary digits and converts it into an image where each bit represents the color of a block in the grid, creating a visual representation of the binary data.

# Input types
## Required
- binary_pattern
- The binary pattern is a string composed of binary digits (0 and 1) that defines the pattern to be drawn. Each row of bits corresponds to a row in the output image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- width
- The width determines the width of the output image in pixels. It should be a positive integer and will affect the size of each block in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The height determines the height of the output image in pixels. Like the width, it should be a positive integer and defines the vertical dimension of the grid.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
- The output image is a visual representation of the input binary pattern. It consists of a grid of squares, each square corresponding to a bit in the pattern.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- Provide a URL link to the documentation for more information and help on using this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_BinaryPatternSimple:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'binary_pattern': ('STRING', {'multiline': True, 'default': '10101'}), 'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'draw_pattern'
    CATEGORY = icons.get('Comfyroll/Graphics/Pattern')

    def draw_pattern(self, binary_pattern, width, height):
        rows = binary_pattern.strip().split('\n')
        grid = [[int(bit) for bit in row.strip()] for row in rows]
        square_width = width // len(rows[0])
        square_height = height // len(rows)
        image = Image.new('RGB', (width, height), color='black')
        draw = ImageDraw.Draw(image)
        for (row_index, row) in enumerate(grid):
            for (col_index, bit) in enumerate(row):
                x1 = col_index * square_width
                y1 = row_index * square_height
                x2 = x1 + square_width
                y2 = y1 + square_height
                color = 'black' if bit == 1 else 'white'
                draw.rectangle([x1, y1, x2, y2], fill=color, outline='black')
        image_out = pil2tensor(image)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes-2#cr-simple-binary-pattern'
        return (image_out, show_help)
```