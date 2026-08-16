# Documentation
- Class name: PiDColorBiasCorrection
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

PiD 4-step decoder color/brightness drift corrector. Subtracts a per-channel bias from x0_pred at the first sampling step, using a small linear model calibrated against the model's systematic drift (model tends to brighten dark scenes and add a blue cast).

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- strength
    - Correction strength. 1.0 = full predicted bias subtracted. <1 = milder, >1 = stronger, 0 = disabled.
    - Comfy dtype: FLOAT
    - Python dtype: float
- backbone
    - Calibrated PiD backbone (currently only flux2 — others use the same model but coefficients differ).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
