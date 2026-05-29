# Documentation
- Class name: GradientImage
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate an image of specified size and specified color gradient. V2 upgrade of GradientImage.

*Only image and mask inputs are allowed. Forcing other input types will cause node errors.
*Preset sizes are defined in custom_size.ini. This file is located in the plugin root directory. The default name is custom_size.ini.example. When using this file for the first time, change the file extension to .ini. Open it with a text editor and edit the custom sizes. Each line represents a size. The first number is width, the second is height, separated by a lowercase "x". To avoid errors, do not input extra characters.

# Input types
## Required

- size
    - The size of the image.
    - Comfy dtype: STRING
    - Python dtype: str
    - Optional values: 'custom',

- custom_width
    - Image width. Valid when size is set to "custom". If size_as input is provided, this option will be ignored.
    - Comfy dtype: INT
    - Python dtype: int

- custom_height
    - Image height. Effective when size is set to "custom". If size_as is provided, this option will be ignored.
    - Comfy dtype: INT
    - Python dtype: int

- angle
    - The angle of the gradient.
    - Comfy dtype: INT
    - Python dtype: int

- start_color
    - The start color of the gradient.
    - Comfy dtype: STRING
    - Python dtype: str

- end_color
    - The end color of the gradient.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- size_as
    - Input image or mask. The output image will be generated according to its size. Note that this input has higher priority than other size settings.
    - Comfy dtype: IMAGE, MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Generated image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
