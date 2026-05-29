# Documentation
- Class name: TextImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node facilitates creating images with text content, providing a range of customization options such as font style, size, and color. It merges text data with visual representation, enabling generation of custom visual outputs that integrate text and design elements. This node is particularly suitable for application scenarios that require synthesizing text information into image format.

# Input types
## Required
- text
    - The text parameter is crucial; it defines the text content to be rendered into the image. It is the primary input to the node's operation, determining the information or message to be visualized.
    - Comfy dtype: STRING
    - Python dtype: str
- font_path
    - The font_path parameter specifies the font source for the text. It is crucial in determining the stylistic appearance of the text in the generated image, affecting overall aesthetics and readability.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The font_size parameter adjusts the size of the text, directly affecting the prominence and readability of the text in the image. It is a key factor in the visual impact of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- spacing
    - The spacing parameter defines the distance between characters and lines of text, which can enhance or reduce the clarity and visual appeal of the image. It plays an important role in the arrangement and presentation of text content.
    - Comfy dtype: INT
    - Python dtype: int
- text_color
    - The text_color parameter sets the color of the text, affecting the contrast and visual dynamics of the image. It is an important aspect of design, contributing to the overall visual effect.
    - Comfy dtype: STRING
    - Python dtype: str
- vertical
    - The vertical parameter determines the orientation of the text, either horizontal or vertical. This choice affects the layout and structure of the text in the image, influencing composition and flow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- stroke
    - The stroke parameter applies a border or outline around the text, enhancing its definition and separation from the background. This adds extra visual detail and depth to the text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The image output is the primary result of the node, representing the visual representation of the input text. It encapsulates design choices and text layout, providing a tangible output that can be used in various applications.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- MASK
    - The MASK output provides the alpha channel representation of the text image, which can be used for advanced image processing and compositing tasks. It offers control over text transparency and blending with other visual elements.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
