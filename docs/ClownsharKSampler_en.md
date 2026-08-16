# Documentation
- Class name: ClownsharKSampler
- Category: RES4LYF/legacy/samplers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Legacy2_ClownsharKSampler is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- noise_type_init
    - The noise_type_init input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noise_type_sde
    - The noise_type_sde input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noise_mode_sde
    - How noise scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- eta
    - Calculated noise amount to be added, then removed, after each step.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_seed
    - The noise_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- sampler_mode
    - The sampler_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_name
    - The sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- implicit_sampler_name
    - The implicit_sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- implicit_steps
    - The implicit_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - The denoise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise_alt
    - The denoise_alt input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- extra_options
    - The extra_options input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
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

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised
    - The denoised output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- sde_noise
    - The sde_noise output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
