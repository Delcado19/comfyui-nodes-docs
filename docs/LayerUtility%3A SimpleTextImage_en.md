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
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
