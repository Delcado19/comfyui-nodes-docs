# Documentation
- Class name: IterativeMixingKSamplerSimple
- Category: test
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

This node simplifies the iterative mixing and sampling process, making it possible to efficiently add and remove noise within a single framework. It is designed to provide a streamlined workflow for users who want to experiment with iterative sampling techniques without dealing with the complexity of multiple nodes.

# Input types
## Required
- model
    - The model parameter is crucial as it defines the foundation of the sampling process. It influences the quality and characteristics of generated samples and is a core component of the node's functionality.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- positive
    - The positive conditioning input is essential for guiding the sampling process toward desired results. It influences the direction and nature of generated samples, aligning them with specified conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The negative conditioning input helps refine the sampling process by avoiding undesirable outcomes. It plays a key role in steering generation away from unwanted characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- latent_image
    - The latent image parameter is critical to the iterative mixing process, as it represents the starting point for adding and removing noise. It significantly influences the initial state and evolution of samples.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- seed
    - The seed parameter is important for ensuring reproducibility and consistency in the sampling process. It initializes random number generation, which in turn affects the variability and diversity of output samples.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations in the sampling process, directly affecting the complexity and refinement of generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter (or cfg) is essential for adjusting the internal settings of the sampling process. It influences the overall behavior and performance of the node, allowing fine-tuning for optimal results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name parameter is critical for selecting the appropriate sampling method. It determines the strategy used to generate samples, which can significantly alter the final output.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SAMPLERS]
    - Python dtype: str
- scheduler
    - The scheduler parameter is essential for managing the progression of the sampling process. It controls the pace and timing of iterations, affecting the efficiency and quality of results.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SCHEDULERS]
    - Python dtype: str
- denoise
    - The denoising parameter plays an important role in refining generated samples. It adjusts the level of noise reduction, which can improve the clarity and quality of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_1
    - The alpha_1 parameter is crucial in controlling the mixing progress during the sampling process. It influences how samples are blended and fused, affecting the final appearance and characteristics of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blending_schedule
    - The mixing progress parameter is key in defining transitions between samples. It determines the blending strategy, which can significantly impact the smoothness and coherence of the generated sequence.
    - Comfy dtype: COMBO[list(BLENDING_SCHEDULE_MAP.keys())]
    - Python dtype: str
- blending_function
    - The mixing function parameter is essential for determining how samples are combined during the iterative process. It influences the final result by controlling the way samples are merged.
    - Comfy dtype: COMBO[list(BLENDING_FUNCTION_MAP.keys())]
    - Python dtype: str
- normalize_on_mean
    - The mean normalization parameter is important for adjusting the data preprocessing step. It influences the normalization of input data, which can affect the sampling process and characteristics of generated samples.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- samples
    - The output samples represent the final result of the iterative mixing and sampling process. They contain the essence of input parameters and node functionality, demonstrating the node's ability to generate complex and nuanced data patterns.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ttulttul/ComfyUI-Iterative-Mixer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
