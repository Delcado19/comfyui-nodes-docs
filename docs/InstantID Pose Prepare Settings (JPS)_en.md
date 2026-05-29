
# Documentation
- Class name: InstantID Pose Prepare Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The InstantID Pose Prepare Settings (JPS) node is used to configure image preparation settings for InstantID pose processing. It allows users to specify various parameters related to image preparation, such as resizing, cropping, padding, etc., to ensure the image is optimally prepared for pose detection and analysis.

# Input types
## Required
- resize_to
    - Determines how to resize the image, options include "Keep Size", "Resize to Target Size", and "Resize to Source Size", affecting the final dimensions of the prepared image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- offset_width
    - Specifies the horizontal offset applied to the image, adjusting its position.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - Specifies the vertical offset applied to the image, adjusting its position.
    - Comfy dtype: INT
    - Python dtype: int
- crop_left
    - Defines the amount cropped from the left side of the image, adjusting its visible area.
    - Comfy dtype: INT
    - Python dtype: int
- crop_right
    - Defines the amount cropped from the right side of the image, adjusting its visible area.
    - Comfy dtype: INT
    - Python dtype: int
- crop_top
    - Defines the amount cropped from the top of the image, adjusting its visible area.
    - Comfy dtype: INT
    - Python dtype: int
- crop_bottom
    - Defines the amount cropped from the bottom of the image, adjusting its visible area.
    - Comfy dtype: INT
    - Python dtype: int
- padding_left
    - Specifies the amount of padding added to the left side of the image, extending its boundaries.
    - Comfy dtype: INT
    - Python dtype: int
- padding_right
    - Specifies the amount of padding added to the right side of the image, extending its boundaries.
    - Comfy dtype: INT
    - Python dtype: int
- padding_top
    - Specifies the amount of padding added to the top of the image, extending its boundaries.
    - Comfy dtype: INT
    - Python dtype: int
- padding_bottom
    - Specifies the amount of padding added to the bottom of the image, extending its boundaries.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - Determines the method used for resizing or transforming the image, such as "Nearest Neighbor", "Bilinear", etc.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - Specifies the intensity of the sharpening effect applied to the image, enhancing its details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- flip
    - Indicates whether the image should be flipped horizontally, flipped vertically, or not flipped, affecting its orientation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- imageprepare_settings
    - Contains a tuple of all specified image preparation settings, which can be directly applied to pose processing.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
