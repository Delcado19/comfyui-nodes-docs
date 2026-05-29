# Documentation
- Class name: ColorAdjust
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The ColorAdjust node aims to modify the visual characteristics of an image by adjusting its contrast, brightness, saturation, hue, and gamma values. This node enhances the image's appearance and can be used to correct or stylize visual output for various applications.

# Input types
## Required
- image
    - The image parameter is crucial for the ColorAdjust node as it is the input on which color adjustments will be applied. It influences execution by determining the base visual content the node will process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- contrast
    - The contrast parameter allows users to increase or decrease the difference between the darkest and lightest elements in an image. It plays an important role in enhancing the visual clarity and depth of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - Brightness adjustment can make the image appear brighter or darker, controlled by the brightness parameter. It is essential for changing the overall lightness or darkness of the visual content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - The saturation parameter controls the intensity of colors in the image. It is important for users who want to achieve a more vibrant or subdued color palette.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hue
    - Adjusting the hue shifts the colors in the image to a different part of the color spectrum. This parameter plays a key role in changing the overall tint of the visual content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gamma
    - The gamma parameter affects the overall brightness of the image. It is especially useful for adjusting the perceived brightness of the image in a non-linear manner.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The result parameter represents the output of the ColorAdjust node, which is the modified image after applying color adjustments. It is important as it reflects the final visual outcome of the node's processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
