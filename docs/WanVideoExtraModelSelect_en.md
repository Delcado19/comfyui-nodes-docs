# Documentation
- Class name: WanVideoExtraModelSelect
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Extra model to load and add to the main model, ie. VACE or MTV Crafter 'ComfyUI/models/diffusion_models'

# Input types
## Required
- extra_model
    - These models are loaded from the 'ComfyUI/models/diffusion_models' path to extra state dict to add to the main model
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- prev_model
    - For loading multiple extra models
    - Comfy dtype: VACEPATH
    - Python dtype: object

# Output types
- extra_model
    - The extra_model output is produced by this node.
    - Comfy dtype: VACEPATH
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
