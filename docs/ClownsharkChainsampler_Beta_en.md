# Documentation
- Class name: ClownsharkChainsampler_Beta
- Category: RES4LYF/samplers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownsharkChainsampler is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- eta
    - Calculated noise amount to be added, then removed, after each step.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps_to_run
    - The steps_to_run input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Negative values use channelwise CFG.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_mode
    - The sampler_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- bongmath
    - The bongmath input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
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

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised
    - The denoised output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- options
    - The options output is produced by this node.
    - Comfy dtype: OPTIONS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
