# Documentation
- Class name: ClownSamplerAdvanced
- Category: RES4LYF/legacy/samplers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Legacy2_ClownSamplerAdvanced is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- noise_type_sde
    - The noise_type_sde input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noise_type_sde_substep
    - The noise_type_sde_substep input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noise_mode_sde
    - How noise scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noise_mode_sde_substep
    - How noise scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- eta
    - Calculated noise amount to be added, then removed, after each step.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eta_substep
    - Calculated noise amount to be added, then removed, after each step.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - Adds extra SDE noise. Values around 1.03-1.07 can lead to a moderate boost in detail and paint textures.
    - Comfy dtype: FLOAT
    - Python dtype: float
- d_noise
    - Downscales the sigma schedule. Values around 0.98-0.95 can lead to a large boost in detail and paint textures.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_seed_sde
    - The noise_seed_sde input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- sampler_name
    - The sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- implicit_sampler_name
    - The implicit_sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- implicit_steps
    - The implicit_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- guides
    - The guides input is used by this node during execution.
    - Comfy dtype: GUIDES
    - Python dtype: object
- options
    - The options input is used by this node during execution.
    - Comfy dtype: OPTIONS
    - Python dtype: object
- automation
    - The automation input is used by this node during execution.
    - Comfy dtype: AUTOMATION
    - Python dtype: object
- extra_options
    - The extra_options input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- sampler
    - The sampler output is produced by this node.
    - Comfy dtype: SAMPLER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
