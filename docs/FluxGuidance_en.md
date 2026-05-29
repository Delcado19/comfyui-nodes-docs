# Documentation
- Class name: FluxGuidance
- Category: advanced/conditioning/flux
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Applies a guidance scale to conditioning for FLUX models, controlling how strongly the generation follows the conditioning.

# Input types
## Required
- conditioning
    - The conditioning to modify with guidance.
    - Comfy dtype: CONDITIONING
- guidance
    - Guidance scale value (default 3.5). Higher values enforce conditioning more strictly.
    - Comfy dtype: FLOAT
    - Default: `3.5`

# Output types
- CONDITIONING
    - Modified conditioning with the guidance scale applied.
    - Comfy dtype: CONDITIONING

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
