# Documentation
- Class name: VHS_SelectLatents
- Category: Video Helper Suite 🎥🅥🅗🅢/latent
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite

Use comma-separated indexes to select items in the given order.
Supports negative indexes, python-style ranges (end index excluded),
as well as range step.

Acceptable entries (assuming 16 items provided, so idxs 0 to 15 exist):
0         -> Returns [0]
-1        -> Returns [15]
0, 1, 13  -> Returns [0, 1, 13]
0:5, 13   -> Returns [0, 1, 2, 3, 4, 13]
0:-1      -> Returns [0, 1, 2, ..., 13, 14]
0:5:-1    -> Returns [4, 3, 2, 1, 0]
0:5:2     -> Returns [0, 2, 4]
::-1     -> Returns [15, 14, 13, ..., 2, 1, 0]

# Input types
## Required
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- indexes
    - The indexes input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- err_if_missing
    - The err_if_missing input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- err_if_empty
    - The err_if_empty input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
