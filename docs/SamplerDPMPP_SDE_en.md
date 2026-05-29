# Documentation
- Class name: SamplerDPMPP_SDE
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SamplerDPMPP_SDE node provides a custom sampling method for generating samples from diffusion models. It leverages the DPM-PP (Diffusion Probabilistic Model Prior Prediction) framework with Stochastic Differential Equation (SDE) methods to enhance the sampling process. This node is essential for users who need fine-grained control over sampling parameters to achieve specific characteristics in generated samples.

# Input types
## Required
- eta
    - The 'eta' parameter is critical for controlling the noise level during the sampling process. It directly affects the quality and convergence of generated samples. Properly tuning 'eta' can lead to a more stable and efficient sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - The 's_noise' parameter defines the initial noise scale applied to the data during sampling. It plays an important role in determining the starting point of the diffusion process and influences the overall behavior of the sampling method.
    - Comfy dtype: FLOAT
    - Python dtype: float
- r
    - The 'r' parameter is critical for adjusting the convergence rate in the sampling algorithm. It affects how quickly the sampling process approaches the target distribution, thereby influencing the fidelity of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_device
    - The 'noise_device' parameter determines the computational device used to generate noise, which can be either GPU or CPU. The choice of device can significantly impact the performance and speed of the sampling process.
    - Comfy dtype: COMBO['gpu','cpu']
    - Python dtype: str

# Output types
- sampler
    - The output 'sampler' is an instance of a sampling algorithm tailored to the specific requirements set by the input parameters. It is important because it enables the generated samples to conform to the desired noise characteristics and convergence criteria.
    - Comfy dtype: SAMPLER
    - Python dtype: KSAMPLER

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
