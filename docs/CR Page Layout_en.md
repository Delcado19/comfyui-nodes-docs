# Documentation
- Class name: CR_PageLayout
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_PageLayout node is designed to generate structured image layouts by adding custom header and footer text. It allows manipulation of font properties, colors, and the addition of borders to create visually appealing compositions.

# Input types
## Required
- layout_options
    - Layout options define which parts of the layout will be included in the final image. This choice affects the overall structure and composition of the output.
    - Comfy dtype: COMBO['header', 'footer', 'header and footer', 'no header or footer']
    - Python dtype: str
- image_panel
    - The main image panel, serving as the central component of the layout. It is the image to which headers and footers will be added.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- header_height
    - Specifies the height of the header section. This parameter is essential for determining the spacing and size of the header in the layout.
    - Comfy dtype: INT
    - Python dtype: int
- header_text
    - Text content of the header section. It affects the visual display of the header and the message it conveys.
    - Comfy dtype: STRING
    - Python dtype: str
- header_align
    - Determines the text alignment of the header. It affects the position of the header text within the header section.
    - Comfy dtype: JUSTIFY_OPTIONS
    - Python dtype: str
- footer_height
    - Specifies the height of the footer section. It is an important parameter for setting the spacing and size of the footer in the layout.
    - Comfy dtype: INT
    - Python dtype: int
- footer_text
    - Text content of the footer section. It determines the information and visual style of the footer.
    - Comfy dtype: STRING
    - Python dtype: str
- footer_align
    - Defines the text alignment of the footer. It controls the position of the footer text within the footer section.
    - Comfy dtype: JUSTIFY_OPTIONS
    - Python dtype: str
- font_name
    - Selects the font for the header and footer text. The choice of font can significantly affect the overall aesthetics of the layout.
    - Comfy dtype: FONT_LIST
    - Python dtype: str
- font_color
    - Sets the font color for the header and footer text. It plays a key role in the readability and visual appeal of the text.
    - Comfy dtype: COLORS
    - Python dtype: str
- header_font_size
    - Defines the font size for the header text. It affects the prominence and readability of the header in the layout.
    - Comfy dtype: INT
    - Python dtype: int
- footer_font_size
    - Specifies the font size for the footer text. It is important for the visibility and prominence of the footer in the layout.
    - Comfy dtype: INT
    - Python dtype: int
- border_thickness
    - Determines the thickness of the border around the layout. It contributes to the overall framing and definition of the layout edges.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - Sets the color of the border around the layout. It plays an important role in the visual boundary and style of the layout.
    - Comfy dtype: COLORS
    - Python dtype: str
- background_color
    - Defines the background color of the layout. It provides the basic visual background for all other elements.
    - Comfy dtype: COLORS
    - Python dtype: str

# Output types
- image
    - The final composited image, including any headers, footers, and borders as specified by the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - Provides documentation links for further assistance and detailed information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
