# Documentation
- Class name: ClownOptions_Cycles_Beta
- Category: RES4LYF/sampler_options
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownOptions Cycles is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- cycles
    - The cycles input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eta_decay_scale
    - Multiplies etas by this number after every cycle. May help drive convergence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unsample_eta
    - The unsample_eta input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unsampler_override
    - The unsampler_override input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- unsample_steps_to_run
    - The unsample_steps_to_run input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- unsample_cfg
    - The unsample_cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unsample_bongmath
    - The unsample_bongmath input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
