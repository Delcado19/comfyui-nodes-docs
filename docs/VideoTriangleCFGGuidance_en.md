# Documentation
- Class name: VideoTriangleCFGGuidance
- Category: sampling/video_models
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VideoTriangleCFGGuidance node aims to enhance the controllability of video models by applying patches that introduce a configurable guidance function. It modifies the sampling process to mix conditional and unconditional outputs based on a linear configuration ratio, allowing fine-tuning of the generated video content.

# Input types
## Required
- model
    - The model parameter is crucial for the VideoTriangleCFGGuidance node, as it represents the video model that will be guided and modified. The node relies on this input to apply patches and adjust the sampling behavior accordingly.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- min_cfg
    - The min_cfg parameter determines the minimum proportion of guidance for mixing the conditional and unconditional outputs of the video model. It plays a key role in controlling the degree of guidance applied during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The modified_model output represents the video model updated with the new sampling guidance. It is important because it is the direct result of applying the patch through the VideoTriangleCFGGuidance node, enabling the generation of videos with adjusted content characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class VideoTriangleCFGGuidance:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'min_cfg': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.5, 'round': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'sampling/video_models'

    def patch(self, model, min_cfg):

        def linear_cfg(args):
            cond = args['cond']
            uncond = args['uncond']
            cond_scale = args['cond_scale']
            period = 1.0
            values = torch.linspace(0, 1, cond.shape[0], device=cond.device)
            values = 2 * (values / period - torch.floor(values / period + 0.5)).abs()
            scale = (values * (cond_scale - min_cfg) + min_cfg).reshape((cond.shape[0], 1, 1, 1))
            return uncond + scale * (cond - uncond)
        m = model.clone()
        m.set_model_sampler_cfg_function(linear_cfg)
        return (m,)
```