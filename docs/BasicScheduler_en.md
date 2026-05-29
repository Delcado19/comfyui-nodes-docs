# Documentation
- Class name: BasicScheduler
- Category: sampling/custom_sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The BasicScheduler node is designed to manage and compute the schedule of sigma values used in the diffusion process for generating images. It abstractly handles the complexity of determining appropriate sigmas for each step, ensuring a smooth and coherent sampling process.

# Input types
## Required
- model
    - The model parameter is crucial because it represents the base model used for sampling. It affects how the scheduler calculates sigmas and is critical to the node's execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scheduler
    - The scheduler parameter defines the type of schedule used for sigma calculation. It is a key determinant in the sampling process and directly affects the output sigmas.
    - Comfy dtype: STRING
    - Python dtype: str
- steps
    - The steps parameter specifies the number of steps to be taken in the sampling process. It is an important component controlling the granularity of sampling and affects the quality of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - The denoise parameter adjusts the level of noise reduction applied during the sampling process. It plays an important role in final image quality by affecting the clarity and detail of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sigmas
    - The sigmas output provides the computed schedule sigma values for each step in the sampling process. These values are essential for the diffusion process and directly affect the quality of the final image.
    - Comfy dtype: FLOAT[1]
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class BasicScheduler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'scheduler': (comfy.samplers.SCHEDULER_NAMES,), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('SIGMAS',)
    CATEGORY = 'sampling/custom_sampling/schedulers'
    FUNCTION = 'get_sigmas'

    def get_sigmas(self, model, scheduler, steps, denoise):
        total_steps = steps
        if denoise < 1.0:
            if denoise <= 0.0:
                return (torch.FloatTensor([]),)
            total_steps = int(steps / denoise)
        sigmas = comfy.samplers.calculate_sigmas(model.get_model_object('model_sampling'), scheduler, total_steps).cpu()
        sigmas = sigmas[-(steps + 1):]
        return (sigmas,)
```