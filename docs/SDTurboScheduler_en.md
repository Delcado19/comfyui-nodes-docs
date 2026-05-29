# Documentation
- Class name: SDTurboScheduler
- Category: sampling/custom_sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SDTurboScheduler is a node that efficiently manages and schedules sampling operations within a diffusion model framework. It abstracts the complexity of sampling steps and denoising, providing a simplified interface for the essential sigma values used in the generation sampling process. This node ensures the sampling process follows specified parameters, enabling high-level control of the diffusion sampling workflow without delving into individual step details.

# Input types
## Required
- model
    - Model parameters are crucial because they represent the diffusion model the scheduler will operate on. They form the foundation of the node’s sampling task; the model’s architecture and parameters determine the outcome of the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- steps
    - Step parameters are essential for defining the number of iterations the sampling process will undergo. They directly affect the granularity of sampling and are key to balancing computational time against output quality.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - Denoising parameters are important because they control the level of noise reduction applied during sampling. They are critical for balancing detail preservation with noise removal, thereby influencing the visual fidelity of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sigmas
    - Sigmas output is a key component of the sampling process, representing the standard deviations used to guide diffusion steps. It is a decisive factor in sampling quality, with its values directly affecting the results of generated samples.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
