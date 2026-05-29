# Documentation
- Class name: CinematicLook
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The CinematicLook node aims to enhance the visual appeal of an image by applying various stylized adjustments, mimicking the high-quality look commonly found in films and professional photography. This node uses color grading and other visual effects to transform ordinary images into ones with a cinematic texture, suitable for a wide range of uses from professional portfolios to social media posts.

# Input types
## Required
- image
    - The image parameter is the source material processed by the node. It is crucial because it serves as the foundation for all subsequent transformations and enhancements. The quality and characteristics of the input image directly affect the final output, influencing the overall aesthetic and visual impact.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- look
    - The look parameter determines the stylistic direction of the image transformation. It is critical in establishing the final visual tone and mood of the processed image. Different looks cater to various creative visions and applications, allowing for customized results that align with the desired aesthetic.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- result_img
    - The result_img output is the transformed image with the cinematic look applied. It represents the outcome of the node's processing, containing the stylistic enhancements and adjustments made to the input image. This is the final product ready for use or further processing in a creative workflow.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
