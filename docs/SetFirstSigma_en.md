# Documentation
- Class name: SetFirstSigma
- Category: sampling/sigmas
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Replaces the first sigma value in a sigma sequence with a specified float value. Useful for overriding the initial noise level at the start of a sampling process. Returns the modified sigma sequence.

# Input types
## Required
- sigmas
    - The input sigma sequence to modify.
    - Comfy dtype: SIGMAS
- sigma
    - The float value to set as the first sigma in the sequence.
    - Comfy dtype: FLOAT
    - Default: `136`

# Output types
- SIGMAS
    - The sigma sequence with the first value replaced.
    - Comfy dtype: SIGMAS

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
