# Documentation
- Class name: KSampler_inspire_pipe
- Category: InspirePack/a1111_compat
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The KSampler_inspire_pipe node facilitates the sampling process within generative models by integrating multiple parameters to guide the generation of new latent representations. It refines output by incorporating random seeds, specified step counts, and configuration settings. The primary purpose of this node is to enhance the creative process by providing a structured yet flexible framework for exploring the model's latent space.

# Input types
## Required
- basic_pipe
    - The basic_pipe parameter is essential for the sampling process, providing the foundational components required for sampling, including the model and other related elements. It is the backbone of the node's operation, enabling the generation of latent samples.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, ...]
- seed
    - The seed parameter is critical for introducing randomness into the sampling process, ensuring generated samples are diverse and non-repetitive. It serves as the starting point for random number generation, significantly influencing the uniqueness of the output.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter specifies the number of iterations the sampling process will undergo, directly affecting the depth of exploration within the latent space. It is a key factor in determining the diversity and quality of generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter acts as a configuration setting that fine-tunes the sampling process, allowing adjustments to the behavior and characteristics of generated samples. It plays a critical role in shaping the overall output of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter plays an important role in selecting the appropriate sampling strategy, which in turn influences the distribution and nature of generated samples. It is a critical decision point in the node's functionality.
    - Comfy dtype: ENUM
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling strategy for the sampling process, managing the progression and rhythm of generation steps. It is essential for maintaining a structured approach to sample generation.
    - Comfy dtype: ENUM
    - Python dtype: str
- latent_image
    - The latent_image parameter serves as the input to the sampling process, representing the initial state or context from which new samples will be generated. It is a core component of the node's operation, acting as the foundation for creating new latent representations.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- denoise
    - The denoise parameter adjusts the level of noise reduction applied during the sampling process, affecting the clarity and quality of generated samples. It is a key control for balancing the trade-off between noise and detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - The noise_mode parameter specifies the computational mode for noise generation, either leveraging GPU for accelerated processing or opting for CPU. It impacts the efficiency and performance of the sampling process.
    - Comfy dtype: ENUM
    - Python dtype: str
- batch_seed_mode
    - The batch_seed_mode parameter manages the approach to randomness across batches, which is crucial for ensuring diversity in generated samples. It influences the overall variability and consistency of the output.
    - Comfy dtype: ENUM
    - Python dtype: str
## Optional
- variation_seed
    - The variation_seed parameter introduces additional randomness into the sampling process, contributing to output diversity. It allows for subtle variations in generated samples, enhancing the creative range of the node.
    - Comfy dtype: INT
    - Python dtype: int
- variation_strength
    - The variation_strength parameter controls the intensity of variation in generated samples, balancing the level of novelty against the original input. It is a key factor in achieving a diverse and engaging set of outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The latent parameter represents the output of the sampling process, containing the newly generated latent representations. It is a direct reflection of the node's primary function, encapsulating the creative results of the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- vae
    - The vae parameter includes the variational autoencoder component of the output, which is critical for generating high-quality, structured representations. It signifies the integration of advanced generative models within the node's functionality.
    - Comfy dtype: VAE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
