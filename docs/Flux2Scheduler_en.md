# Documentation
- Class name: Flux2Scheduler
- Category: sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates a sigma schedule for the Flux2 model's sampling process based on the specified number of steps and image dimensions. It produces a sequence of sigma values used to control noise levels during the denoising process in image generation.

# Input types
## Required
- steps
    - The number of denoising steps to schedule, controlling the granularity of the sampling process.
    - Comfy dtype: INT
    - Default: `20`
- width
    - The width of the output image, which influences the sigma calculation.
    - Comfy dtype: INT
    - Default: `1024`
- height
    - The height of the output image, which influences the sigma calculation.
    - Comfy dtype: INT
    - Default: `1024`

# Output types
- SIGMAS
    - A sequence of sigma values corresponding to each denoising step, used by the sampler to progressively reduce noise.
    - Comfy dtype: SIGMAS

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
