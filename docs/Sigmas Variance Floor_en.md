# Documentation
- Class name: Sigmas Variance Floor
- Category: RES4LYF/sigmas
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Process a sigma schedule so that any steps that are too large for variance-locked SDE sampling are replaced with the maximum permissible value.Will be very difficult to approach sigma = 0 due to the nature of the math, as steps become very small much below approximately sigma = 0.15 to 0.2.

# Input types
## Required
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
- SIGMAS
    - The SIGMAS output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
