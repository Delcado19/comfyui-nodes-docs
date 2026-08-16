# Documentation
- Class name: ClownsharKSamplerOptions
- Category: RES4LYF/legacy/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Legacy2_ClownsharKSamplerOptions is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- noise_init_stdev
    - The noise_init_stdev input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_init_mean
    - The noise_init_mean input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
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
    - The eta input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - The s_noise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- d_noise
    - The d_noise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_init
    - The alpha_init input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- k_init
    - The k_init input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_sde
    - The alpha_sde input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- k_sde
    - The k_sde input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_seed
    - Seed for the SDE noise that is added after each step if eta or eta_var are non-zero. If set to -1, it will use the increment the seed most recently used by the workflow.
    - Comfy dtype: INT
    - Python dtype: int
- c1
    - The c1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- c2
    - The c2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- c3
    - The c3 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- t_fn_formula
    - The t_fn_formula input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- sigma_fn_formula
    - The sigma_fn_formula input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
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
