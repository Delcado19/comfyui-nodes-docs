# Documentation
- Class name: Sigmas Resample
- Category: RES4LYF/sigmas
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Interpolate the sigmas schedule to a new length clamping the start and end values.

# Input types
## Required
- sigmas_in
    - The sigmas_in input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- output_length
    - The output_length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- order
    - The order input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- rescale_after
    - Rescale the output to the original min/max range after interpolation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- sigmas
    - The sigmas output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
