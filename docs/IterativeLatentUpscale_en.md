# Documentation
- Class name: IterativeLatentUpscale
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the IterativeLatentUpscale node aims to progressively enlarge a sample's latent representation by a specified number of iterative steps. It intelligently applies an upscale factor to enhance the resolution of the latent space, potentially improving detail in the upscaled output. This method refines the latent space iteratively to achieve higher quality upscaling while preserving underlying structure, thereby contributing to the overall process.

# Input types
## Required
- samples
- The 'samples' parameter is essential because it provides the initial latent representation that the node will upscale. Its quality and dimensionality directly affect the node's ability to produce high‑resolution output. This parameter is critical to the iterative upscaling process and determines the starting point for enhancement.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- upscale_factor
- The 'upscale_factor' parameter determines how much the latent sample will be enlarged. It is the key factor controlling the final resolution of the upscaled output. This parameter allows fine‑tuning of the latent space scale to meet the desired output size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
- The 'steps' parameter defines the number of iterative upscaling steps to perform. It is important because it determines the granularity of the iterative process, allowing more controlled and gradual enhancement of the latent space. Increasing the number of steps can result in smoother, more refined upscaling results.
    - Comfy dtype: INT
    - Python dtype: int
- upscaler
- The 'upscaler' parameter is a required input that provides the mechanism for upscaling the latent sample. It contains the logic and operations necessary for the iterative upscaling process, and is crucial for determining the node's efficiency and effectiveness.
    - Comfy dtype: UPSCALER
    - Python dtype: comfy_extras.nodes_upscale_model.Upscaler
## Optional
- temp_prefix
- The 'temp_prefix' parameter specifies a prefix for any temporary files that may be created during upscaling. It is not required, but can be useful for organizing or identifying intermediate files, especially in complex workflows involving multiple nodes.
    - Comfy dtype: STRING
    - Python dtype: str
- step_mode
- The 'step_mode' parameter specifies how the scale increases at each step of the iterative upscaling process. It offers a choice between simple linear progression or geometric progression, which can significantly affect the distribution of detail in the upscaled output.
    - Comfy dtype: COMBO[simple, geometric]
    - Python dtype: str
- unique_id
- The 'unique_id' parameter is optional but can be used to track the node's progress and status within a larger workflow. It is especially useful when running multiple instances of the node simultaneously, allowing differentiation and monitoring of each instance.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- latent
- The 'latent' output represents the upscaled latent representation produced by the iterative process. It is a refined version of the input sample with increased resolution, suitable for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
- The 'vae' output provides the variational autoencoder (VAE) model associated with the upscaled latent representation. This model can be used for generating new samples, further analysis of the latent space, and other tasks.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class IterativeLatentUpscale:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'upscale_factor': ('FLOAT', {'default': 1.5, 'min': 1, 'max': 10000, 'step': 0.1}), 'steps': ('INT', {'default': 3, 'min': 1, 'max': 10000, 'step': 1}), 'temp_prefix': ('STRING', {'default': ''}), 'upscaler': ('UPSCALER',), 'step_mode': (['simple', 'geometric'], {'default': 'simple'})}, 'hidden': {'unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('LATENT', 'VAE')
    RETURN_NAMES = ('latent', 'vae')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Upscale'

    def doit(self, samples, upscale_factor, steps, temp_prefix, upscaler, step_mode='simple', unique_id=None):
        w = samples['samples'].shape[3] * 8
        h = samples['samples'].shape[2] * 8
        if temp_prefix == '':
            temp_prefix = None
        if step_mode == 'geometric':
            upscale_factor_unit = pow(upscale_factor, 1.0 / steps)
        else:
            upscale_factor_unit = max(0, (upscale_factor - 1.0) / steps)
        current_latent = samples
        scale = 1
        for i in range(steps - 1):
            if step_mode == 'geometric':
                scale *= upscale_factor_unit
            else:
                scale += upscale_factor_unit
            new_w = w * scale
            new_h = h * scale
            core.update_node_status(unique_id, f'{i + 1}/{steps} steps | x{scale:.2f}', (i + 1) / steps)
            print(f'IterativeLatentUpscale[{i + 1}/{steps}]: {new_w:.1f}x{new_h:.1f} (scale:{scale:.2f}) ')
            step_info = (i, steps)
            current_latent = upscaler.upscale_shape(step_info, current_latent, new_w, new_h, temp_prefix)
        if scale < upscale_factor:
            new_w = w * upscale_factor
            new_h = h * upscale_factor
            core.update_node_status(unique_id, f'Final step | x{upscale_factor:.2f}', 1.0)
            print(f'IterativeLatentUpscale[Final]: {new_w:.1f}x{new_h:.1f} (scale:{upscale_factor:.2f}) ')
            step_info = (steps - 1, steps)
            current_latent = upscaler.upscale_shape(step_info, current_latent, new_w, new_h, temp_prefix)
        core.update_node_status(unique_id, '', None)
        return (current_latent, upscaler.vae)
```