# Documentation
- Class name: Sigmas Split Value
- Category: RES4LYF/sigmas
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Splits sigma schedule at a specific sigma value.

# Input types
## Required
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- split_value
    - The split_value input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bias_split_up
    - If True, split happens above the split value, so high_sigmas includes the split point.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- high_sigmas
    - The high_sigmas output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- low_sigmas
    - The low_sigmas output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
