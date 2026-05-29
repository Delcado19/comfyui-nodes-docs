# Documentation
- Class name: KarrasScheduler
- Category: sampling/custom_sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The KarrasScheduler node is designed to generate a noise schedule according to the method of Karras et al. (2022). It plays a key role in the custom sampling process, providing a series of σ values that determine the noise level added to the data during sampling iterations. This node plays a critical role in controlling the diffusion process, ensuring a smooth transition from noise to a clear data representation.

# Input types
## Required
- steps
    - The ‘steps’ parameter defines the number of iterations in the sampling process. It is crucial because it directly affects the granularity of the noise schedule, which in turn affects the quality of the sampling results.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_max
    - The ‘sigma_max’ parameter specifies the maximum standard deviation of noise in the sampling process. It is a key determinant in forming the initial noise level and is crucial for the overall fidelity of the sampling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sigma_min
    - The ‘sigma_min’ parameter sets the minimum standard deviation of noise, affecting the final clarity of the sampled data. It plays an important role in fine-tuning the noise schedule at the end of the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rho
    - The ‘rho’ parameter controls the rate at which the noise standard deviation decreases during sampling iterations. It is a key factor in the noise reduction schedule and affects the convergence of the sampling algorithm.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SIGMAS
    - The output 'SIGMAS' is a series of σ values representing the noise schedule of the sampling process. This schedule is essential for the algorithm to gradually reduce noise and generate a clear data representation.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
