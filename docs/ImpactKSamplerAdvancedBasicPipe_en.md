# Documentation
- Class name: KSamplerAdvancedBasicPipe
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The KSamplerAdvancedBasicPipe node is designed to facilitate advanced sampling techniques within the framework. It leverages the capabilities of KSamplerAdvanced to perform complex sampling operations, ensuring a high degree of control and customization over the sampling process. This node is crucial for generating diverse and high-quality latent representations that can be further refined or used in downstream tasks.

# Input types
## Required
- basic_pipe
    - The basic_pipe parameter is essential for the node's operation, as it contains the core components required for sampling, including the model, clip, and VAE. It forms the foundation for building the sampling process and is critical for the node's proper functionality.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, Any, torch.nn.Module, Any, Any]
- latent_image
    - The latent_image parameter is a key input that provides the initial latent state for the sampling process. It significantly influences the starting point and trajectory of the generated samples.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- add_noise
    - The add_noise parameter determines whether noise is introduced during the sampling process. This affects the diversity and quality of the generated samples and is a critical factor in achieving the desired results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - The noise_seed parameter is used to initialize the random number generator for noise addition, ensuring the reproducibility of the sampling process. It plays a crucial role in controlling the random elements of the node's operation.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter specifies the number of iterations performed during the sampling process. It directly impacts the convergence and detail of the generated samples and is a critical factor in the node's execution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration settings of the sampling process, allowing fine-tuning of the node's behavior. It is essential for achieving optimal performance and results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the specific sampling method to be used from a predefined set of samplers. It is a key determinant in shaping the characteristics of the generated samples.
    - Comfy dtype: KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling algorithm to be used during the sampling process. It is critical for managing the progress and rhythm of the sampling iterations.
    - Comfy dtype: KSampler.SCHEDULERS
    - Python dtype: str
- start_at_step
    - The start_at_step parameter sets the initial step at which the sampling process begins. It allows customization of the sampling trajectory and is important for achieving specific results.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end_at_step parameter determines the final step at which the sampling process ends. It plays a significant role in determining the scope and duration of the sampling iterations.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - The return_with_leftover_noise parameter determines whether the node should return samples with any remaining noise after the final step. This is an important consideration for post-processing or further analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- basic_pipe
    - The basic_pipe output provides the original components used for sampling, which can be used for further processing or analysis.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, Any, torch.nn.Module, Any, Any]
- latent
    - The latent output represents the sampled latent state of the model, which is a key result of the sampling process and can serve as input for subsequent tasks or models.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The vae output includes the variational autoencoder used during the sampling process, which may be of interest for further research or applications.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
