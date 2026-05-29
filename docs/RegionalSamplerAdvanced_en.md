# Documentation
- Class name: RegionalSamplerAdvanced
- Category: ImpactPack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The RegionalSamplerAdvanced node is designed to perform advanced sampling operations on specific regions of a latent image. It allows customizing sampling steps, noise addition, and restoring the latent state within defined regions, providing a high degree of control over the sampling process for local image generation.

# Input types
## Required
- add_noise
    - The 'add_noise' parameter determines whether noise is added to the latent image during the sampling process. This can affect the quality and randomness of the generated image, and is a key factor in achieving the desired visual effects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - The 'noise_seed' parameter is used to initialize the random number generator for adding noise, ensuring the reproducibility of the sampling process. Its value directly affects the noise pattern introduced into the latent image.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The 'steps' parameter specifies the number of sampling steps to execute. It is a key determinant of the final image detail and resolution, with more steps typically resulting in finer results.
    - Comfy dtype: INT
    - Python dtype: int
- start_at_step
    - The 'start_at_step' parameter defines the step at which the sampling process begins, allowing customization of the sampling timeline and enabling users to control the progress of image generation.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The 'end_at_step' parameter sets the step at which the sampling process ends. It works with 'start_at_step' to define the range of steps over which sampling is executed, affecting the total duration of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- overlap_factor
    - The 'overlap_factor' parameter controls the degree of overlap between region masks during the sampling process. It is critical for ensuring seamless integration of sampled regions and plays an important role in the final composition of the image.
    - Comfy dtype: INT
    - Python dtype: int
- restore_latent
    - The 'restore_latent' parameter indicates whether the latent state should be restored after each region is sampled. This helps maintain image integrity in areas where multiple sampling operations overlap.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- return_with_leftover_noise
    - The 'return_with_leftover_noise' parameter determines whether the final latent image retains any residual noise after the sampling process. This is useful for further processing or analyzing noise characteristics.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- latent_image
    - The 'latent_image' parameter represents the initial latent state of the image to be sampled. It is the starting point of the sampling process and is critical for generating the final image.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- base_sampler
    - The 'base_sampler' parameter defines the basic sampling method to be used for the latent image. It is a key component in determining the algorithmic approach of image generation and affects the overall style and quality of the output.
    - Comfy dtype: KSAMPLER_ADVANCED
    - Python dtype: KSamplerAdvancedWrapper
- regional_prompts
    - The 'regional_prompts' parameter contains a set of prompts that define the regions of interest for sampling. Each prompt can influence the sampling process within its specified region, allowing detailed control over local image features.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[Any]
- additional_mode
    - The 'additional_mode' parameter specifies the restoration mode to be applied during the sampling process. It determines how additional sampling is integrated with the basic sampling, affecting the coherence and detail of the final image.
    - Comfy dtype: COMBO['DISABLE', 'ratio additional', 'ratio between']
    - Python dtype: str
- additional_sampler
    - The 'additional_sampler' parameter selects the type of sampler to be used for additional sampling tasks. An important factor in restoring and refining image details during the sampling process.
    - Comfy dtype: COMBO['AUTO', 'euler', 'heun', 'heunpp2', 'dpm_2', 'dpm_fast', 'dpmpp_2m', 'ddpm']
    - Python dtype: str
- additional_sigma_ratio
    - The 'additional_sigma_ratio' parameter adjusts the sigma ratio used for additional sampling, allowing fine-tuning of the noise level and its impact on the image generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- unique_id
    - The 'unique_id' parameter is used internally to uniquely identify the node during execution. It plays a key role in tracking and managing node state, ensuring accurate reporting and coordination within the system.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- latent_image
    - The 'latent_image' output represents the final sampled latent image after applying the RegionalSamplerAdvanced node operations. It encapsulates the results of the advanced sampling process, reflecting the customized noise, steps, and regional adjustments made during execution.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
