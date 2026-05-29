# Documentation
- Class name: CR_DrawText
- Category: Comfyroll/Graphics/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_DrawText node is designed to render text onto an image. It allows customization of font, color, and position to create visually appealing text overlays. This node is versatile and can be used in various applications where text needs to be dynamically added to images.

# Input types
## Required
- image_width
    - The width of the image on which the text will be drawn. This is a critical parameter that determines the overall size of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- image_height
    - The height of the image. It works together with the width to set the dimensions of the canvas on which the text will be rendered.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - The actual text content to be drawn onto the image. It can contain multiple lines of text to accommodate paragraphs or lists.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
    - The name of the font used for the text. It must be a valid .ttf font file available in the specified font directory.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The size of the font, in points. It affects the readability and visual prominence of the text in the image.
    - Comfy dtype: INT
    - Python dtype: int
- font_color
    - The color of the font. It is specified by a name corresponding to a color in a predefined color map.
    - Comfy dtype: STRING
    - Python dtype: str
- background_color
    - The background color of the text area. It is used to create a contrasting background for the text, making it stand out more.
    - Comfy dtype: STRING
    - Python dtype: str
- align
    - The horizontal alignment of the text. It determines how the text is distributed across the width of the image.
    - Comfy dtype: STRING
    - Python dtype: str
- justify
    - The alignment of the text. It controls the spacing between words and characters in the text.
    - Comfy dtype: STRING
    - Python dtype: str
- margins
    - The space around the text, in pixels. It adds a buffer between the text and the edges of the image.
    - Comfy dtype: INT
    - Python dtype: int
- line_spacing
    - The space between lines of text, which affects the overall readability and layout of multi-line text.
    - Comfy dtype: INT
    - Python dtype: int
- position_x
    - The horizontal position where the text will start. It is measured in pixels, starting from the left edge of the image.
    - Comfy dtype: INT
    - Python dtype: int
- position_y
    - The vertical position where the text will start. It is measured in pixels, starting from the top edge of the image.
    - Comfy dtype: INT
    - Python dtype: int
- rotation_angle
    - The angle by which the text will be rotated. It can be used to create stylized effects by tilting the text.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation_options
    - Determines the pivot point for text rotation. It can be the center of the text or the center of the image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The resulting image with the text drawn on it. It is the primary output of the node, representing the final visual product.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- show_help
    - A URL link to the node documentation. It provides additional information and guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
