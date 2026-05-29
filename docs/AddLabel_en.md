
# Documentation
- Class name: AddLabel
- Category: KJNodes/text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AddLabel node is used to add text labels to images, allowing customization of text position, size, color, and the label's background color. It supports both single and batch processing, enabling multiple titles for batch image processing.

# Input types
## Required
- image
    - The input image to which the label needs to be added. This is the main canvas for adding the label.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text_x
    - The x-coordinate of the starting point of the text on the image. It determines the horizontal starting position of the text.
    - Comfy dtype: INT
    - Python dtype: int
- text_y
    - The y-coordinate of the starting point of the text on the image. It determines the vertical starting position of the text.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the label area to be added to the image. It affects the overall height of the final image.
    - Comfy dtype: INT
    - Python dtype: int
- font_size
    - The font size used for the label text. This determines the size at which the text is displayed on the label.
    - Comfy dtype: INT
    - Python dtype: int
- font_color
    - The font color used for the label text. It defines the visual appearance of the text.
    - Comfy dtype: STRING
    - Python dtype: str
- label_color
    - The background color of the label area. This color will fill the background of the text label.
    - Comfy dtype: STRING
    - Python dtype: str
- font
    - The font used for the label text. This parameter allows selection of different font styles.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
    - The text content to be added to the image as a label. This is the actual label text.
    - Comfy dtype: STRING
    - Python dtype: str
- direction
    - The direction in which the label will be added to the image, which can be up or down.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- caption
    - Optional titles for batch processing. When provided, each image in the batch will have its corresponding title as a label.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Output types
- image
    - The output image with the added label. This image includes the original content plus the newly added label area.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
