# Documentation
- Class name: MikeySamplerTiledBaseOnly
- Category: Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerTiledBaseOnly node generates high-quality images from a base model through a two-stage sampling process. It leverages techniques such as latent space sampling, denoising, and upscaling to produce detailed and refined images. The node's functionality centers on enhancing image quality and resolution through a sophisticated combination of model foundations and algorithmic methods.

# Input types
## Required
- base_model
    - The base_model parameter is critical to the node's operation, as it defines the base model from which the image generation process begins. It serves as the starting point for the sampling and upscaling sequence, significantly influencing the quality and characteristics of the final output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - The samples parameter is essential to the node, as it represents the point at which images are sampled from the latent space. It plays a key role in determining the diversity and randomness of the generated images, influencing the overall outcome of the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- positive_cond_base
    - The positive_cond_base parameter is a conditional input that positively influences the sampling process. It helps guide image generation toward desired characteristics, enhancing the node's ability to produce targeted outputs.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_cond_base
    - The negative_cond_base parameter serves as a conditional input that negatively influences the sampling process. It helps exclude unwanted features from the generated images, refining the node's output to meet specified requirements.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- vae
    - The vae parameter is critical to the node, as it represents the Variational Autoencoder used to decode latent representations into pixel space. It is a key component in the process of converting sampled data into a visual format.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- model_name
    - The model_name parameter specifies the upscaling model used in the image upscaling process. It is a decisive factor in selecting the model architecture and its corresponding capabilities, directly impacting upscaling quality.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
## Optional
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducibility of the sampling process. This is an important aspect when consistent results are required across multiple executions.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_by
    - The upscale_by parameter determines the factor by which the original image dimensions are increased. It directly affects the resolution and detail of the upscaled image, playing a significant role in the appearance of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_denoise
    - The tiler_denoise parameter controls the level of denoising applied during the tiling process. It is an important tuning parameter that can improve the visual quality of upscaled images by reducing noise artifacts.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The image output of the MikeySamplerTiledBaseOnly node represents the final upscaled and refined image. It is the result of the node's processing, embodying the high-resolution and detailed visual output the node is designed to produce.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
