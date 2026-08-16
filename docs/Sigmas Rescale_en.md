# Documentation
- Class name: Sigmas Rescale
- Category: RES4LYF/sigmas
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Can be used to set denoise. Results are generally better than with the approach used by KSampler and most nodes with denoise values (which slice the sigmas schedule according to step count, not the noise level). Will also flip the sigma schedule if the start and end values are reversed.

# Input types
## Required
- start
    - The start input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
    - The end input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
- sigmas_rescaled
    - The sigmas_rescaled output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
