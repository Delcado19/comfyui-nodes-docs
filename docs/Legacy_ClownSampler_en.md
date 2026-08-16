# Documentation
- Class name: Legacy_ClownSampler
- Category: RES4LYF/legacy/samplers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Legacy_ClownSampler is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- eta
    - Calculated noise amount to be added, then removed, after each step.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eta_var
    - Calculate variance-corrected noise amount (overrides eta/noise_mode settings). Cannot be used at very low sigma values; reverts to eta/noise_mode for final steps.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - Ratio of calculated noise amount actually added after each step. >1.0 will leave extra noise behind, <1.0 will remove more noise than it adds.
    - Comfy dtype: FLOAT
    - Python dtype: float
- d_noise
    - Ratio of calculated noise amount actually added after each step. >1.0 will leave extra noise behind, <1.0 will remove more noise than it adds.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - How noise scales with the sigma schedule. Hard is the most aggressive, the others start strong and drop rapidly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noise_sampler_type
    - The noise_sampler_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- alpha
    - Fractal noise mode: <0 = extra high frequency noise, >0 = extra low frequency noise, 0 = white noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- k
    - Fractal noise mode: all that matters is positive vs. negative. Effect unclear.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_seed
    - Seed for the SDE noise that is added after each step if eta or eta_var are non-zero. If set to -1, it will use the increment the seed most recently used by the workflow.
    - Comfy dtype: INT
    - Python dtype: int
- rk_type
    - The rk_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- exp_mode
    - Convert linear RK methods to exponential form.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- multistep
    - For samplers ending in S only. Reduces cost by one model call per step by reusing the previous step as the current predictor step.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- implicit_steps
    - Number of implicit Runge-Kutta refinement steps to run after each explicit step.
    - Comfy dtype: INT
    - Python dtype: int
- cfgpp
    - CFG++ scale. Use in place of, or with, CFG. Currently only working with RES, DPMPP, and DDIM samplers.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_guide_weight
    - The latent_guide_weight input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_mode
    - The mode used. noise_mean and inversion are currently for test purposes only.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- rescale_floor
    - Latent_guide_weight(s) control the minimum value for the latent_guide_mask. If false, they control the maximum value.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- latent_guide
    - The latent_guide input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_guide_inv
    - The latent_guide_inv input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_guide_mask
    - The latent_guide_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- latent_guide_weights
    - The latent_guide_weights input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- sigmas_override
    - The sigmas_override input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
- SAMPLER
    - The SAMPLER output is produced by this node.
    - Comfy dtype: SAMPLER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
