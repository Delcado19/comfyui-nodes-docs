# Documentation
- Class name: LatentNoiseBatch_gaussian
- Category: RES4LYF/noise
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

LatentNoiseBatch_gaussian is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mean
    - The mean input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- std
    - The std input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- means
    - The means input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- stds
    - The stds input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- steps_
    - The steps_ input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
