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
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
