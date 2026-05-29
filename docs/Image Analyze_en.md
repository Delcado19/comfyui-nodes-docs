# Documentation
- Class name: WAS_Image_Analyze
- Category: WAS Suite/Image/Analyze
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Analyze node is designed to perform various image analysis operations, including black-and-white level adjustment, RGB channel frequency analysis, and seamless texture generation. It is a comprehensive tool for enhancing image quality and preparing images for further processing or visualization.

# Input types
## Required
- image
    - The input image is the image that the node will process. It serves as the base data for all analysis and transformation operations performed by the node.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- mode
    - The mode parameter determines the specific analysis or transformation to apply to the input image. It influences the node's operation, guiding it to perform tasks such as adjusting black-and-white levels or analyzing channel frequencies.
    - Comfy dtype: COMBO['Black White Levels', 'RGB Levels']
    - Python dtype: str

# Output types
- result_image
    - The resulting image is the output of the node's analysis or transformation process. It contains the changes made to the input image according to the specified mode and parameters.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
