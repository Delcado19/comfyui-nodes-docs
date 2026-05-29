# Documentation
- Class name: MikeySamplerTiledAdvanced
- Category: Mikey/Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerTiledAdvanced node is a complex component designed to perform advanced image upsampling techniques. It utilizes a two-stage process involving base and refinement models to progressively improve the quality of the sampled image. The node's primary function is to generate high-resolution images from latent representations using sophisticated noise modeling and iterative refinement strategies.

# Input types
## Required
- base_model
    - The base model is critical for the initial stage of image sampling, laying the foundation for the generation process. It is essential for the node to produce coherent and structured image representations at lower resolutions.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- refiner_model
    - The refinement model plays a key role in the second stage of the sampling process, refining image details based on the output of the base model. Its effectiveness directly impacts the final image quality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - Samples represent latent space vectors used as input to the image generation process. They are essential for the node to create diverse and unique image outputs.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - VAE (Variational Autoencoder) is used to decode latent representations into pixel space. It is a key component for converting sampled data into a visual format.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive_cond_base
    - Positive conditioning provides guidance to the base model during sampling, ensuring the generated images conform to specific features or attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- negative_cond_base
    - Negative conditioning is used to restrict the base model's sampling process, preventing the inclusion of undesirable features in the generated images.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- positive_cond_refiner
    - Positive conditioning for the refinement model guides the enhancement process, focusing on highlighting desired features in the refined image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- negative_cond_refiner
    - Negative conditioning for the refinement model ensures the refinement process avoids introducing unwanted elements into the final image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- model_name
    - Model name identifies the specific upsampling model to be used in the node, which is critical for determining the node's upsampling capabilities and performance.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
- seed
    - The seed parameter is essential for ensuring the reproducibility of the sampling process, allowing consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- denoise_image
    - The denoise image parameter controls the level of noise reduction applied during the sampling process, which can significantly affect the clarity and detail of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps parameter defines the number of iterations in the sampling process, which directly impacts the computational complexity of the node and the quality of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- smooth_step
    - Smooth steps are used to control the transition between different stages of the sampling process, aiming to produce smoother and more natural progression in image details.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration of the sampling process, allowing fine-tuning of the node's behavior for optimal results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Sampler name specifies the sampling method to be used, which is a critical factor in determining how the node generates image samples.
    - Comfy dtype: comfy.samplers.KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler determines the rate of progress of the sampling process, which can affect the efficiency and results of image generation.
    - Comfy dtype: comfy.samplers.KSampler.SCHEDULERS
    - Python dtype: str
- upscale_by
    - The upscale factor parameter sets the scaling factor for the image upsampling process, directly affecting the resolution of the final output image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_denoise
    - Tile denoising parameter adjusts the denoising level applied to individual tiles during the tiling process, which can enhance the overall visual consistency of the upsampled image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_model
    - Tile model determines which model is used during the tiling process, allowing selection of either the base or refinement model to achieve different levels of detail in the final image.
    - Comfy dtype: COMBO['base', 'refiner']
    - Python dtype: str
- use_complexity_score
    - The use complexity score parameter indicates whether complexity scores are incorporated into the tiling process, which helps determine the priority order of tile processing.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str
- image_optional
    - The optional image parameter allows inclusion of an additional image, which can be used to influence the sampling process and introduce new visual elements into the generated image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- tiled_image
    - The tiled image is the primary output of the node, representing the final upsampled and tiled version of the input image. It demonstrates the node's ability to enhance image details through a multi-stage upsampling process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- upscaled_image
    - The upsampled image is an additional output, providing a view of the image after the initial upsampling stage before tiling. It highlights the intermediate results of the node's upsampling process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
