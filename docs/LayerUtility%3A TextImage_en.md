# Documentation
- Class name: TextJoin
- Category: 😺dzNodes/LayerUtility/Data
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate images and masks from text. Supports adjusting character spacing, line spacing, horizontal and vertical layout adjustments, and can set random variations of text, including size and position randomness.

*Only accepts image and mask inputs; forcing other input types will cause node errors. **The font folder is defined in resource_dir.ini, which resides in the plugin root directory; by default its name is resource_dir.ini.example. On first use, rename the file extension to .ini. Open the file with a text editor, locate the line starting with “FONT_dir=”, and edit after the “=” to specify a custom folder path. All .ttf and .otf files in this folder are collected and displayed in the node list during ComfyUI initialization. If the folder specified in the ini is invalid, the plugin will fall back to its built‑in font folder.

# Input types

## Required

- text
    - Text.
    - Comfy dtype: STRING
    - Python dtype: str

- font_file
    - This lists the available font files in the font folder; the selected font file will be used to generate the image.
    - Comfy dtype: STRING
    - Python dtype: str

- spacing
    - Character spacing, in pixels.
    - Comfy dtype: INT
    - Python dtype: int

- leading
    - Line spacing, in pixels.
    - Comfy dtype: INT
    - Python dtype: int

- horizontal_border
    - Side margin. The value is a percentage; for example, 50 places the start at the exact center of the sides. If the text is horizontal, it is the left margin; if vertical, it is the right margin.
    - Comfy dtype: FLOAT
    - Python dtype: float

- vertical_border
    - Top margin. The value is a percentage; for example, 10 places the start at 10% from the top.
    - Comfy dtype: FLOAT
    - Python dtype: float

- scale
    - Overall text size. The initial size is automatically calculated based on canvas dimensions and text content, defaulting to fit the longest row or column to the canvas width or height. Adjusting this value scales the text overall; for example, 60 scales it to 60%.
    - Comfy dtype: FLOAT
    - Python dtype: float

- variation_range
    - Character random variation range. When greater than 0, characters undergo size and position randomness; the larger the value, the greater the variation.
    - Comfy dtype: INT
    - Python dtype: int

- variation_seed
    - Random variation seed. Fixing this value ensures that each character's variation remains consistent across generations.
    - Comfy dtype: INT
    - Python dtype: int

- layout
    - Text layout. Horizontal and vertical orientations are selectable.
    - Comfy dtype: STRING
    - Python dtype: str

- width
    - Width of the canvas. Ignored if size_as input is provided.
    - Comfy dtype: INT
    - Python dtype: int

- height
    - Height of the canvas. Ignored if size_as input is provided.
    - Comfy dtype: INT
    - Python dtype: int

- text_color
    - Text color.
    - Comfy dtype: STRING
    - Python dtype: str

- background_color
    - Background color.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- size_as
    - Input an image or mask here; the output image and mask will be generated according to its dimensions. Note: this input takes priority over the width and height settings below.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class TextImage:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        layout_list = ['horizontal', 'vertical']
        random_seed = int(time.time())
        return {
            "required": {
                "text": ("STRING", {"multiline": True, "default": "Text"}),
                "font_file": (FONT_LIST,),
                "spacing": ("INT", {"default": 0, "min": -9999, "max": 9999, "step": 1}),
                "leading": ("INT", {"default": 0, "min": -9999, "max": 9999, "step": 1}),
                "horizontal_border": ("FLOAT", {"default": 5, "min": -100, "max": 100, "step": 0.1}), # 左右距离百分比，横排为距左侧，竖排为距右侧
                "vertical_border": ("FLOAT", {"default": 5, "min": -100, "max": 100, "step": 0.1}),  # 上距离百分比
                "scale": ("FLOAT", {"default": 80, "min": 0.1, "max": 999, "step": 0.01}),  # 整体大小与画面长宽比，横排与宽比，竖排与高比
                "variation_range": ("INT", {"default": 0, "min": 0, "max": 100, "step": 1}), # 随机大小和位置范围
                "variation_seed": ("INT", {"default": random_seed, "min": 0, "max": 999999999999, "step": 1}),  # 随机种子
                "layout": (layout_list,),  # 横排or竖排
                "width": ("INT", {"default": 512, "min": 4, "max": 999999, "step": 1}),
                "height": ("INT", {"default": 512, "min": 4, "max": 999999, "step": 1}),
                "text_color": ("STRING", {"default": "#FFA000"}),  # 文字颜色
                "background_color": ("STRING", {"default": "#FFFFFF"}),  # 背景颜色
            },
            "optional": {
                "size_as": (any, {}),
            }
        }

    RETURN_TYPES = ("IMAGE", "MASK",)
    RETURN_NAMES = ("image", "mask",)
    FUNCTION = 'text_image'
    CATEGORY = '😺dzNodes/LayerUtility'

    def text_image(self, text, font_file, spacing, leading, horizontal_border, vertical_border, scale,
                  variation_range, variation_seed, layout, width, height, text_color, background_color,
                  size_as=None
                  ):

        # spacing -= 20
        # leading += 20
        # scale *= 0.7
        if size_as is not None:
            width, height = tensor2pil(size_as).size
        text_table = []
        max_char_in_line = 0
        total_char = 0
        spacing = int(spacing * scale / 100)
        leading = int(leading * scale / 100)
        lines = []
        text_lines = text.split("\n")
        for l in text_lines:
            if len(l) > 0:
                lines.append(l)
                total_char += len(l)
                if len(l) > max_char_in_line:
                    max_char_in_line = len(l)
            else:
                lines.append(" ")
        if layout == 'vertical':
            char_horizontal_size = width // len(lines)
            char_vertical_size = height // max_char_in_line
            char_size = min(char_horizontal_size, char_vertical_size)
            if char_size < 1:
                char_size = 1
            start_x = width - int(width * horizontal_border/100) - char_size
        else:
            char_horizontal_size = width // max_char_in_line
            char_vertical_size = height // len(lines)
            char_size = min(char_horizontal_size, char_vertical_size)
            if char_size < 1:
                char_size = 1
            start_x = int(width * horizontal_border/100)
        start_y = int(height * vertical_border/100)

        # calculate every char position and size to a table list
        for i in range(len(lines)):
            _x = start_x
            _y = start_y
            line_table = []
            line_random = random_numbers(total=len(lines[i]),
                                         random_range=int(char_size * variation_range / 25),
                                         seed=variation_seed, sum_of_numbers=0)
            for j in range(0, len(lines[i])):
                offset = int((char_size + line_random[j]) * variation_range / 250)
                offset = int(offset * scale / 100)
                font_size = char_size + line_random[j]
                font_size = int(font_size * scale / 100)
                if font_size < 4:
                    font_size = 4
                axis_x = _x + offset // 3 if random.random() > 0.5 else _x - offset // 3
                axis_y = _y + offset // 3 if random.random() > 0.5 else _y - offset // 3
                char_dict = {'char':lines[i][j],
                             'axis':(axis_x, axis_y),
                             'size':font_size}
                line_table.append(char_dict)
                if layout == 'vertical':
                    _y += char_size + line_random[j] + spacing
                else:
                    _x += char_size + line_random[j] + spacing
            if layout == 'vertical':
                start_x -= leading * (i+1) + char_size
            else:
                start_y += leading * (i+1) + char_size
            text_table.append(line_table)

        # draw char
        _mask = Image.new('RGB', size=(width, height), color='black')
        draw = ImageDraw.Draw(_mask)
        for l in range(len(lines)):
            for c in range(len(lines[l])):
                font_path = FONT_DICT.get(font_file)
                font_size = text_table[l][c].get('size')
                font = ImageFont.truetype(font_path, font_size)
                draw.text(text_table[l][c].get('axis'), text_table[l][c].get('char'), font=font, fill='white')
        _canvas = Image.new('RGB', size=(width, height), color=background_color)
        _color = Image.new('RGB', size=(width, height), color=text_color)
        _canvas.paste(_color, mask=_mask.convert('L'))
        _canvas = RGB2RGBA(_canvas, _mask)
        log(f"{NODE_NAME} Processed.", message_type='finish')
        return (pil2tensor(_canvas), image2mask(_mask),)
```