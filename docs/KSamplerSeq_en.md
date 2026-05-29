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
```
class KSamplerSeq:

    def __init__(self):
        self.previous_seed = None
        self.current_seed = None

    def initialize_seeds(self, initial_seed):
        self.previous_seed = initial_seed
        self.current_seed = initial_seed

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'seed_mode_seq': (['increment', 'decrement', 'random', 'fixed'],), 'alternate_values': ('BOOLEAN', {'default': True}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.5, 'round': 0.01}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'sequence_loop_count': ('INT', {'default': 20, 'min': 1, 'max': 1024, 'step': 1}), 'positive_seq': ('CONDITIONING_SEQ',), 'negative_seq': ('CONDITIONING_SEQ',), 'use_conditioning_slerp': ('BOOLEAN', {'default': False}), 'cond_slerp_strength': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'latent_image': ('LATENT',), 'use_latent_interpolation': ('BOOLEAN', {'default': False}), 'latent_interpolation_mode': (['Blend', 'Slerp', 'Cosine Interp'],), 'latent_interp_strength': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'denoise_start': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'denoise_seq': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'unsample_latents': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'sampling'

    def update_seed(self, seed, seed_mode):
        if seed_mode == 'increment':
            return seed + 1
        elif seed_mode == 'decrement':
            return seed - 1
        elif seed_mode == 'random':
            return random.randint(0, 18446744073709551615)
        elif seed_mode == 'fixed':
            return seed

    def hash_tensor(self, tensor):
        tensor = tensor.cpu().contiguous()
        return hashlib.sha256(tensor.numpy().tobytes()).hexdigest()

    def update_conditioning(self, conditioning_seq, loop_count, last_conditioning):
        matching_conditioning = None
        for (idx, conditioning, *_) in conditioning_seq:
            if int(idx) == loop_count:
                matching_conditioning = conditioning
                break
        return matching_conditioning if matching_conditioning else last_conditioning if last_conditioning else None

    def update_alternate_seed(self, loop_count):
        if loop_count % 3 == 0:
            if self.previous_seed is None:
                self.previous_seed = self.current_seed
            else:
                (self.previous_seed, self.current_seed) = (self.current_seed, self.previous_seed + 1 if loop_count // 2 % 2 == 0 else self.previous_seed - 1)
        return self.current_seed

    def alternate_denoise(self, current_denoise):
        return 0.95 if current_denoise == 0.75 else 0.75

    def sample(self, model, seed, seed_mode_seq, alternate_values, steps, cfg, sampler_name, scheduler, sequence_loop_count, positive_seq, negative_seq, cond_slerp_strength, latent_image, use_latent_interpolation, latent_interpolation_mode, latent_interp_strength, denoise_start=1.0, denoise_seq=0.5, use_conditioning_slerp=False, unsample_latents=False, alternate_mode=False):
        positive_seq = positive_seq
        negative_seq = negative_seq
        results = []
        positive_conditioning = None
        negative_conditioning = None
        self.initialize_seeds(seed)
        for loop_count in range(sequence_loop_count):
            if alternate_values and loop_count % 2 == 0:
                seq_seed = self.update_alternate_seed(seed) if seed_mode_seq != 'fixed' else seed
            else:
                seq_seed = seed if loop_count <= 0 else self.update_seed(seq_seed, seed_mode_seq)
            print(f'Loop count: {loop_count}, Seed: {seq_seed}')
            last_positive_conditioning = positive_conditioning[0] if positive_conditioning else None
            last_negative_conditioning = negative_conditioning[0] if negative_conditioning else None
            positive_conditioning = self.update_conditioning(positive_seq, loop_count, last_positive_conditioning)
            negative_conditioning = self.update_conditioning(negative_seq, loop_count, last_negative_conditioning)
            if use_conditioning_slerp and (last_positive_conditioning and last_negative_conditioning):
                a = last_positive_conditioning[0].clone()
                b = positive_conditioning[0].clone()
                na = last_negative_conditioning[0].clone()
                nb = negative_conditioning[0].clone()
                pa = last_positive_conditioning[1]['pooled_output'].clone()
                pb = positive_conditioning[1]['pooled_output'].clone()
                npa = last_negative_conditioning[1]['pooled_output'].clone()
                npb = negative_conditioning[1]['pooled_output'].clone()
                pos_cond = slerp(cond_slerp_strength, a, b)
                pos_pooled = slerp(cond_slerp_strength, pa, pb)
                neg_cond = slerp(cond_slerp_strength, na, nb)
                neg_pooled = slerp(cond_slerp_strength, npa, npb)
                positive_conditioning = [pos_cond, {'pooled_output': pos_pooled}]
                negative_conditioning = [neg_cond, {'pooled_output': neg_pooled}]
            positive_conditioning = [positive_conditioning]
            negative_conditioning = [negative_conditioning]
            if positive_conditioning is not None or negative_conditioning is not None:
                end_at_step = steps
                if results is not None and len(results) > 0:
                    latent_input = {'samples': results[-1]}
                    denoise = denoise_seq
                    start_at_step = round((1 - denoise) * steps)
                    end_at_step = steps
                else:
                    latent_input = latent_image
                    denoise = denoise_start
                if unsample_latents and loop_count > 0:
                    force_full_denoise = False if loop_count > 0 or loop_count <= steps - 1 else True
                    disable_noise = False
                    unsampled_latent = unsample(model=model, seed=seq_seed, cfg=cfg, sampler_name=sampler_name, steps=steps, end_at_step=end_at_step, scheduler=scheduler, normalize=False, positive=positive_conditioning, negative=negative_conditioning, latent_image=latent_input)[0]
                    sample = nodes.common_ksampler(model, seq_seed, steps, cfg, sampler_name, scheduler, positive_conditioning, negative_conditioning, unsampled_latent, denoise=denoise, disable_noise=disable_noise, start_step=start_at_step, last_step=end_at_step, force_full_denoise=force_full_denoise)[0]['samples']
                else:
                    sample = nodes.common_ksampler(model, seq_seed, steps, cfg, sampler_name, scheduler, positive_conditioning, negative_conditioning, latent_input, denoise=denoise)[0]['samples']
                if use_latent_interpolation and results and (loop_count > 0):
                    if latent_interpolation_mode == 'Blend':
                        sample = blend_latents(latent_interp_strength, results[-1], sample)
                    elif latent_interpolation_mode == 'Slerp':
                        sample = slerp_latents(latent_interp_strength, results[-1], sample)
                    elif latent_interpolation_mode == 'Cosine Interp':
                        sample = cosine_interp_latents(latent_interp_strength, results[-1], sample)
                    else:
                        sample = sample
                results.append(sample)
        results = torch.cat(results, dim=0)
        results = {'samples': results}
        return (results,)
```