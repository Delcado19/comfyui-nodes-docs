
# Documentation
- Class name: Image Prepare Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: None specified

This node is designed to configure and prepare image settings for further processing or conversion. It allows customization of various parameters such as resizing, cropping, padding, and applying specific image adjustments (such as sharpening or interpolation), enabling a tailored image preparation workflow.

# Input types
## Required
- offset_width
    - Horizontal offset applied to the image, used for precise positioning or adjustment.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - Vertical offset applied to the image, used for precise positioning or adjustment.
    - Comfy dtype: INT
    - Python dtype: int
- crop_left
    - Amount cropped from the left side of the image, allowing customized image composition.
    - Comfy dtype: INT
    - Python dtype: int
- crop_right
    - Amount cropped from the right side of the image, allowing customized image composition.
    - Comfy dtype: INT
    - Python dtype: int
- crop_top
    - Amount cropped from the top of the image, allowing customized image composition.
    - Comfy dtype: INT
    - Python dtype: int
- crop_bottom
    - Amount cropped from the bottom of the image, allowing customized image composition.
    - Comfy dtype: INT
    - Python dtype: int
- padding_left
    - Amount of padding added to the left side of the image, suitable for framing or specific layout requirements.
    - Comfy dtype: INT
    - Python dtype: int
- padding_right
    - Amount of padding added to the right side of the image, suitable for framing or specific layout requirements.
    - Comfy dtype: INT
    - Python dtype: int
- padding_top
    - Amount of padding added to the top of the image, suitable for framing or specific layout requirements.
    - Comfy dtype: INT
    - Python dtype: int
- padding_bottom
    - Amount of padding added to the bottom of the image, suitable for framing or specific layout requirements.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - Specifies the interpolation method used when resizing or converting the image, affecting the smoothness and quality of the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - Degree of sharpening applied to the image, enhancing details and clarity.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- imageprepare_settings
    - Configured image preparation settings, encapsulating all adjustments and transformations to be applied.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, int, str, int, int, int, int, int, int, int, int, int, int, str, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](None specified)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
