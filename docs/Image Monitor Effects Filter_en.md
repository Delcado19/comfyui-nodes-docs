# Documentation
- Class name: WAS_Image_Monitor_Distortion_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Monitor_Distortion_Filter node applies various distortion effects to images, simulating different types of monitor or signal distortion. It processes the input image based on the selected mode, which can be 'Digital Distortion', 'Signal Distortion', or 'TV Distortion', and uses parameters such as amplitude and offset to control the intensity of the distortion. This node is highly versatile, suitable for a wide range of applications from visual effects to artistic image transformations.

# Input types
## Required
- image
    - The input image that will undergo distortion processing. It serves as the base upon which the node applies the selected distortion effect, and its quality and characteristics significantly impact the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- mode
    - Determines the type of distortion effect to apply to the image. Each mode represents a different distortion style, affecting the overall look and feel of the processed image.
    - Comfy dtype: COMBO['Digital Distortion', 'Signal Distortion', 'TV Distortion']
    - Python dtype: str
- amplitude
    - Controls the intensity of the distortion effect. Higher amplitude values result in more pronounced distortion, while lower values produce subtler effects.
    - Comfy dtype: INT
    - Python dtype: int
- offset
    - Adjusts the position of the distortion effect, allowing fine-tuning of the distortion's appearance. It shifts the distortion pattern, which can alter the visual dynamics of the final result.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is the processed image with the distortion effect applied. It reflects the characteristics of the input image while showcasing the chosen distortion style, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
