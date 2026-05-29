# Documentation
- Class name: WAS_Image_Aspect_Ratio
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `aspect` method of the WAS_Image_Aspect_Ratio node is designed to calculate and return multiple ratio representations of an image. It determines whether the image is in landscape or portrait orientation and provides common ratios in simplified form. This node is essential for image manipulation and analysis tasks where aspect ratio considerations are critical.

# Input types
## Optional
- image
    - The 'image' parameter is an optional input that allows the node to automatically derive the width and height of the image when no explicit dimensions are provided. When an image tensor is supplied, it is critical for the node's ability to accurately calculate the aspect ratio.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- width
    - The 'width' parameter is an optional numeric input that specifies the width of the image. When no image tensor is provided, it is used together with the 'height' parameter to calculate the aspect ratio.
    - Comfy dtype: NUMBER
    - Python dtype: int
- height
    - The 'height' parameter is an optional numeric input that specifies the height of the image. Together with the 'width' parameter, it is required to determine the aspect ratio when no image tensor is provided.
    - Comfy dtype: NUMBER
    - Python dtype: int

# Output types
- aspect_number
    - The 'aspect_number' output provides the raw numeric aspect ratio of the image, calculated as width divided by height.
    - Comfy dtype: NUMBER
    - Python dtype: float
- aspect_float
    - The 'aspect_float' output is an alternative representation of the aspect ratio, also calculated as width divided by height, but returned as a floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float
- is_landscape_bool
    - The 'is_landscape_bool' output is a boolean value indicating whether the image is in landscape orientation. Returns 1 for landscape and 0 for portrait or square aspect ratios.
    - Comfy dtype: NUMBER
    - Python dtype: int
- aspect_ratio_common
    - The 'aspect_ratio_common' output represents the common aspect ratio of the image in simplified form, such as '16:9', derived from the greatest common divisor of the width and height.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str
- aspect_type
    - The 'aspect_type' output describes the type of aspect ratio based on the calculated aspect ratio value, which can be 'landscape', 'portrait', or 'square'.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
