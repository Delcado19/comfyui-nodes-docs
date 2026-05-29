# Documentation
- Class name: TiledKSamplerAdvanced
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_TiledKSampler.git

The TiledKSamplerAdvanced class implements an advanced sampling procedure by dividing the sampling space into independent tiles and processing them individually. This approach improves the efficiency and control of the sampling process, allowing fine-grained manipulation of generated samples. It integrates noise management, tiling strategies, and conditional inputs to achieve high-quality and detailed output.

# Input types
## Required
- model
    - The model parameter is critical to the sampling process, defining the underlying architecture and parameters of the sampling procedure. It determines the types of data that can be processed and the quality of the output.
    - Comfy dtype: MODEL
    - Python dtype: comfy.sd.Model
- add_noise
    - This parameter controls whether noise is introduced during the sampling process, affecting the diversity and randomness of generated samples. It is essential for achieving varied results.
    - Comfy dtype: COMBO
    - Python dtype: str
- noise_seed
    - The noise seed parameter plays an important role in ensuring the reproducibility of the noise generation process. It allows consistent results when the same seed is used.
    - Comfy dtype: INT
    - Python dtype: int
- tile_width
    - The tile width parameter determines the horizontal dimension of each tile, affecting the granularity of the sampling process. It is critical for achieving detailed control over the spatial distribution of generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
    - The tile height parameter sets the vertical dimension of each tile, affecting the granularity and aspect ratio of the sampling process. It is important for fine-tuning the spatial arrangement of the output.
    - Comfy dtype: INT
    - Python dtype: int
- tiling_strategy
    - The tile strategy parameter determines the method used to divide the sampling space, which can significantly impact the efficiency and consistency of the sampling process.
    - Comfy dtype: COMBO
    - Python dtype: str
- steps
    - The steps parameter defines the number of iterations the sampling process will undergo. It directly affects the complexity and refinement of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration settings of the sampler, influencing the behavior and performance of the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name parameter specifies the type of sampler to use, which determines the fundamental method of sample generation and affects the overall result.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling strategy of the sampler, affecting the progression and rhythm of the sampling process.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
    - The positive parameter provides positive conditional input, guiding the sampling process toward desired outcomes, shaping the characteristics of generated samples.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Any]]
- negative
    - The negative parameter provides negative conditional input, helping refine the sampling process by avoiding undesired outcomes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Any]]
- latent_image
    - The latent image parameter contains the latent representation of the image, which is the core input to the sampling process. It directly affects the quality and characteristics of generated samples.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- start_at_step
    - The start step parameter specifies the initial step of the sampling process, setting the starting point for sample generation.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end step parameter defines the final step of the sampling process, determining the endpoint for sample generation.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - The return remaining noise parameter controls whether residual noise is included in the final output, which can affect the texture and appearance of generated samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- preview
    - The preview parameter enables or disables preview image generation during the sampling process, providing visual feedback on progress.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- preview
    - The preview parameter enables or disables preview image generation during the sampling process, providing visual feedback on progress.
    - Comfy dtype: COMBO
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/BlenderNeko/ComfyUI_TiledKSampler)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
