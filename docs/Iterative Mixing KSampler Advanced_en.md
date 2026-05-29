# Documentation
- Class name: IterativeMixingKSamplerAdv
- Category: test
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

This node improves a batch of noisy latent representations by progressively introducing a set of predefined guidance latent vectors, aiming to enhance the quality and consistency of generated samples.

# Input types
## Required
- model
    - Model parameters are critical, as they define the generative network used for denoising and refining latent representations.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- seed
    - The seed is essential for the random processes involved in denoising and sampling steps, ensuring reproducibility and diversity of outputs.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration parameters are important, as they adjust the behavior of the sampling process, affecting the quality and characteristics of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name determines the sampling method used, which is crucial for the iterative blending process and the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - Scheduler parameters are key in the denoising process, controlling the rate of noise reduction across iterations.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
    - Positive conditioning provides essential context for the generation process, steering the output toward desired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - Negative conditioning is critical for constraining the sampling space, preventing undesired artifacts and ensuring consistency in results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent_image_batch
    - The latent image batch serves as the starting point for the iterative blending process, with each element influencing the refinement trajectory.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- denoise
    - Denoising parameters are crucial for controlling the degree of noise reduction at each step, balancing refinement and artifact prevention.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_1
    - Alpha-1 affects the blending schedule, determining how guidance latent vectors are mixed into the denoising process for optimal results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reverse_input_batch
    - The invert input batch parameter reverses the order of latent vectors, affecting the progression and consistency of iterative blending.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- blending_schedule
    - The blending schedule plays a significant role in determining the rate at which guidance latent vectors are merged, influencing the quality of final samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- stop_blending_at_pct
    - This parameter determines the percentage at which blending stops, balancing the influence of guidance latent vectors and ensuring the desired level of detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_blending_at_pct
    - The clamp blend percentage parameter limits the influence of blending, preventing over-blending and preserving the integrity of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blending_function
    - The blending function defines the mathematical operation used to combine guidance latent vectors and denoised samples, affecting the final appearance of the output.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- mixed_latents
    - The blended latent vectors represent the iteratively refined latent representations, which are the core output of this node.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- noised_latents
    - The noisy latent vectors capture the initial noisy state of the batch, providing a reference for the denoising process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- intermediate_latents
    - These intermediate latent vectors record the progression of the iterative blending process, offering insights into the refinement trajectory.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- plot_image
    - The plot image visualizes the blending schedule, providing a graphical representation of the iterative blending process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class IterativeMixingKSamplerAdv:
    """
    Take a batch of latents, z_prime, and progressively de-noise them
    step by step from z_prime[0] to z_prime[steps], mixing in a weighted
    fraction of z_prime[i] at each step so that de-noising is guided by
    the z_prime latents. This batch sampler assumes that the number of steps
    is just the length of z_prime, so there is no steps parameter. The parameter
    latent_image_batch should come from the Batch Unsampler node. The parameter
    alpha_1 controls an exponential cosine function that schedules how much
    of the noised latents to mix with the de-noised latents at each step.
    Small values cause more of the noised latents to be mixed in at each step,
    which provides more guidance to the diffusion, but which may result in more
    artifacts. Large values (i.e. >1.0) can cause output to be grainy. Your
    mileage may vary.
    """

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.1, 'round': 0.01}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image_batch': ('LATENT',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'alpha_1': ('FLOAT', {'default': 2.4, 'min': 0.05, 'max': 100.0, 'step': 0.05}), 'reverse_input_batch': ('BOOLEAN', {'default': True}), 'blending_schedule': (list(BLENDING_SCHEDULE_MAP.keys()), {'default': 'cosine'}), 'stop_blending_at_pct': ('FLOAT', {'default': 1.0}), 'clamp_blending_at_pct': ('FLOAT', {'default': 1.0}), 'blending_function': (list(BLENDING_FUNCTION_MAP.keys()), {'default': 'addition'})}}
    RETURN_TYPES = ('LATENT', 'LATENT', 'LATENT', 'IMAGE')
    RETURN_NAMES = ('mixed_latents', 'noised_latents', 'intermediate_latents', 'plot_image')
    FUNCTION = 'sample'
    CATEGORY = 'test'

    def sample(self, model, seed, cfg, sampler_name, scheduler, positive, negative, latent_image_batch, denoise=1.0, alpha_1=0.1, reverse_input_batch=True, blending_schedule='cosine', stop_blending_at_pct=1.0, clamp_blending_at_pct=1.0, blending_function=list(BLENDING_FUNCTION_MAP.keys())[0]):
        sampler = IterativeMixingKSampler()
        return sampler(model, seed, cfg, sampler_name, scheduler, positive, negative, latent_image_batch, denoise=denoise, alpha_1=alpha_1, reverse_input_batch=True, blending_schedule=blending_schedule, stop_blending_at_pct=stop_blending_at_pct, clamp_blending_at_pct=clamp_blending_at_pct, blending_function=blending_function)
```