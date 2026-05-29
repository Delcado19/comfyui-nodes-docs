# Documentation
- Class name: ExponentialScheduler
- Category: sampling/custom_sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ExponentialScheduler node is designed to generate a noise level schedule that decreases exponentially over a specified number of steps. It is used in the context of diffusion models to control the amount of noise added to or removed from data during the sampling process, which is critical for generating high-quality outputs.

# Input types
## Required
- steps
    - The 'steps' parameter defines the number of steps in the noise schedule. It is important because it determines the granularity of noise reduction, affecting the quality and convergence of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_max
    - The 'sigma_max' parameter sets the initial noise level of the schedule. It is important because it determines the starting point of the exponential noise decay, affecting the initial state of the diffusion process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sigma_min
    - The 'sigma_min' parameter specifies the final noise level in the schedule. It is important because it sets the target noise level the sampling process aims to achieve, affecting the noise characteristics of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SIGMAS
    - The 'SIGMAS' output provides the computed noise level schedule following an exponential decay pattern. It is important because it directly influences subsequent steps in the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
