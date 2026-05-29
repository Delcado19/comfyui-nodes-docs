# Documentation
- Class name: xy_Tiling_KSampler
- Category: Jags_vector/xy_tile_sampler
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

This node facilitates the sampling process by applying a tiling strategy that enhances the model's ability to generate high-resolution images. It manages tiling configuration and integrates with the model to produce output that reflects the desired tiling pattern.

# Input types
## Required
- model
    - The model parameter is crucial as it defines the neural network architecture used for the sampling process. It is the foundation for the node's operation, determining the quality and characteristics of the generated images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter initializes the random number generator, ensuring reproducibility and consistency in the sampling process. It plays a vital role in maintaining the reliability of results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations the sampling process will undergo. It directly affects the convergence and detail of the final output, with more steps potentially leading to finer image details.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the model's configuration during sampling, influencing the style and structure of generated images. It is an important aspect of controlling creative output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects a specific sampling method from a set of predefined options. It plays a significant role in adjusting node behavior to suit different requirements and expected outcomes.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The scheduler parameter controls the pace and progress of the sampling process, ensuring the node operates efficiently and effectively. It is key to balancing performance and quality.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
    - The positive parameter provides conditional data that guides the sampling process toward desired features. It is essential for steering the generation of specific results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The negative parameter introduces conditional data that the sampling process should avoid. It helps refine the generation by excluding unwanted features.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- latent_image
    - The latent_image parameter provides the initial latent representation upon which the sampling process will build. It is crucial for setting the foundation of image generation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- tileX
    - The tileX parameter specifies whether tiling is applied in the horizontal direction. It affects the distribution and arrangement of tiling in the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- tileY
    - The tileY parameter determines whether tiling is applied in the vertical direction. It influences the stacking and combination of image tiles.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- denoise
    - The denoise parameter controls the level of noise reduction applied during sampling. It helps achieve clearer, more refined output by minimizing noise.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The latent parameter represents the intermediate latent representation produced during the sampling process. It is a critical step in achieving the final image generation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- progress_latent
    - The progress_latent parameter captures the evolving latent representation as sampling progresses. It reflects the iterative refinement of the image toward its completed state.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/jags111/ComfyUI_Jags_VectorMagic)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
