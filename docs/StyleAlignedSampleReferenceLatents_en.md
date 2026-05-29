# Documentation
- Class name: StyleAlignedSampleReferenceLatents
- Category: style_aligned
- Output node: False
- Repo Ref: https://github.com/brianfitzgerald/style_aligned_comfy

The 'sample' method of the StyleAlignedSampleReferenceLatents node generates a reference latent sequence consistent with the style of a given latent image. It samples noise that matches the input condition's style. This node is essential for applications requiring a series of generated images to maintain style consistency.

# Input types
## Required
- model
- Model parameters are critical for the node's operation because they provide the underlying neural network architecture used for sampling. They directly affect the quality and style of the generated latents.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
- The positive parameter defines the forward conditioning factors that guide sampling toward a specific style. It plays an important role in shaping the output's stylistic features.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, torch.Tensor]
- negative
- The negative parameter specifies conditioning factors to avoid during sampling, ensuring the generated latents do not exhibit undesired style traits.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, torch.Tensor]
- sampler
- The sampler parameter determines the sampling strategy used by the node. It is vital for controlling the randomness and diversity of the generated latents.
    - Comfy dtype: SAMPLER
    - Python dtype: Callable
- sigmas
- The sigmas parameter represents the variance used during sampling to control noise propagation. It is a key factor for fine‑tuning latent style details.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor
- latent_image
- The latent_image parameter is a key input that provides the initial latent state at the start of the sampling process. It sets the base style for the generated reference latents.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- noise_seed
- The noise_seed parameter initializes the random noise applied during sampling. It ensures reproducibility when a specific noise pattern is required.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- The cfg parameter controls the configuration of the sampling process, affecting the scale and detail of the generated latents. It is crucial for achieving the desired style outcome.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- ref_latents
- The ref_latents output is a series of reference latents produced by the node. These latents match the style of the input latent image and are used for further processing or analysis.
    - Comfy dtype: STEP_LATENTS
    - Python dtype: torch.Tensor
- noised_output
- The noised_output parameter represents the final output of the sampling process, a noisy version of the input latent image. It encapsulates the essence of the input's style while introducing variability.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/brianfitzgerald/style_aligned_comfy)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
