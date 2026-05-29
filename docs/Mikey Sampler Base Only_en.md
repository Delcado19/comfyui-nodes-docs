# Documentation
- Class name: MikeySamplerBaseOnly
- Category: Mikey/Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerBaseOnly node is designed to perform advanced sampling operations on a base model, utilizing various conditions and VAE models to generate latent representations. It can adjust the sampling process based on image complexity and upsample the results to improve resolution and detail.

# Input types
## Required
- base_model
    - The base model parameter is critical to the node's operation, as it defines the base model used for sampling. It directly impacts the quality and characteristics of the generated latent representations.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - The samples parameter determines the number of latent representations the node will generate. Its value has a significant impact on the diversity and quantity of the output.
    - Comfy dtype: LATENT
    - Python dtype: int
- positive_cond_base
    - The positive conditioning is a key part of the input, providing guidance for the sampling process to ensure the generated samples meet certain desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_cond_base
    - The negative conditioning constrains the sampling process by specifying undesirable characteristics to avoid in the generated samples.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- vae
    - The VAE parameter is essential to the node's functionality, as it enables the encoding and decoding of latent representations, a critical step in the sampling process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- model_name
    - The model name parameter specifies the upscaling model used to increase the resolution of the generated samples. It plays a critical role in the final output quality.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
## Optional
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_by
    - The upscale_by parameter determines the scaling factor for the generated samples. It is a key factor in controlling the output resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hires_strength
    - The hires_strength parameter adjusts the intensity of high-resolution detail enhancement, affecting the clarity and sharpness of the upscaled output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smooth_step
    - The smooth_step parameter controls the smoothness of transitions between different stages of the sampling process, affecting the overall consistency of the generated samples.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent_representation
    - The output latent representation is the key result of the node's operation, encapsulating the generated samples in a compressed form that can be further processed or analyzed.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
