# Documentation
- Class name: WAS_Image_Select_Channel
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Select_Channel node is designed to separate a specific color channel from an image for further processing or analysis. It allows the user to select the 'red', 'green', or 'blue' channel and converts the image to a single-channel representation by copying the selected channel to all three color channels.

# Input types
## Required
- image
    - The input image is the primary data that the node will process. It is crucial for the operation of the node because it determines the content of the channels to be selected and processed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- channel
    - The channel parameter specifies which color channel to extract from the image. It is important because it determines the final result of the node's operation, deciding which color information is retained in the output image.
    - Comfy dtype: COMBO['red', 'green', 'blue']
    - Python dtype: str

# Output types
- selected_image
    - The output is the processed image, which contains a selected monochrome channel. This image can be used in applications that require only one color channel, or for further image processing tasks.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
