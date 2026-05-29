# Documentation
- Class name: KSamplerSeq
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The KSamplerSeq node is designed to perform sequential sampling operations using various seed patterns and condition sequences. It manages the generation of latent samples, with the ability to alternate between positive and negative condition sequences, interpolate latent samples, and control the denoising process. This node ensures a coherent and controllable sampling workflow that can be fine-tuned for specific creative or analytical purposes.

# Input types
## Required
- model
    - The model parameter is critical for the KSamplerSeq node, as it defines the generative model that will be used for sampling. The choice of model significantly influences the quality and style of the generated samples.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter is essential for initializing the random number generation process, ensuring reproducibility in sampling operations. It sets the starting point for the generated seed sequence.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- seed_mode_seq
    - The seed_mode_seq parameter determines how seed values are updated within the sampling sequence, allowing for different sampling strategies such as incremental, decremental, random selection, or fixed seed.
    - Comfy dtype: COMBO['increment', 'decrement', 'random', 'fixed']
    - Python dtype: str
- alternate_values
    - The alternate_values parameter enables alternation between different seed states during the sampling process, adding variability to the generated samples.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- steps
    - The steps parameter specifies the number of steps in the sampling process, which directly affects the resolution and detail of the generated samples.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing the configuration value, is used to control the fidelity of the sampling process, balancing detail and noise in the generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the specific sampling method to use from the available samplers, influencing the overall behavior and characteristics of the sampling process.
    - Comfy dtype: comfy.samplers.KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the noise reduction strategy during the sampling process, which may affect the smoothness and coherence of the generated samples.
    - Comfy dtype: comfy.samplers.KSampler.SCHEDULERS
    - Python dtype: str
- sequence_loop_count
    - The sequence_loop_count parameter sets the number of iterations of the sampling sequence, allowing multiple samples to be generated in a single run.
    - Comfy dtype: INT
    - Python dtype: int
- positive_seq
    - The positive_seq parameter provides a series of positive condition values, guiding the sampling process toward desired outcomes.
    - Comfy dtype: CONDITIONING_SEQ
    - Python dtype: List[Tuple[int, torch.Tensor, Dict[str, torch.Tensor]]]
- negative_seq
    - The negative_seq parameter provides a series of negative condition values, helping to refine the sampling process by discouraging undesired outcomes.
    - Comfy dtype: CONDITIONING_SEQ
    - Python dtype: List[Tuple[int, torch.Tensor, Dict[str, torch.Tensor]]]
- use_conditioning_slerp
    - The use_conditioning_slerp parameter enables spherical linear interpolation (SLERP) for blending condition values, which can result in smoother transitions between sample states.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cond_slerp_strength
    - The cond_slerp_strength parameter controls the intensity of the SLERP operation when blending condition values, affecting the range of interpolation between states.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_image
    - The latent_image parameter represents the initial latent state used as the starting point for the sampling process, influencing the direction and characteristics of the generated samples.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- use_latent_interpolation
    - The use_latent_interpolation parameter toggles the application of latent interpolation between generated samples, which can produce a more coherent sequence of samples.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- latent_interpolation_mode
    - The latent_interpolation_mode parameter selects the latent interpolation method to use, defining how consecutive samples are blended together.
    - Comfy dtype: COMBO['Blend', 'Slerp', 'Cosine Interp']
    - Python dtype: str
- latent_interp_strength
    - The latent_interp_strength parameter adjusts the influence of latent interpolation, determining how smoothly one sample transitions to the next in the sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise_start
    - The denoise_start parameter sets the initial denoising strength, which affects the noise reduction at the beginning of the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise_seq
    - The denoise_seq parameter controls the denoising strength throughout the sampling sequence, allowing fine-tuning of noise reduction over time.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unsample_latents
    - When the unsample_latents parameter is enabled, it triggers the generation of unsampled latent states, which can introduce more diversity into the sampling output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- samples
    - The samples parameter encapsulates the latent samples generated during the sampling process. It is a collection of tensors representing the latent space of the generated images.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/WAS_Extras)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
