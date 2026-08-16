# Documentation
- Class name: ClownOptions_StepSize_Beta
- Category: RES4LYF/sampler_options
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownOptions Step Size is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- overshoot_mode
    - How step size overshoot scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- overshoot_mode_substep
    - How substep size overshoot scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- overshoot
    - Boost the size of each denoising step, then rescale to match the original. Has a softening effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- overshoot_substep
    - Boost the size of each denoising substep, then rescale to match the original. Has a softening effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- options
    - The options input is used by this node during execution.
    - Comfy dtype: OPTIONS
    - Python dtype: object

# Output types
- options
    - The options output is produced by this node.
    - Comfy dtype: OPTIONS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
