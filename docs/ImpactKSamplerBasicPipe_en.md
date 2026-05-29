# Documentation
- Class name: KSamplerBasicPipe
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The KSamplerBasicPipe node is designed to perform sampling operations using a specified sampler and scheduler. It plays a critical role in generating new latent representations from initial images, which can be further processed or used to create new images. The node encapsulates the complexity of sampling, providing users with a simple and intuitive interface to obtain high-quality latent samples.

# Input types
## Required
- basic_pipe
    - The basic_pipe parameter is a composite structure containing the essential components required for sampling, including model, clip, vae, and positive/negative samples. It plays a critical role in the sampling process, providing context for generating latent images.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, Any, torch.nn.Module, Any, Any]
- seed
    - The seed parameter initializes the random number generator, ensuring reproducibility of the sampling process. It is essential for obtaining consistent results across different runs, which is particularly important in experiments and comparative studies.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations the sampling process will perform. Increasing the number of steps can lead to more refined latent representations, but also increases computational cost.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing configuration, is used to control the sampling process. It can influence convergence and the quality of the generated latent images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the type of sampler to use during the sampling process. Different samplers may produce different results, and the choice can be based on desired outcomes or specific characteristics of the data.
    - Comfy dtype: KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling strategy for the sampling process. It is essential for managing the progression of sampling steps and can influence the efficiency and effectiveness of sampling.
    - Comfy dtype: KSampler.SCHEDULERS
    - Python dtype: str
- latent_image
    - The latent_image parameter is the initial latent representation on which the sampling process will act. It serves as the starting point for generating new latent images.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- denoise
    - The denoise parameter controls the level of denoising applied to the generated latent images. Adjusting this value can help improve the quality of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- basic_pipe
    - The basic_pipe output contains the original components used for sampling, which can be used for further processing or analysis.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, Any, torch.nn.Module, Any, Any]
- latent
    - The latent output represents the newly generated latent image from the sampling process, which can be used for various downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The vae output provides the variational autoencoder model used during the sampling process, which can be used for additional operations or insights.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
