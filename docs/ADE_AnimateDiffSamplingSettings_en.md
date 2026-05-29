# Documentation
- Class name: SampleSettingsNode
- Category: Animate Diff 🎭🅐🅓
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The `create_settings` method of the SampleSettingsNode class is intended to configure and generate sampling settings for the animation process. It encapsulates parameters that define noise generation behavior, iteration options, and other customizable aspects during sampling. This method plays a crucial role in preparing the foundation for subsequent steps in the animation workflow, ensuring that the settings are correctly established to achieve the desired results.

# Input types
## Required
- batch_offset
    - The `batch_offset` parameter is critical for managing batch processing of noise generation. It allows the system to offset batch indices, which can be essential for ensuring unique noise patterns across different batches. This parameter significantly influences the execution and results of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- noise_type
    - The `noise_type` parameter determines the type of noise layer used during sampling. It is a key factor in shaping the characteristics of the generated noise, which in turn affects the overall quality and style of the animation. To achieve the desired noise profile in the final output, this parameter is indispensable.
    - Comfy dtype: NoiseLayerType.LIST
    - Python dtype: str
- seed_gen
    - The `seed_gen` parameter determines the method of generating seeds for the noise layer. It is important for ensuring the consistency and reproducibility of the generated noise patterns. This parameter is crucial for maintaining the integrity of the noise generation process across different runs.
    - Comfy dtype: SeedNoiseGeneration.LIST
    - Python dtype: str
- seed_offset
    - The `seed_offset` parameter is used to adjust the seed value for noise generation, which can alter the resulting noise pattern. It plays an important role in customizing noise characteristics, which is critical for achieving specific visual effects in the animation.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- noise_layers
    - The `noise_layers` parameter allows specifying custom noise layers to be applied during sampling. It provides a high degree of flexibility, enabling noise characteristics to be tailored to specific creative requirements. This parameter is particularly useful for users who wish to experiment with different noise configurations.
    - Comfy dtype: NOISE_LAYERS
    - Python dtype: NoiseLayerGroup
- iteration_opts
    - The `iteration_opts` parameter provides options to control the iteration process during sampling. It can be used to fine-tune the sampler to optimize factors such as speed, accuracy, or resource usage. Achieving a balance between performance and quality is crucial in animation.
    - Comfy dtype: ITERATION_OPTS
    - Python dtype: IterationOptions
- seed_override
    - The `seed_override` parameter allows manually overriding the default seed value used for noise generation. This can be particularly useful in scenarios where a specific noise pattern is required or when replicating results from previous runs. The parameter adds an extra layer of control to the noise generation process.
    - Comfy dtype: INT
    - Python dtype: Union[int, None]
- adapt_denoise_steps
    - The `adapt_denoise_steps` parameter is a boolean flag that, when set to true, allows the system to adaptively adjust denoising steps during sampling. This can lead to more effective and efficient noise reduction, improving the overall quality of the animation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- custom_cfg
    - The `custom_cfg` parameter allows using custom configuration keyframes that can be applied during the sampling process. This provides a way to introduce specific creative adjustments and fine-tune the animation to meet unique project requirements. This parameter is particularly beneficial for advanced users seeking greater control over animation settings.
    - Comfy dtype: CUSTOM_CFG
    - Python dtype: CustomCFGKeyframeGroup
- sigma_schedule
    - The `sigma_schedule` parameter defines a schedule of sigma values used during noise generation. It is critical for controlling the variance of the noise and can significantly impact the visual outcome of the animation. This parameter provides a way to apply different levels of noise reduction at various stages of the sampling process.
    - Comfy dtype: SIGMA_SCHEDULE
    - Python dtype: SigmaSchedule

# Output types
- settings
    - The `settings` output provides the sampling settings customized by the `create_settings` method. These settings encapsulate all the parameters and options specified during the method call and are used to guide subsequent steps in the animation process.
    - Comfy dtype: SAMPLE_SETTINGS
    - Python dtype: SampleSettings

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
