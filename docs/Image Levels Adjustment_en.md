# Documentation
- Class name: WAS_Image_Levels
- Category: WAS Suite/Image/Adjustment
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node aims to adjust the tonal range of an image by modifying its black, mid, and white levels, thereby enhancing the overall contrast and visual appeal of the image.

# Input types
## Required
- image
    - The image parameter is essential for the node to process and adjust visual content. It serves as input, and its tonal levels will be modified according to the specified black, mid, and white levels.
    - Comfy dtype: COMBO[Image]
    - Python dtype: PIL.Image
- black_level
    - The black level parameter is crucial for setting the darkest point in the image, affecting overall contrast and tonal range. It helps define shadows and the deepest blacks in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mid_level
    - The mid level parameter plays a key role in determining the midpoint of the tonal range, influencing the overall balance and distribution of tones in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- white_level
    - The white level parameter is important for defining the brightest point in the image, contributing to highlights and the brightest whites.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image is the result of tonal adjustment, showcasing enhanced contrast and refined visual details achieved through manipulation of the black, mid, and white levels.
    - Comfy dtype: COMBO[Image]
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
