# Documentation
- Class name: KSamplerAdvanced_progress
- Category: InspirePack/analysis
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The KSamplerAdvanced_progress node aims to facilitate advanced sampling procedures within the model, incorporating noise and scheduling mechanisms to refine the generation process. It is designed to improve output quality and diversity by progressively adjusting sampling parameters.

# Input types
## Required
- model
    - The model parameter is crucial as it defines the underlying architecture and learned outcomes that the node will use for the sampling process. It is the foundation of the node's operation, determining the potential range and nature of the generated output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- add_noise
    - The add_noise parameter is crucial, determining whether noise will be introduced during the sampling process. This can lead to more diverse and even creative results, adding randomness to the output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - The noise_seed parameter is important as it provides the basis for randomness in noise generation. It ensures that noise patterns are reproducible, which is critical for consistent experimentation and result comparison.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter specifies the number of iterations the sampling process will undergo. It directly affects the complexity and detail of the generated output, with more steps potentially leading to finer results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter is a configuration value used to adjust the behavior of the sampling process. It is a key factor in controlling the balance between exploration and exploitation in output generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling method to be used. It influences the strategy employed for generating output, which can significantly alter the characteristics and distribution of the results.
    - Comfy dtype: SAMPLER
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling strategy for adjusting the sampling process over time. It plays an important role in achieving a dynamic balance between different aspects of generation, such as noise levels and sampling frequency.
    - Comfy dtype: SCHEDULER
    - Python dtype: str
- positive
    - The positive parameter provides positive conditioning data, guiding the sampling process toward desired outcomes. It is essential for steering generation in a specific direction, ensuring results meet certain criteria or expectations.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The negative parameter provides negative conditioning data, helping the sampling process avoid undesired outcomes. It plays a key role in refining output by preventing the generation of certain patterns or features.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent_image
    - The latent_image parameter is the foundational latent representation for the sampling process. It is a critical element as it directly influences the initial state and potential trajectory of the generated output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- start_at_step
    - The start_at_step parameter specifies the starting point of the sampling process. It is important for defining the range of iterations to be executed, thereby affecting the overall progression and timing of the generation.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The end_at_step parameter marks the endpoint of the sampling process. Together with start_at_step, it determines the total number of steps the process will cover, which directly impacts the comprehensiveness of the results.
    - Comfy dtype: INT
    - Python dtype: int
- noise_mode
    - The noise_mode parameter specifies the computational mode for noise generation and processing. This is a critical choice that affects the performance and efficiency of the node, with GPU being better suited for intensive computations and CPU for less resource-demanding tasks.
    - Comfy dtype: GPU(=A1111),CPU
    - Python dtype: str
- return_with_leftover_noise
    - The return_with_leftover_noise parameter determines whether the node will return the remaining noise along with the latent sample. This can be useful for further analysis or additional processing stages.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- interval
    - The interval parameter sets the frequency at which the node saves intermediate latent samples during the sampling process. It affects the granularity of the output and allows capturing the progression of generation.
    - Comfy dtype: INT
    - Python dtype: int
- omit_start_latent
    - The omit_start_latent parameter determines whether to omit the initial latent sample from the output. This is useful in certain workflows where the starting point is of no interest or to reduce redundancy in the results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_progress_latent_opt
    - The prev_progress_latent_opt parameter allows continuing a previous sampling process, providing a way to append new results to existing latent samples. This helps create extended or iterative outputs.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latent
    - The latent output represents the final latent sample generated by the node, containing the ultimate outcome of the sampling process. It is a critical component as it provides the foundation for further analysis or downstream processing.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- progress_latent
    - The progress_latent output provides an array of intermediate latent samples captured at specific intervals during the sampling process. This feature is valuable for monitoring the evolution of generation and understanding the dynamics of model behavior.
    - Comfy dtype: LATENT
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class KSamplerAdvanced_progress(a1111_compat.KSamplerAdvanced_inspire):

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'add_noise': ('BOOLEAN', {'default': True, 'label_on': 'enable', 'label_off': 'disable'}), 'noise_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.5, 'round': 0.01}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'start_at_step': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'end_at_step': ('INT', {'default': 10000, 'min': 0, 'max': 10000}), 'noise_mode': (['GPU(=A1111)', 'CPU'],), 'return_with_leftover_noise': ('BOOLEAN', {'default': False, 'label_on': 'enable', 'label_off': 'disable'}), 'interval': ('INT', {'default': 1, 'min': 1, 'max': 10000}), 'omit_start_latent': ('BOOLEAN', {'default': False, 'label_on': 'True', 'label_off': 'False'})}, 'optional': {'prev_progress_latent_opt': ('LATENT',)}}
    FUNCTION = 'sample'
    CATEGORY = 'InspirePack/analysis'
    RETURN_TYPES = ('LATENT', 'LATENT')
    RETURN_NAMES = ('latent', 'progress_latent')

    def sample(self, model, add_noise, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, start_at_step, end_at_step, noise_mode, return_with_leftover_noise, interval, omit_start_latent, prev_progress_latent_opt=None):
        sampler = a1111_compat.KSamplerAdvanced_inspire()
        if omit_start_latent:
            result = []
        else:
            result = [latent_image['samples']]
        for i in range(start_at_step, end_at_step + 1):
            cur_add_noise = i == start_at_step and add_noise
            cur_return_with_leftover_noise = i != steps or return_with_leftover_noise
            latent_image = sampler.sample(model, cur_add_noise, noise_seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, i, i + 1, noise_mode, cur_return_with_leftover_noise)[0]
            print(f'{i}, {i + 1}')
            if i % interval == 0 or i == steps:
                result.append(latent_image['samples'])
        if len(result) > 0:
            result = torch.cat(result)
            result = {'samples': result}
        else:
            result = latent_image
        if prev_progress_latent_opt is not None:
            result['samples'] = torch.cat((prev_progress_latent_opt['samples'], result['samples']), dim=0)
        return (latent_image, result)
```