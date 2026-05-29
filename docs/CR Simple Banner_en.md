# Documentation
- Class name: CR_SimpleBanner
- Category: Comfyroll/Graphics/Template
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleBanner node aims to create visually appealing banners from provided images and text. It intelligently adjusts text size and position, ensuring the banner is both readable and aesthetically pleasing, offering customization options for font, color, and outline to meet different design needs.

# Input types
## Required
- image
    - The image parameter is crucial for the banner creation process, as it forms the visual foundation of the output. It determines the canvas on which the text will be rendered.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- banner_text
    - Banner text is a key input that conveys the information or message intended for the audience. It is the main content that will be styled and displayed on the banner.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
    - The font name parameter determines the style of the text on the banner, affecting the overall feel of the final output. It is a key factor in setting the tone for the banner message.
    - Comfy dtype: STRING
    - Python dtype: str
- max_font_size
    - The maximum font size parameter ensures that the text fits the banner dimensions while maintaining readability. This is a critical factor in laying out and designing the banner text.
    - Comfy dtype: INT
    - Python dtype: int
- font_color
    - The font color parameter allows customization of the text appearance, ensuring it stands out against the banner background for maximum visual impact.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- outline_thickness
    - The outline thickness parameter adds a border around the text, enhancing its visibility and giving it a more defined look. This is an optional feature that can be adjusted according to design preferences.
    - Comfy dtype: INT
    - Python dtype: int
- outline_color
    - The outline color parameter complements the text by defining the color of the text border, contributing to the overall aesthetic appeal of the banner.
    - Comfy dtype: STRING
    - Python dtype: str
- margin_size
    - The margin size parameter adjusts the spacing around the text, providing a balanced look and ensuring the text does not appear too cramped or too sparse on the banner.
    - Comfy dtype: INT
    - Python dtype: int
- font_color_hex
    - The font color hex parameter allows precise color customization of the text using hexadecimal values, providing a wide range of color choices for the banner text.
    - Comfy dtype: STRING
    - Python dtype: str
- outline_color_hex
    - The outline color hex parameter specifies the hexadecimal color value for the text outline, allowing detailed color adjustments and enhancing the visual design of the banner.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output image is the final banner that combines the styled text and design elements. It represents the outcome of all input parameters and customizations made to the banner.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The display help parameter provides a link to documentation for further guidance and assistance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
