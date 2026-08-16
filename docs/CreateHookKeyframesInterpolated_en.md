# Documentation
- Class name: CreateHookKeyframesInterpolated
- Category: advanced/hooks/scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Create Hook Keyframes Interp. is a ComfyUI node registered by `comfy_extras.nodes_hooks`. The live metadata did not provide a longer description.

# Input types
## Required
- strength_start
    - The strength_start input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_end
    - The strength_end input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation
    - The interpolation input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_percent
    - The start_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- keyframes_count
    - The keyframes_count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- print_keyframes
    - The print_keyframes input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_hook_kf
    - The prev_hook_kf input is used by this node during execution.
    - Comfy dtype: HOOK_KEYFRAMES
    - Python dtype: object

# Output types
- HOOK_KF
    - The HOOK_KF output is produced by this node.
    - Comfy dtype: HOOK_KEYFRAMES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
