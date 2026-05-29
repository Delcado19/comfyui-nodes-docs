# Documentation
- Class name: mxSlider2D
- Display name: Slider 2D
- Category: utils/mxToolkit
- Output node: False
- Repo Ref: https://github.com/Smirnov75/ComfyUI-mxToolkit

Outputs X and Y values derived from separate integer and float input pairs, with optional float-casting control for each axis.

# Input types
## Required
- Xi
    - Integer component of the X value.
    - Comfy dtype: INT
    - Default: `512`
- Xf
    - Float component of the X value.
    - Comfy dtype: FLOAT
    - Default: `512`
- Yi
    - Integer component of the Y value.
    - Comfy dtype: INT
    - Default: `512`
- Yf
    - Float component of the Y value.
    - Comfy dtype: FLOAT
    - Default: `512`
- isfloatX
    - Flag (0 or 1) controlling whether the X output is cast to float.
    - Comfy dtype: INT
    - Default: `0`
- isfloatY
    - Flag (0 or 1) controlling whether the Y output is cast to float.
    - Comfy dtype: INT
    - Default: `0`

# Output types
- X
    - The resulting X value after combining Xi and Xf, optionally cast to float.
    - Comfy dtype: *
- Y
    - The resulting Y value after combining Yi and Yf, optionally cast to float.
    - Comfy dtype: *

# Source code
[View source repository on GitHub](https://github.com/Smirnov75/ComfyUI-mxToolkit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
