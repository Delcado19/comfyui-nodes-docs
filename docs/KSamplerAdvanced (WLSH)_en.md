# Documentation
- Class name: WLSH_KSamplerAdvanced
- Category: WLSH Nodes/sampling
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_KSamplerAdvanced node is designed to perform advanced sampling operations using a specified model. It allows customization of the sampling process through parameters such as adding noise, random seed, and sampling steps. This node can generate high-quality samples by fine-tuning the denoising process and utilizing various sampling strategies and schedulers.

# Input types
## Required
- model
    - The model parameter is crucial for the node's operation, as it defines the generative model used to generate samples. The choice of model significantly affects the quality and characteristics of the generated samples.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- sampler_name
    - The sampler_name parameter selects the specific sampling method to use. Different sampling methods can lead to different sample qualities and characteristics, making this parameter critical for achieving desired results.
    - Comfy dtype: comfy.samplers.KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling strategy to be applied during the sampling process. It is important for controlling the speed at which sampling steps are executed.
    - Comfy dtype: comfy.samplers.KSampler.SCHEDULERS
    - Python dtype: str
- positive
    - The positive parameter provides conditioning information to guide the sampling process to generate samples with desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - The negative parameter provides additional conditioning information that helps avoid generating samples with undesirable features.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - The latent_image parameter is a key input to the sampling process, representing the initial latent state from which sampling begins.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- add_noise
    - The add_noise parameter determines whether noise is added during the sampling process. This affects the diversity of generated samples and is an important factor in controlling the trade-off between sample quality and noise.
    - Comfy dtype: COMBO['enable', 'disable']
    - Python dtype: str
- seed
    - The seed parameter is used to introduce randomness in the sampling process. It ensures that sampling results are reproducible, which is essential for debugging and comparing different sampling configurations.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter specifies the number of iterations in the sampling process. More steps typically result in higher quality samples but increase computational cost.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing the control factor for the sampling process, allows fine-tuning the balance between exploration and exploitation in the sampling strategy.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at_step
    - The start_at_step parameter determines the step at which the sampling process starts. It allows fine-grained control over the sampling procedure.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end_at_step parameter specifies the final step of the sampling process. It is used to define the range of steps over which sampling is performed.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - The return_with_leftover_noise parameter controls whether the sampled image contains residual noise from the sampling process. This is useful for further processing or analysis.
    - Comfy dtype: COMBO['disable', 'enable']
    - Python dtype: str
- denoise
    - The denoise parameter adjusts the strength of denoising applied during the sampling process. It is a key factor in determining the final clarity and quality of the samples.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The latent output represents the final latent state of the sampling process, which can be used for further analysis or as input to subsequent processing steps.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- info
    - The info output provides a summary of the sampling process, including details such as the seed used, number of steps, and applied denoising strength.
    - Comfy dtype: INFO
    - Python dtype: Dict[str, Union[int, float, str]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
