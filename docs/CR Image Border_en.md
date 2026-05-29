# Documentation
- Class name: CR_ImageBorder
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImageBorder node is designed to add decorative borders to images to enhance their visual appeal in various layouts. It allows customization of border thickness and color, with an optional outline for additional emphasis. This node plays a key role in graphic design workflows where images require a professional and polished presentation.

# Input types
## Required
- image
    - The image parameter is required because it defines the base visual content to which the border will be applied. The quality and resolution of the input image directly affect the final output, making it a fundamental element in the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- top_thickness
    - The top_thickness parameter specifies the border thickness applied to the top edge of the image. It allows fine-tuning the border's appearance to meet design requirements, contributing to the overall aesthetics of the image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom_thickness
    - The bottom_thickness parameter determines the border thickness on the bottom edge of the image. Adjusting this parameter helps achieve a balanced and symmetrical border design, enhancing the visual harmony of the image.
    - Comfy dtype: INT
    - Python dtype: int
- left_thickness
    - The left_thickness parameter controls the thickness of the border on the left side of the image. This is an important aspect when designing borders to ensure the image has a uniform and consistent appearance across all edges.
    - Comfy dtype: INT
    - Python dtype: int
- right_thickness
    - The right_thickness parameter sets the border thickness on the right side of the image. It plays a role in the overall border design, ensuring the edges of the image remain visually consistent with the rest of the layout.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The border_color parameter is used to define the color of the border. It is a key element in setting the tone and style of the image border, influencing the overall mood and presentation of the final image.
    - Comfy dtype: COLOR
    - Python dtype: str
- outline_thickness
    - The outline_thickness parameter specifies the thickness of an outline line to be added around the image. This can add depth and emphasis to the image, making it stand out more in a composition.
    - Comfy dtype: INT
    - Python dtype: int
- outline_color
    - The outline_color parameter determines the color of the outline line surrounding the image. This is an important choice for designers looking to create contrast or harmony with the border_color and the image itself.
    - Comfy dtype: COLOR
    - Python dtype: str
- border_color_hex
    - The border_color_hex parameter allows the use of a custom hex color value to set the border color, providing designers with greater flexibility and control over the exact shade of color desired.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The image output of the CR_ImageBorder node is the processed image with the border and optional outline applied. It represents the final visual result of the node's operation, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL link to a documentation page for further assistance or guidance on using the CR_ImageBorder node. It is a useful resource for users seeking more information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
