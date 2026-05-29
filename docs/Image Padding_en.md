# Documentation
- Class name: WAS_Image_Padding
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Padding node enhances images by adding padding to the edges, useful for various image processing tasks such as data augmentation or preparing images for machine learning models. It provides an advanced feature that allows adding padding with an optional feathering effect to smoothly blend the padded edges with the original image.

# Input types
## Required
- image
    - The image parameter is the input image that the node will process. It plays a central role in the node's operation, as the entire padding and feathering process is applied to this image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- feathering
    - The feather parameter determines the degree of feathering effect applied to the padded edges of the image. This is an optional parameter that can enhance the visual smoothness of the padding.
    - Comfy dtype: INT
    - Python dtype: int
- feather_second_pass
    - The feather_second_pass parameter controls whether a second pass of feathering is applied to the image. This can add an additional layer of smoothness to the padded edges.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- left_padding
    - The left_padding parameter specifies the amount of padding to add to the left side of the image. It is an important parameter as it directly affects the final dimensions of the image.
    - Comfy dtype: INT
    - Python dtype: int
- right_padding
    - The right_padding parameter specifies the amount of padding to add to the right side of the image. It is crucial for controlling the total width of the padded image.
    - Comfy dtype: INT
    - Python dtype: int
- top_padding
    - The top_padding parameter determines the amount of padding to add to the top of the image. It is a key parameter for adjusting the vertical dimensions of the image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom_padding
    - The bottom_padding parameter sets the amount of padding to add to the bottom of the image. It is crucial for modifying the total height of the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- padded_image
    - The padded_image parameter is the output of the node, which is the original image with the specified padding applied. It represents the final result of the image padding process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- padding_mask
    - The padding_mask parameter is an additional output that provides a visual representation of the padding applied to the image. It can be used for further processing or visual inspection.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
