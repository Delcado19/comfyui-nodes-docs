
# Documentation
- Class name: Seed Generator
- Category: ImageSaverTools/utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Seed Generator node provides deterministic or randomized seed values for various operations during image saving. It ensures operations can be repeated with a fixed seed or varied with a random seed, supporting consistency and diversity of output.

# Input types
## Required
- seed
    - The seed parameter allows users to specify a seed value to generate deterministic output. If omitted, a default value is used, ensuring repeatability or randomness of the operation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - Outputs an integer representing the seed value, which can be used to initialize a random number generator or other seed-dependent processes.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [KSampler](../../Comfy/Nodes/KSampler.md)
    - [FaceDetailer](../../ComfyUI-Impact-Pack/Nodes/FaceDetailer.md)
    - [UltimateSDUpscaleNoUpscale](../../ComfyUI_UltimateSDUpscale/Nodes/UltimateSDUpscaleNoUpscale.md)
    - Reroute
    - KSamplerAdvanced //Inspire
    - [DetailerForEach](../../ComfyUI-Impact-Pack/Nodes/DetailerForEach.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
