# Documentation
- Class name: ImageBatchTestPattern
- Category: KJNodes/text
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The ImageBatchTestPattern node is designed to generate a batch of images with text patterns. It creates images by drawing numbers on a black background using the specified font and font size. This node is particularly useful for testing and visualizing how different fonts and sizes affect the appearance of text in images.

# Input types
## Required
- batch_size
    - The batch_size parameter determines the number of images to generate. It is critical for controlling the volume of output data and is directly related to the computational load of node execution.
    - Comfy dtype: INT
    - Python dtype: int
- start_from
    - The start_from parameter sets the starting number for the sequence of numbers to be drawn on the images. It is significant for defining the range of numbers that will appear in the generated pattern.
    - Comfy dtype: INT
    - Python dtype: int
- text_x
    - The text_x parameter specifies the x coordinate at which the text will be drawn on the image. It is an important parameter because it determines the horizontal position of the text within the image.
    - Comfy dtype: INT
    - Python dtype: int
- text_y
    - The text_y parameter specifies the y coordinate at which the text will be drawn on the image. It controls the vertical position of the text and is critical for aligning text within the image.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width parameter defines the width of the generated images. It is a key parameter that affects the overall dimensions of the output images and is closely related to the aspect ratio and visual presentation of the text.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the height of the generated images. It works together with the width parameter to determine the overall size and shape of the output images.
    - Comfy dtype: INT
    - Python dtype: int
- font
    - The font parameter selects the font type used for the text in the images. It is a key parameter because it significantly affects the style and readability of the text in the images.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The font_size parameter sets the font size used for the text in the images. It is an important factor in determining the prominence and visibility of the text in the images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output contains a batch of generated images with the specified text pattern. Each image is a tensor representing visual data that can be used for further processing or visualization.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
