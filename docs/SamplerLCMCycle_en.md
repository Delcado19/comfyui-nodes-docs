# Documentation
- Class name: SamplerLCMCycle
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/jojkaart/ComfyUI-sampler-lcm-alternative

This node creates a sampler specifically designed to handle complex sampling tasks in generative models. It abstracts the complexity of the sampling process, emphasizing the node's role in generating high-quality samples by effectively navigating the model's latent space. The node's primary goal is to provide users with a reliable and flexible model inference tool without requiring deep knowledge of the underlying algorithms.

# Input types
## Required
- euler_steps
    - This parameter determines the number of Euler steps taken during the sampling process, directly affecting the quality and convergence of generated samples. It is crucial for balancing computational cost and sampling accuracy.
    - Comfy dtype: INT
    - Python dtype: int
- lcm_steps
    - This parameter specifies the Least Common Multiple (LCM) step count, which is essential for synchronizing the sampling process across different dimensions and ensuring consistent transitions between steps.
    - Comfy dtype: INT
    - Python dtype: int
- tweak_sigmas
    - This boolean flag determines whether adjustments are made to sigma values, which can refine the sampling process and lead to more nuanced sample variations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- ancestral
    - The ancestor parameter influences the guidance of the sampling process toward older latent states, which may affect the style or thematic characteristics of the generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sampler
    - The output is a configured sampler, tailored to the input specifications, ready for use in generative models to produce samples that meet the desired characteristics.
    - Comfy dtype: SAMPLER
    - Python dtype: comfy.samplers.KSampler

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jojkaart/ComfyUI-sampler-lcm-alternative)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
