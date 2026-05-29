# Documentation
- Class name: ApplyStableSRUpscaler
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/Arthurzhangsheng/Comfyui-StableSR.git

This node leverages the capabilities of the StableSR model to increase the resolution of the input image while maintaining its visual integrity. It focuses on applying advanced upscaling techniques to produce high-quality, detailed images without compromising the original content.

# Input types
## Required
- model
    - The model parameter is critical because it defines the underlying structure and functionality that the node will operate on. Having a valid model is essential for ensuring the correct application of StableSR techniques in the upscaling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- stablesr_model
    - The stablesr_model parameter is critical because it specifies the path to the StableSR model checkpoint, which contains the pre-trained weights required for the upscaling process. Without a correct and accessible model path, the node cannot perform its intended function.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('stablesr')]
    - Python dtype: str
## Optional
- latent_image
    - When the latent_image parameter is provided, it allows the node to incorporate additional information into the upscaling process. This can refine the output by considering the latent features of the input, potentially leading to better visual results.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Output types
- model_sr
    - The output model model_sr is the result of applying StableSR upscaling techniques to the input model. It represents an enhanced version of the original model with higher resolution and detail, ready for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class ApplyStableSRUpscaler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'stablesr_model': (folder_paths.get_filename_list('stablesr'),)}, 'optional': {'latent_image': ('LATENT',)}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'apply_stable_sr_upscaler'
    CATEGORY = 'image/upscaling'

    def apply_stable_sr_upscaler(self, model, stablesr_model, latent_image=None):
        stablesr_model_path = folder_paths.get_full_path('stablesr', stablesr_model)
        if not os.path.isfile(stablesr_model_path):
            raise Exception(f'[StableSR] Invalid StableSR model reference')
        upscaler = StableSR(stablesr_model_path, dtype=comfy.model_management.unet_dtype(), device='cpu')
        if latent_image != None:
            latent_image = model.model.process_latent_in(latent_image['samples'])
            upscaler.set_latent_image(latent_image)
        else:
            upscaler.set_auto_set_latent(True)
        model_sr = model.clone()
        model_sr.set_model_unet_function_wrapper(upscaler)
        return (model_sr,)
```