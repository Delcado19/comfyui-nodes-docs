# Documentation
- Class name: SamplerCustom
- Category: sampling/custom_sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SamplerCustom node facilitates the sampling process in generative models. It integrates components such as noise addition, model processing, and latent image manipulation to produce high‑quality output. The node offers a customizable and efficient sampling method, allowing fine‑tuning and control of the generation process.

# Input types
## Required
- model
- Model parameter is critical to the node because it defines the generative model used for sampling. It directly affects the quality and type of generated output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
- Positive parameter provides forward conditioning information, guiding the sampling process toward the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
- Negative parameter provides reverse conditioning information to avoid unwanted features in generated samples.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- sampler
- Sampler parameter specifies the sampling method to use, which can significantly impact the efficiency and effectiveness of the sampling process.
    - Comfy dtype: SAMPLER
    - Python dtype: str
- sigmas
- Sigmas parameter defines the noise level used at each step of sampling, influencing noise reduction and image clarity.
    - Comfy dtype: SIGMAS
    - Python dtype: List[float]
- latent_image
- Latent_image parameter is essential because it represents the input latent space where sampling begins.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- add_noise
- Add_noise parameter determines whether noise should be added to the latent image during sampling. This affects the diversity and randomness of generated samples.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
- Noise_seed parameter initializes the noise generation process, ensuring reproducibility of sampling results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- Cfg parameter adjusts the configuration of the sampling process, allowing users to control fidelity and detail level of generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
- Output parameter represents the main result of the sampling process, containing the generated latent sample.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- denoised_output
- Denoised_output parameter provides a denoised version of the generated sample, potentially offering clearer and more refined results.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
