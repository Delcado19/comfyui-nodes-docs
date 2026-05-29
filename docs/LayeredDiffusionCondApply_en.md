# Documentation
- Class name: LayeredDiffusionCond
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionCond node aims to blend foreground or background inputs into a mixed image. It leverages diffusion model power to create seamless blending under the provided conditions, enhancing visual consistency and detail in the output.

# Input types
## Required
- model
    - The model parameters are crucial because they define the base diffusion model used for generating blended images. They directly affect the node's performance and the quality of the output image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- cond
    - The cond parameter represents the conditional input that guides the diffusion process toward a specific outcome. Properly selecting it is crucial for achieving the desired image features.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- uncond
    - The uncond parameter serves as an additional conditional input that can be used to influence the diffusion process, allowing finer control over the final image.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- latent
    - The latent parameter stores the latent representation of the image, which is the input for the diffusion model. It plays a key role in determining the initial state of the generation process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- config
    - The config parameter specifies the configuration settings of the diffusion model. It is essential for aligning the model's behavior with the desired generation characteristics.
    - Comfy dtype: STR
    - Python dtype: str
- weight
    - The weight parameter adjusts the impact applied to the model's patches. It provides a way to fine-tune the balance between original and modified image features.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- blended_model
    - The blended_model output represents the modified diffusion model that has been enhanced through the layered diffusion process. It is important because it incorporates the combined effects of the input conditions.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- blended_cond
    - The blended_cond output is the result of condition information after applying layered diffusion. It reflects the updated state of the image generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- blended_uncond
    - The blended_uncond output corresponds to additional condition information that has been processed through the diffusion model. It contributes to subtle features in the final image.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class LayeredDiffusionCond:
    """Generate foreground + background given background / foreground.
    - FG => Blended
    - BG => Blended
    """

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'cond': ('CONDITIONING',), 'uncond': ('CONDITIONING',), 'latent': ('LATENT',), 'config': ([c.config_string for c in s.MODELS],), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05})}}
    RETURN_TYPES = ('MODEL', 'CONDITIONING', 'CONDITIONING')
    FUNCTION = 'apply_layered_diffusion'
    CATEGORY = 'layer_diffuse'
    MODELS = (LayeredDiffusionBase(model_file_name='layer_xl_fg2ble.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_xl_fg2ble.safetensors', sd_version=StableDiffusionVersion.SDXL, cond_type=LayerType.FG), LayeredDiffusionBase(model_file_name='layer_xl_bg2ble.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_xl_bg2ble.safetensors', sd_version=StableDiffusionVersion.SDXL, cond_type=LayerType.BG))

    def apply_layered_diffusion(self, model: ModelPatcher, cond, uncond, latent, config: str, weight: float):
        ld_model = [m for m in self.MODELS if m.config_string == config][0]
        assert get_model_sd_version(model) == ld_model.sd_version
        c_concat = model.model.latent_format.process_in(latent['samples'])
        return ld_model.apply_layered_diffusion(model, weight) + ld_model.apply_c_concat(cond, uncond, c_concat)
```