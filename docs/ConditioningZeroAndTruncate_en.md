# Documentation
- Class name: ConditioningZeroAndTruncate
- Category: RES4LYF/conditioning
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Use for negative conditioning with SD3.5. ConditioningZeroOut does not truncate the embedding,                     which results in severe degradation of image quality with SD3.5 when the token limit is exceeded.

# Input types
## Required
- conditioning
    - The conditioning input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Output types
- conditioning
    - The conditioning output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
