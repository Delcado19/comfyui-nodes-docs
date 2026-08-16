# Documentation
- Class name: SB Load Model (SuperBeasts.AI)
- Category: SuperBeastsAI/Model
- Output node: False
- Repo Ref: https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts

Load a SuperBeasts colour-adjustment model (downloads if missing)./n
    
    Select a model from the dropdown. Use Family/Version entries (e.g., SuperPopColorAdjustment/latest)
    to auto-download from the official model registry when not found locally./n
    
    ⚠ License: Downloaded weights are licensed under SPCA-Community-NoSaaS.
    Local / personal / commercial use OK. SaaS/API redistribution using this model requires a license.
    See: https://github.com/SuperBeastsAI/SuperBeastsAI-Models/tree/main/SuperPopColorAdjustment

# Input types
## Required
- model_key
    - The model_key input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: SBMODEL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
