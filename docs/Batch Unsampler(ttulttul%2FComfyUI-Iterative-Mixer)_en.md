# Documentation
- Class name: BatchUnsampler
- Category: tests
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

The BatchUnsampler class aims to reverse engineer the noise schedule applied to a batch of latent variables, starting from a given latent image and working backward step by step. It utilizes the model's noise schedule to generate a sequence of gradually denoised latent variables, which can be very useful in understanding the model's internal representations and noise dynamics.

# Input types
## Required
- model
    - The model parameter is crucial because it defines the base architecture and noise schedule used for the unsampling operation. It is the foundation for generating the sequence of denoised latent variables and is essential for the node's functionality.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- sampler_name
    - The sampler_name parameter is important because it determines the type of sampling method used during the unsampling process. It affects the quality and characteristics of the generated latent variables, thereby influencing the overall result of the denoising sequence.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SAMPLERS]
    - Python dtype: str
- scheduler
    - The scheduler parameter is crucial because it determines the scheduling strategy for noise levels applied during the unsampling operation. It affects the smoothness and coherence of the denoised latent sequence, which is essential for accurate representation.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SCHEDULERS]
    - Python dtype: str
- steps
    - The steps parameter is important because it defines the number of intermediate steps used for unsampling the latent variables. It directly affects the resolution and granularity of the denoised latent sequence, impacting the node's ability to capture details in the noise schedule.
    - Comfy dtype: INT
    - Python dtype: int
- start_at_step
    - The start_at_step parameter specifies the initial step at which unsampling begins. It sets the starting point of the denoising sequence and is crucial for controlling the range of generated latent variables.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end_at_step parameter marks the final step at which unsampling ends. It establishes the end point of the denoising sequence and affects the degree to which the latent variables are denoised.
    - Comfy dtype: INT
    - Python dtype: int
- latent_image
    - The latent_image parameter is crucial because it provides the source latent image from which unsampling begins. It is the foundation for generating the entire sequence of latent variables and is indispensable for the node's operation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
## Optional
- normalize
    - When the normalize parameter is enabled, the generated latent variables are adjusted to have a mean of zero, which can be beneficial for certain downstream applications. It modifies the output of the unsampling, potentially enhancing the comparability of the denoised latent variables.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent_batch
    - The latent_batch output contains the sequence of denoised latent variables, representing the reverse engineering of the noise schedule applied to the original latent image. It is an important result of the BatchUnsampler operation, providing valuable insights into the internal noise dynamics of the model.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ttulttul/ComfyUI-Iterative-Mixer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
