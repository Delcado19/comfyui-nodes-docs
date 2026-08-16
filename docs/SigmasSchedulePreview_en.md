# Documentation
- Class name: SigmasSchedulePreview
- Category: RES4LYF/sigmas
- Output node: True
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Saves the input images to your ComfyUI output directory.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- noise_mode
    - How noise scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- eta
    - The eta input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - The s_noise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - The denoise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise_alt
    - The denoise_alt input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- plot_max
    - Set to a negative value to have the plot scale automatically.
    - Comfy dtype: FLOAT
    - Python dtype: float
- plot_min
    - Set to a negative value to have the plot scale automatically.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
