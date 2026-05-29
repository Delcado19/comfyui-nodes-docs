# Documentation
- Class name: MikeySamplerTiledAdvancedBaseOnly
- Category: Mikey/Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerTiledAdvancedBaseOnly node is designed to perform advanced image sampling and upscaling operations. It combines a base model, Variational Autoencoder (VAE), and tiling techniques to enhance image quality and detail. The node's primary goal is to generate high-resolution images from latent samples, leveraging complex algorithms and denoising techniques for exceptional results.

# Input types
## Required
- base_model
    - The base model parameter is critical to the node's operation, as it defines the underlying model used for sampling. It directly affects the quality and characteristics of the generated samples, which is essential for achieving the desired upscaling and image enhancement effects.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - The sample input is a key element of the node's functionality, providing the latent representation that will be converted into a high-resolution image. The quality of the sample directly impacts the final output, making it a critical parameter for achieving the node's goals.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The VAE (Variational Autoencoder) parameter plays an important role in the node's process of decoding and encoding latent representations. It is key in transforming sampled data into a format suitable for upscaling and further processing.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive_cond_base
    - The positive_cond_base parameter is essential for guiding the sampling process to generate images with desired attributes. It acts as a positive conditioning factor, influencing the node's ability to produce images that meet specific criteria.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_cond_base
    - The negative_cond_base parameter is a key factor in guiding the sampling process to avoid undesirable outcomes. It helps optimize the image generation process by providing negative conditioning, which is critical for ensuring the node's output aligns with expected results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- model_name
    - The model_name parameter is crucial in determining which upscaling model the node will use for image enhancement. It defines the specific model configuration and capabilities, which is essential for achieving the desired upscaling and image quality improvements.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
- seed
    - The seed parameter is important for ensuring the reproducibility and consistency of the sampling process. It initializes the random number generator, which affects sample generation and, in turn, the final image output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- denoise_image
    - The denoise_image parameter allows control over the level of denoising applied to the image during the upscaling process. It is an optional setting that can be adjusted as needed to balance image detail and noise reduction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps parameter defines the number of iterations used in the sampling process. It is an optional input that can be fine-tuned to control the complexity and detail of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, short for configuration, is used to adjust the settings of the sampling process. It is an optional parameter that can be modified to influence the node's behavior and the characteristics of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling method the node will use. It is an optional input that allows selection of different sampling techniques, which can significantly impact the node's performance and the quality of the output image.
    - Comfy dtype: comfy.samplers.KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling strategy for the sampling process. It is an optional setting that can be customized to optimize the node's efficiency and generate high-quality images.
    - Comfy dtype: comfy.samplers.KSampler.SCHEDULERS
    - Python dtype: str
- upscale_by
    - The upscale_by parameter sets the scaling factor for the upscaling process. It is an optional input that allows the user to control the degree of upscaling applied to the image, which can affect the final resolution and detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_denoise
    - The tiler_denoise parameter is used to control the denoising level for each tile during the tiling process. It is an optional parameter that can be adjusted to improve the visual quality of the final image by reducing noise in individual tiles.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_optional
    - The image_optional parameter allows an optional input image that can be encoded into latent space for further processing. This enables the node to work with existing images, providing flexibility in input data handling.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Output types
- output_image
    - The output_image parameter represents the final, upscaled, and enhanced image generated by the node. It is the result of the node's processing, reflecting the combined effects of the applied sampling, upscaling, and denoising techniques.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
