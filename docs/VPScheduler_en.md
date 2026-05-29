# Documentation
- Class name: VPScheduler
- Category: sampling/custom_sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VPScheduler node is designed to generate a continuous variance-preserving (VP) noise schedule for diffusion models. It plays a crucial role in the sampling process by determining the noise level at each step, which is essential for achieving high-quality results in the generated samples.

# Input types
## Required
- steps
    - The parameter 'steps' defines the number of steps in the noise schedule. It is a fundamental aspect of the sampling process as it determines the granularity of the noise level applied at each step, directly affecting the quality of the final output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- beta_d
    - The parameter 'beta_d' controls the rate of noise increase in the schedule. It is important because it affects the distribution of noise across steps, which in turn influences the convergence and details of the generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- beta_min
    - The parameter 'beta_min' sets the minimum noise level in the schedule. It is important because it ensures that the initial steps of the sampling process have sufficient noise level to promote diverse and detailed outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eps_s
    - The parameter 'eps_s' specifies the end value of the noise schedule. It is a key factor in determining the final noise level applied in the sampling process, which is crucial for the subtle details and overall quality of the generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sigmas
    - The output 'sigmas' provides the calculated noise level for each step in the VP noise schedule. It is important because it forms the basis of the sampling process, guiding the generation of the final output.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
