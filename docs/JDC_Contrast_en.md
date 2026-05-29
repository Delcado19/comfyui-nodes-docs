# Documentation
- Class name: ImageContrast
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node aims to enhance visual appeal by adjusting image contrast and brightness. It boosts contrast to improve distinction between light and shadow elements, creating a more striking visual output. It also adjusts brightness, allowing modification of overall lightness or darkness, which is essential for various visual effects or specific aesthetic requirements.

# Input types
## Required
- IMAGE
    - Image parameter is required because it is the primary input for node processing. It is the medium through which the node applies its contrast and brightness adjustments; the input's quality and resolution directly affect the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- contrast
    - Contrast parameter plays a key role in node operation because it controls enhancement of image contrast. Adjusting this parameter lets the node make light and dark areas more distinct, improving overall visual impact.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - Brightness parameter is crucial for adjusting the image's overall lightness or darkness. It can be used to create specific moods or effects, and its adjustment directly influences the final appearance of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - Output image is the result of node processing, reflecting the adjustments made to the input image's contrast and brightness. It embodies the node's function and serves as the basis for further image processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
