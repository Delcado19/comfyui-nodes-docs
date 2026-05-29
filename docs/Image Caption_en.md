# Documentation
- Class name: ImageCaption
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The ImageCaption node is designed to generate and overlay captions on images. It accepts an image, a font, and a caption string as inputs, and outputs an image with wrapped caption text below the original image. This node is particularly useful for creating annotated images or social media posts with descriptive captions.

# Input types
## Required
- image
    - The image parameter is the base image to which the caption will be added. This is a critical component, as the entire captioning process is visually anchored to this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- font
    - The font parameter specifies the font type used for the caption text. It affects the style and readability of the text, which is essential for the caption's effectiveness in conveying information.
    - Comfy dtype: STRING
    - Python dtype: str
- caption
    - The caption parameter is the text that will be placed on the image. It is a core element, as it provides the descriptive or explanatory content accompanying the image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_pnginfo
    - The extra_pnginfo parameter is used to provide additional information that certain operations may require, such as metadata or specific instructions for the captioning process.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: dict
- prompt
    - The prompt parameter is used to guide the captioning process, potentially by providing context or specific instructions that the node should follow when generating the caption.
    - Comfy dtype: PROMPT
    - Python dtype: dict

# Output types
- image
    - The output image is the result of the captioning process, which includes the original image with the caption text added. This is the final product, ready for display or further processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
