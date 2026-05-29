# Documentation
- Class name: UnsamplerDetailerHookProvider
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The UnsamplerDetailerHookProvider node aims to enhance the details of sampled data through unsampling. It operates by applying detailed unsampling hooks during the sampling process, allowing the generation of finer outputs. This node is crucial for tasks requiring high detail quality, such as in image or signal processing applications.

# Input types
## Required
- model
    - The model parameter is critical for the UnsamplerDetailerHookProvider node as it defines the underlying model to be used for unsampling. The choice of model can significantly affect the quality and characteristics of the unsampled data.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- steps
    - The steps parameter determines the number of steps to be used in the unsampling process. It is a key factor influencing the level of detail and computational complexity of the operation.
    - Comfy dtype: INT
    - Python dtype: int
- start_end_at_step
    - The start_end_at_step parameter specifies the step at which the unsampling process should begin to gradually reduce detail enhancement.
    - Comfy dtype: INT
    - Python dtype: int
- end_end_at_step
    - The end_end_at_step parameter marks the final step at which the unsampling process ends, signaling the conclusion of the detail enhancement phase.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration settings of the unsampler, allowing fine-tuning of the unsampling process to achieve the desired result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter identifies the specific sampler to be used during the unsampling process, which can alter the nature of the sampled data.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling strategy for the unsampling steps, which can optimize the process for efficiency or quality.
    - Comfy dtype: STRING
    - Python dtype: str
- normalize
    - The normalize parameter determines whether the data should be normalized during the unsampling process, potentially improving the consistency of the results.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter provides positive conditioning information to guide the unsampling process toward the desired outcome.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The negative parameter provides negative conditioning information to avoid undesired results during the unsampling process.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- schedule_for_cycle
    - The schedule_for_cycle parameter specifies whether the unsampling process should follow a cyclic schedule, which is useful for iterative refinement.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- DETAILER_HOOK
    - The output of the UnsamplerDetailerHookProvider node is a detailed unsampling hook that can be used to inject additional detail into the sampling process, improving the quality of the final output.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: DetailerHook

# Usage tips
- Infra type: CPU

# Source code
```
class UnsamplerDetailerHookProvider:
    schedules = ['skip_start', 'from_start']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'steps': ('INT', {'default': 25, 'min': 1, 'max': 10000}), 'start_end_at_step': ('INT', {'default': 21, 'min': 0, 'max': 10000}), 'end_end_at_step': ('INT', {'default': 24, 'min': 0, 'max': 10000}), 'cfg': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'normalize': (['disable', 'enable'],), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'schedule_for_cycle': (s.schedules,)}}
    RETURN_TYPES = ('DETAILER_HOOK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detailer'

    def doit(self, model, steps, start_end_at_step, end_end_at_step, cfg, sampler_name, scheduler, normalize, positive, negative, schedule_for_cycle):
        try:
            hook = hooks.UnsamplerDetailerHook(model, steps, start_end_at_step, end_end_at_step, cfg, sampler_name, scheduler, normalize, positive, negative, from_start='from_start' in schedule_for_cycle)
            return (hook,)
        except Exception as e:
            print("[ERROR] UnsamplerDetailerHookProvider: 'ComfyUI Noise' custom node isn't installed. You must install 'BlenderNeko/ComfyUI Noise' extension to use this node.")
            print(f'\t{e}')
            pass
```