# Documentation
- Class name: CR_SimpleTextWatermark
- Category: Comfyroll/Graphics/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleTextWatermark node overlays text as a watermark on an image. It allows customization of text attributes such as alignment, opacity, and font style to seamlessly blend the watermark with the image content.

# Input types
## Required
- image
- Image parameter is crucial because it defines the base media on which the watermark text will be applied. The chosen image directly influences the final appearance of the watermark in the image context.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
- Text parameter specifies the watermark content to overlay on the image. The information and style of the text are essential for conveying the intended message or brand to the audience.
    - Comfy dtype: STRING
    - Python dtype: str
- align
- Alignment parameter determines the position of the watermark text relative to the image. This ensures the text is placed in a visually appealing and appropriate location.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
- Font name parameter selects the typeface for the watermark text. Font choice can significantly affect readability and visual appeal of the text within the image.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
- Font size parameter sets the size of the watermark text. This attribute matters because it influences the prominence and legibility of the text when displayed on the image.
    - Comfy dtype: INT
    - Python dtype: int
- font_color
- Font color parameter defines the color of the watermark text. It plays a key role in making the text stand out against the image background while maintaining a consistent visual theme.
    - Comfy dtype: STRING
    - Python dtype: str
- opacity
- Opacity parameter adjusts the transparency level of the watermark text. It is important because it allows the text to be visible without overwhelming the underlying image content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_margin
- x_margin parameter specifies the horizontal spacing from the image edge to the watermark text. This is important for achieving a balanced layout and preventing the text from appearing too close to the image edge.
    - Comfy dtype: INT
    - Python dtype: int
- y_margin
- y_margin parameter specifies the vertical spacing from the image edge to the watermark text. This is critical for maintaining an aesthetically pleasing layout and ensuring the text is not obscured by other image elements.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- font_color_hex
- font_color_hex parameter allows using a custom hexadecimal color value for the watermark text. This may be important for precise color matching with brand or design specifications.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
- IMAGE output provides the final image with the watermark applied. It is the result of all node parameters working together to produce the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- show_help output provides a URL to the node documentation for further guidance or assistance. This is a valuable resource for users seeking more information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
