# Documentation
- Class name: ExtendIntermediateSigmas
- Category: sampling/sigmas
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Extends an existing sigma schedule by inserting additional intermediate sigma values between specified points. This allows finer control over the sampling process by increasing resolution in targeted regions of the sigma range.

# Input types
## Required
- sigmas
    - The base sigma schedule to extend with additional intermediate values.
    - Comfy dtype: SIGMAS
- steps
    - The number of intermediate sigma steps to insert between each pair of existing sigmas.
    - Comfy dtype: INT
    - Default: `2`
- start_at_sigma
    - The sigma value at which to begin extending; values above this threshold are affected.
    - Comfy dtype: FLOAT
    - Default: `-1`
- end_at_sigma
    - The sigma value at which to stop extending; values below this threshold are affected.
    - Comfy dtype: FLOAT
    - Default: `12`
- spacing
    - The spacing method used to distribute intermediate sigma values between existing points.
    - Comfy dtype: COMBO

# Output types
- SIGMAS
    - The extended sigma schedule with additional intermediate values inserted.
    - Comfy dtype: SIGMAS

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
