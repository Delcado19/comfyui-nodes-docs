# Documentation
- Class name: ClownOptions_Frameweights
- Category: RES4LYF/sampler_options
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownOptions Frameweights is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- config_name
    - Apply to specific type of per-frame weights.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dynamics
    - The function type used for the dynamic period. constant: no change, linear: steady change, ease_out: starts fast, ease_in: starts slow
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- schedule
    - fast_early: fast change starts immediately, slow_late: slow change starts later
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale
    - The amount of change over the course of the frame weights. 1.0 means that the guides have no influence by the end.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reverse
    - Reverse the frame weights
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- frame_weights
    - Overrides all other settings EXCEPT reverse.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- custom_string
    - Overrides all other settings EXCEPT reverse.
    - Comfy dtype: STRING
    - Python dtype: str
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
