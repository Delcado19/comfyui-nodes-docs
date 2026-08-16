# Documentation
- Class name: ClownSamplerAdvanced_Beta
- Category: RES4LYF/samplers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownSamplerAdvanced is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

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
- overshoot_mode
    - How step size overshoot scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- overshoot_mode_substep
    - How substep size overshoot scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
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
- overshoot
    - Boost the size of each denoising step, then rescale to match the original. Has a softening effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- overshoot_substep
    - Boost the size of each denoising substep, then rescale to match the original. Has a softening effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_scaling_weight
    - Set to positive values to create a sharper, grittier, more detailed image. Set to negative values to soften and deepen the colors.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_boost_step
    - Set to positive values to create a sharper, grittier, more detailed image. Set to negative values to soften and deepen the colors.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_boost_substep
    - Set to positive values to create a sharper, grittier, more detailed image. Set to negative values to soften and deepen the colors.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_anchor
    - Typically set to between 1.0 and 0.0. Lower values cerate a grittier, more detailed image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - Adds extra SDE noise. Values around 1.03-1.07 can lead to a moderate boost in detail and paint textures.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise_substep
    - Adds extra SDE noise. Values around 1.03-1.07 can lead to a moderate boost in detail and paint textures.
    - Comfy dtype: FLOAT
    - Python dtype: float
- d_noise
    - Downscales the sigma schedule. Values around 0.98-0.95 can lead to a large boost in detail and paint textures.
    - Comfy dtype: FLOAT
    - Python dtype: float
- momentum
    - Accelerate convergence with positive values when sampling, negative values when unsampling.
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
- implicit_type
    - The implicit_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- implicit_type_substeps
    - The implicit_type_substeps input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- implicit_steps
    - The implicit_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- implicit_substeps
    - The implicit_substeps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bongmath
    - The bongmath input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- guides
    - The guides input is used by this node during execution.
    - Comfy dtype: GUIDES
    - Python dtype: object
- automation
    - The automation input is used by this node during execution.
    - Comfy dtype: AUTOMATION
    - Python dtype: object
- extra_options
    - The extra_options input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- options
    - The options input is used by this node during execution.
    - Comfy dtype: OPTIONS
    - Python dtype: object

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
