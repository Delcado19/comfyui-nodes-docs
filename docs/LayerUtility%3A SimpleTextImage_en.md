# Documentation
- Class name: SimpleTextImage
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate simply typeset images and masks from text. This node references parts of the functionality and code from [ZHO-ZHO-ZHO/ComfyUI-Text_Image-Composite](https://github.com/ZHO-ZHO-ZHO/ComfyUI-Text_Image-Composite). Thanks to the original author.

*Only accepts image and mask inputs. Forcing other types of input will cause node errors. **The font folder is defined in resource_dir.ini, located in the plugin root directory. The default filename is resource_dir.ini.example. On first use, rename the file extension to .ini. Open it with a text editor, find the line starting with "FONT_dir=", and edit the path after "=" to your custom folder path. All .ttf and .otf files in this folder will be collected and displayed in the node's list during ComfyUI initialization. If the folder specified in the ini is invalid, the plugin's built-in font folder will be used instead.

# Input types

## Required

- text
    - Text.
    - Comfy dtype: STRING
    - Python dtype: str

- font_file
    - Font file.
    - Comfy dtype: FONT_LIST
    - Python dtype: str

- align
    - Alignment.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str

- char_per_line
    - Characters per line.
    - Comfy dtype: INT
    - Python dtype: int

- leading
    - Line spacing.
    - Comfy dtype: INT
    - Python dtype: int

- font_size
    - Font size.
    - Comfy dtype: INT
    - Python dtype: int

- text_color
    - Text color.
    - Comfy dtype: STRING
    - Python dtype: str

- stroke_width
    - Stroke width.
    - Comfy dtype: INT
    - Python dtype: int

- stroke_color
    - Stroke color.
    - Comfy dtype: STRING
    - Python dtype: str

- x_offset
    - X offset.
    - Comfy dtype: INT
    - Python dtype: int

- y_offset
    - Y offset.
    - Comfy dtype: INT
    - Python dtype: int

- width
    - Width of the canvas. Ignored if size_as input is provided.
    - Comfy dtype: INT
    - Python dtype: int

- height
    - Height of the canvas. Ignored if size_as input is provided.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- size_as
    - Input an image or mask here; the output image and mask will be generated according to its dimensions. Note: this input takes priority over the width and height settings below.
    - Comfy dtype: ANY
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
- Infra type: CPU

# Source code

```python
class SimpleTextImage:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):

        return {
            "required": {
                "text": ("STRING",{"default": "text", "multiline": True},
                ),
                "font_file": (FONT_LIST,),
                "align": (["center", "left", "right"],),
                "char_per_line": ("INT", {"default": 80, "min": 1, "max": 8096, "step": 1},),
                "leading": ("INT",{"default": 8, "min": 0, "max": 8096, "step": 1},),
                "font_size": ("INT",{"default": 72, "min": 1, "max": 2500, "step": 1},),
                "text_color": ("STRING", {"default": "#FFFFFF"},),
                "stroke_width": ("INT",{"default": 0, "min": 0, "max": 8096, "step": 1},),
                "stroke_color": ("STRING",{"default": "#FF8000"},),
                "x_offset": ("INT", {"default": 0, "min": 0, "max": 8096, "step": 1},),
                "y_offset": ("INT", {"default": 0, "min": 0, "max": 8096, "step": 1},),
                "width": ("INT", {"default": 512, "min": 1, "max": 8096, "step": 1},),
                "height": ("INT", {"default": 512, "min": 1, "max": 8096, "step": 1},),
            },
            "optional": {
                "size_as": (any, {}),
            }
        }

    RETURN_TYPES = ("IMAGE", "MASK",)
    RETURN_NAMES = ("image", "mask",)
    FUNCTION = 'simple_text_image'
    CATEGORY = '😺dzNodes/LayerUtility'

    def simple_text_image(self, text, font_file, align, char_per_line,
                          leading, font_size, text_color,
                          stroke_width, stroke_color, x_offset, y_offset,
                          width, height, size_as=None
                          ):

        ret_images = []
        ret_masks = []
        if size_as is not None:
            if size_as.dim() == 2:
                size_as_image = torch.unsqueeze(mask, 0)
            if size_as.shape[0] > 0:
                size_as_image = torch.unsqueeze(size_as[0], 0)
            else:
                size_as_image = copy.deepcopy(size_as)
            width, height = tensor2pil(size_as_image).size
        font_path = FONT_DICT.get(font_file)
        (_, top, _, _) = ImageFont.truetype(font=font_path, size=font_size, encoding='unic').getbbox(text)
        font = cast(ImageFont.FreeTypeFont, ImageFont.truetype(font_path, font_size))
        if char_per_line == 0:
            char_per_line = int(width / font_size)
        paragraphs = text.split('\n')

        img_height = height  # line_height * len(lines)
        img_width = width  # max(font.getsize(line)[0] for line in lines)

        img = Image.new("RGBA", size=(img_width, img_height), color=(0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        y_text = y_offset + stroke_width
        for paragraph in paragraphs:
            lines = textwrap.wrap(paragraph, width=char_per_line, expand_tabs=False,
                                  replace_whitespace=False, drop_whitespace=False)
            for line in lines:
                width = font.getbbox(line)[2] - font.getbbox(line)[0]
                height = font.getbbox(line)[3] - font.getbbox(line)[1]
                # 根据 align 参数重新计算 x 坐标
                if align == "left":
                    x_text = x_offset
                elif align == "center":
                    x_text = (img_width - width) // 2
                elif align == "right":
                    x_text = img_width - width - x_offset
                else:
                    x_text = x_offset  # 默认为左对齐

                draw.text(
                    xy=(x_text, y_text),
                    text=line,
                    fill=text_color,
                    font=font,
                    stroke_width=stroke_width,
                    stroke_fill=stroke_color,
                    )
                y_text += height + leading
            y_text += leading * 2

        if size_as is not None:
            for i in size_as:
                ret_images.append(pil2tensor(img))
                ret_masks.append(image2mask(img.split()[3]))
        else:
            ret_images.append(pil2tensor(img))
            ret_masks.append(image2mask(img.split()[3]))

        log(f"{NODE_NAME} Processed.", message_type='finish')
        return (torch.cat(ret_images, dim=0),torch.cat(ret_masks, dim=0),)
```