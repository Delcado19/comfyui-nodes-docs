# Documentation
- Class name: imageRatio
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class is designed to process images and compute the greatest common divisor (GCD) of their dimensions, thereby determining aspect ratios in both integer and floating-point formats. Its purpose is to simplify the analysis of image proportions for further processing or display.

# Input types
## Required
- image
    - The image parameter is critical for the node, as it is the primary input whose dimensions are analyzed to compute the aspect ratio. Without this input, the node cannot perform its intended function.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Output types
- result
    - This output provides the computed aspect ratio of the input image, including both integer and floating-point formats. It is important because it clearly illustrates the relationship between image dimensions, which is useful for various image processing tasks.
    - Comfy dtype: COMBO[INT, INT, FLOAT, FLOAT]
    - Python dtype: Tuple[int, int, float, float]
- ui
    - The 'ui' output is a dictionary containing text information, providing a human-readable summary of the image aspect ratio. This output is useful for displaying results in a user interface, enhancing the user experience by presenting data in an easily understandable format.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
