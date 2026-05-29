# Documentation
- Class name: imageInsetCrop
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates precise image cropping by allowing users to define the crop area in pixels or as a percentage of the image dimensions. It enhances the image processing workflow by enabling targeted image manipulation without complex calculations, ensuring the cropped image meets specific requirements.

# Input types
## Required
- image
    - The image parameter is critical as it is the source on which the cropping operation will be performed. It directly affects the node's output, determining the visual content and dimensions of the resulting image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- measurement
    - The measurement parameter determines whether the crop values are entered as absolute pixels or relative percentages. This significantly affects how the crop area is calculated, thereby influencing the final dimensions of the cropped image.
    - Comfy dtype: COMBO['Pixels', 'Percentage']
    - Python dtype: str
- left
    - The left margin parameter specifies the distance from the left edge of the image to the start of the crop area. It plays a key role in determining the horizontal position of the crop area within the image.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right margin parameter defines the distance from the right edge of the image to the end of the crop area. It works together with the left margin parameter to determine the total width of the cropped section.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The top margin parameter sets the distance from the top of the image to the start of the crop area. It is crucial in determining the vertical position of the crop area within the image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom margin parameter specifies the distance from the bottom of the image to the end of the crop area. Together with the top margin parameter, it defines the height of the cropped section.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image is the result of the cropping operation. It represents the remaining portion of the original image after applying the specified margins, capturing the desired visual content.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
