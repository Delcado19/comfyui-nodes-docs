# Documentation
- Class name: DifferentialDiffusion
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DifferentialDiffusion node aims to enhance the capabilities of a given model by integrating a custom denoising process. It operates based on the principle of differential diffusion, allowing the application of a denoising mask that dynamically adjusts according to the model's internal parameters. This node is crucial for refining model output by controlling the level of noise reduction applied at each step of the diffusion process.

# Input types
## Required
- model
    - The 'model' parameter is essential, as it represents the core model on which the DifferentialDiffusion node will operate. It is through this model that the node applies its denoising functionality, making it a fundamental component of the node's execution and the quality of the results produced.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- sigma
    - The 'sigma' parameter is critical for determining the noise level in the diffusion process. It directly influences how the denoising mask is applied, thereby affecting the final output of the model. The 'sigma' value is used to calculate the threshold for the denoising mask, which in turn shapes the diffusion steps.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- denoise_mask
    - The 'denoise_mask' parameter plays an important role in the node's operation, as it determines the regions of the model output that will undergo noise reduction. It is a key component for achieving the desired level of noise control, ensuring the diffusion process results in refined and improved model output.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- extra_options
    - The 'extra_options' parameter is a dictionary that provides additional settings and information required for the node's operation. It includes 'model' and 'sigmas' used to define the scope and parameters of the diffusion process. This parameter is essential for the customization and flexibility of the node's functionality.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- model
    - The output 'model' is an enhanced version of the input model, now equipped with differential diffusion denoising capabilities. It marks the successful application of the node's functionality, providing a model better suited for producing high-quality output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class DifferentialDiffusion:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',)}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'apply'
    CATEGORY = '_for_testing'
    INIT = False

    def apply(self, model):
        model = model.clone()
        model.set_model_denoise_mask_function(self.forward)
        return (model,)

    def forward(self, sigma: torch.Tensor, denoise_mask: torch.Tensor, extra_options: dict):
        model = extra_options['model']
        step_sigmas = extra_options['sigmas']
        sigma_to = model.inner_model.model_sampling.sigma_min
        if step_sigmas[-1] > sigma_to:
            sigma_to = step_sigmas[-1]
        sigma_from = step_sigmas[0]
        ts_from = model.inner_model.model_sampling.timestep(sigma_from)
        ts_to = model.inner_model.model_sampling.timestep(sigma_to)
        current_ts = model.inner_model.model_sampling.timestep(sigma[0])
        threshold = (current_ts - ts_to) / (ts_from - ts_to)
        return (denoise_mask >= threshold).to(denoise_mask.dtype)
```