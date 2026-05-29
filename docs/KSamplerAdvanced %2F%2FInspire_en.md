# Documentation
- Class name: KSamplerAdvanced_inspire
- Category: InspirePack/a1111_compat
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The KSamplerAdvanced_inspire class is designed to facilitate advanced sampling operations within the model, integrating noise and scheduling mechanisms to enhance the generation process. It aims to provide users with a flexible and efficient tool for exploring the model's latent space, enabling the creation of diverse and high-quality outputs.

# Input types
## Required
- model
    - The model parameter is crucial as it defines the foundational generative model that the node will operate on. It is the basis for all sampling activities and directly affects the quality and type of generated output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- add_noise
    - The add_noise parameter controls whether random elements are introduced during the sampling process, which can lead to more diverse and creative results. It is an important aspect for exploring the model's capabilities and achieving varied outputs.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - The noise_seed parameter plays a significant role in determining the randomness and diversity of the noise pattern applied during the sampling process. It ensures that the noise is reproducible and consistent, which is essential for experimental control and comparison.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the progression of the sampling process, affecting the granularity and depth of exploration within the model's latent space. It is a key factor in achieving a comprehensive and detailed set of results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter is a configuration value used to adjust the behavior of the sampling process, allowing for fine-tuning of output characteristics. It is an important tool for tailoring the node's functionality according to specific requirements and desired outcomes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling strategy to be adopted, which is critical for the node's ability to effectively navigate the model's latent space. It shapes the overall approach and direction of the sampling process.
    - Comfy dtype: ENUM
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling method for the sampling process, which is essential for managing the dynamic aspects of the node's operations. It ensures that the node can adapt and respond to changing conditions within the model's latent space.
    - Comfy dtype: ENUM
    - Python dtype: str
- positive
    - The positive parameter serves as guidance for the sampling process, providing positive examples or conditions that the node should follow. It is crucial for steering the output towards desired characteristics and ensuring that results align with the intended direction.
    - Comfy dtype: CONDITIONING
    - Python dtype: dict
- negative
    - The negative parameter establishes constraints or undesirable conditions for the sampling process, which is essential for guiding the node away from undesirable outcomes. It plays a significant role in shaping the final results and maintaining output quality.
    - Comfy dtype: CONDITIONING
    - Python dtype: dict
- latent_image
    - The latent_image parameter is the primary input for the node's sampling operations, representing the initial state or condition within the model's latent space. It is the foundation upon which the node generates outputs and directly influences the nature of the results.
    - Comfy dtype: LATENT
    - Python dtype: dict
- start_at_step
    - The start_at_step parameter defines the starting point of the sampling process, indicating which step the node should begin its operations from. It is an important factor in controlling the timing and sequence of sampling activities.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end_at_step parameter sets the endpoint of the sampling process, determining the upper limit of steps the node should continue its operations. It is crucial for defining the scope and duration of sampling activities.
    - Comfy dtype: INT
    - Python dtype: int
- noise_mode
    - The noise_mode parameter determines the computational resources used for generating noise, with options including GPU and CPU. This is a critical decision affecting the performance and efficiency of the sampling process.
    - Comfy dtype: ENUM
    - Python dtype: str
- return_with_leftover_noise
    - The return_with_leftover_noise parameter decides whether the node should return additional noise information beyond the primary output. This may be useful for further analysis or subsequent processing steps.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- batch_seed_mode
    - The batch_seed_mode parameter manages seed allocation within batches, which is important for maintaining consistency and controlling noise generation in parallel processing scenarios. It ensures that each batch has a unique noise seed, promoting diversity and preventing overlap in outputs.
    - Comfy dtype: ENUM
    - Python dtype: str
- variation_seed
    - The variation_seed parameter introduces variability in the noise generation process, allowing exploration of a wider range of results. It is essential for creating unique and diverse outcomes during the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- variation_strength
    - The variation_strength parameter adjusts the intensity of variation introduced by noise, which can influence the degree of variation in the final output. It is a key factor in controlling the diversity and creativity of results.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- noise_opt
    - The noise_opt parameter provides an option to customize the noise applied during the sampling process, giving users the ability to experiment with different noise configurations and their impact on outputs.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor

# Output types
- latent
    - The latent parameter contains the resulting samples from the sampling process, representing the final product of the node's operations. It is important as it contains essential information needed for further analysis or generating the final image.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
