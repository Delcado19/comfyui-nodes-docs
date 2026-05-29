# Documentation
- Class name: IterativeMixingKSampler
- Category: test
- Output node: False
- Repo Ref: https://github.com/deroberon/demofusion-comfyui

This node refines a batch of latent representations by progressively introducing guidance from a set of reference latent representations, aiming to improve the quality of generated samples through iterative mixing.

# Input types
## Required
- model
    - A generative model used for denoising and refining latent representations.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed value for the random number generator used to initialize noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration parameters that influence the denoising process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The name of the sampler used for the iterative denoising process.
    - Comfy dtype: ENUM
    - Python dtype: str
- scheduler
    - The scheduling strategy used to adjust the denoising process over time.
    - Comfy dtype: ENUM
    - Python dtype: str
- step_increment
    - The number of steps added in each iteration of the denoising process.
    - Comfy dtype: INT
    - Python dtype: int
- positive
    - Positive conditioning data used to guide the denoising process.
    - Comfy dtype: CONDITIONING
    - Python dtype: dict
- negative
    - Negative conditioning data used to further refine the denoising process.
    - Comfy dtype: CONDITIONING
    - Python dtype: dict
- latent_image_batch
    - The batch of latent representations that need to be denoised and refined.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- denoise
    - A parameter that controls the degree of denoising applied at each step.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_1
    - A parameter that influences the mixing rate between reference latent representations and denoised samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reverse_batch
    - A flag indicating whether the batch should be reversed before processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent_image_batch
    - The refined batch of latent representations after the iterative denoising process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/deroberon/demofusion-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
