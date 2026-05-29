# Documentation
- Class name: CR_MaskText
- Category: Graphics/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_MaskText node is designed to overlay text onto images in a stylized manner. It allows customization of font, size, color, and position to create visually appealing text overlays. The node emphasizes integrating text within graphical elements, aiming to enhance the overall aesthetic of the image.

# Input types
## Required
- image
    - The image to be masked with text. It serves as the foundation for the entire operation, with text applied directly onto it. The choice of image has a significant impact on the final visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text content to be masked onto the image. The content and structure of the text can greatly alter the message conveyed by the final image, making it a critical parameter for the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
    - The specific font file used for rendering the text. Different fonts can drastically change the style and readability of the text, thus playing an important role in the node's execution.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The font size used for the text. Font size directly affects the readability and prominence of the text within the image.
    - Comfy dtype: INT
    - Python dtype: int
- background_color
    - The color of the background behind the text. This can be a predefined color or a custom hex color, affecting the contrast and visual appeal of the text overlay.
    - Comfy dtype: STRING
    - Python dtype: str
- align
    - The horizontal alignment of the text. It determines the positioning of the text within the image's width, affecting the overall layout.
    - Comfy dtype: STRING
    - Python dtype: str
- justify
    - The alignment of the text. It controls the spacing between words, affecting the uniformity of the text block's appearance.
    - Comfy dtype: STRING
    - Python dtype: str
- margins
    - The space around the text, i.e., the margin. It adds a buffer zone around the text, which can be important for text visibility and image composition.
    - Comfy dtype: INT
    - Python dtype: int
- line_spacing
    - The vertical space between lines of text. It affects the readability and overall compactness of multi-line text.
    - Comfy dtype: INT
    - Python dtype: int
- position_x
    - The horizontal position of the text from the left edge of the image. It is crucial for precise placement of text within the image.
    - Comfy dtype: INT
    - Python dtype: int
- position_y
    - The vertical position of the text from the top edge of the image. It is used in conjunction with the horizontal position to precisely place the text.
    - Comfy dtype: INT
    - Python dtype: int
- rotation_angle
    - The angle of rotation for the text. It provides a method to position text in various orientations, adding a dynamic element to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation_options
    - Determines the pivot point for rotation, which can be the center of the text or the center of the image. This affects how the text's orientation is perceived relative to the image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- bg_color_hex
    - A custom hex color for the background. It allows further customization of the text's background, enhancing the flexibility of the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The output image with the masked text applied. It is the result of the node's processing, representing the final visual product.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - A URL link to the documentation for further assistance. It provides users with additional resources to understand and troubleshoot the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
