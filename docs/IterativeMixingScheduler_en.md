# Documentation
- Class name: IterativeMixingScheduler
- Category: sampling/custom_sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

The iterative mixed scheduler node aims to generate a series of noise levels, i.e., sigmas, used in the iterative mixing process when sampling from the model. It uses the scheduler to control the progression of noise levels and can adjust the number of steps based on denoising parameters to fine‑tune the sampling process.

# Input types
## Required
- model
    - Model parameters are critical because they represent the generative model from which samples are drawn. They are the foundational component that determines the underlying structure and capability of the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- scheduler
    - Scheduler parameters define the strategy for adjusting noise levels during sampling. They play a key role in determining the quality and convergence of generated samples.
    - Comfy dtype: SCHEDULER_NAMES
    - Python dtype: str
- steps
    - Step count specifies the number of iterations in the sampling process. It directly affects the granularity of noise levels, thereby influencing the detail and accuracy of the final sample.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - Denoising parameters adjust the rate of noise removal, allowing fine‑tuning of the sampling process. They can significantly impact the clarity and detail of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sigmas
    - The sigmas output provides the computed sequence of noise levels that guide the iterative sampling process. This is a crucial output that directly affects the generation of the final sample.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class IterativeMixingScheduler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'scheduler': (comfy.samplers.SCHEDULER_NAMES,), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('SIGMAS',)
    CATEGORY = 'sampling/custom_sampling/schedulers'
    FUNCTION = 'get_sigmas'

    @torch.no_grad()
    def get_sigmas(self, model, scheduler, steps, denoise):
        sigmas = None
        cs = comfy.samplers.calculate_sigmas_scheduler
        if denoise is None or denoise > 0.9999:
            sigmas = cs(model.model, scheduler, steps).cpu()
        else:
            new_steps = int(steps / denoise)
            sigmas = cs(model.model, scheduler, new_steps).cpu()
            sigmas = sigmas[-(steps + 1):]
        return (sigmas,)
```