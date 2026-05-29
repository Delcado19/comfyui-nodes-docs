# Documentation
- Class name: LayeredDiffusionDiff
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

LayeredDiffusionDiff node separates foreground and background from mixed images by applying diffusion, using conditions to extract components, enabling tasks that modify isolated parts without affecting others.

# Input types
## Required
- model
    - Model parameters are essential; they define the underlying model used for diffusion, enabling the node to interact with image data for separation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- cond
    - cond parameter provides conditional input guiding diffusion to extract desired components, crucial for result determination.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]}}
- uncond
    - uncond parameter provides unconditional input supplementing diffusion, allowing generation without specific prerequisites.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]}}
- blended_latent
    - blended_latent parameter represents the latent of the mixed image; the node extracts foreground or background from it, a key diffusion input.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- latent
    - latent parameter stores the image latent, used with blended_latent to guide diffusion.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- config
    - config parameter specifies diffusion model settings, ensuring operation according to predefined specs.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - weight parameter tunes diffusion impact on separation, adjusting applied strength.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - model output is a modified version of the input after diffusion; depending on config, it contains separated foreground or background.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- cond
    - cond output provides updated conditional information reflecting changes made during diffusion.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]}}
- uncond
    - uncond output reflects updated unconditional input after diffusion processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]}}

# Usage tips
- Infra type: GPU

# Source code
```
class LayeredDiffusionDiff:
    """Extract FG/BG from blended image.
    - Blended + FG => BG
    - Blended + BG => FG
    """

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'cond': ('CONDITIONING',), 'uncond': ('CONDITIONING',), 'blended_latent': ('LATENT',), 'latent': ('LATENT',), 'config': ([c.config_string for c in s.MODELS],), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05})}}
    RETURN_TYPES = ('MODEL', 'CONDITIONING', 'CONDITIONING')
    FUNCTION = 'apply_layered_diffusion'
    CATEGORY = 'layer_diffuse'
    MODELS = (LayeredDiffusionBase(model_file_name='layer_xl_fgble2bg.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_xl_fgble2bg.safetensors', sd_version=StableDiffusionVersion.SDXL, cond_type=LayerType.FG), LayeredDiffusionBase(model_file_name='layer_xl_bgble2fg.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_xl_bgble2fg.safetensors', sd_version=StableDiffusionVersion.SDXL, cond_type=LayerType.BG))

    def apply_layered_diffusion(self, model: ModelPatcher, cond, uncond, blended_latent, latent, config: str, weight: float):
        ld_model = [m for m in self.MODELS if m.config_string == config][0]
        assert get_model_sd_version(model) == ld_model.sd_version
        c_concat = model.model.latent_format.process_in(torch.cat([latent['samples'], blended_latent['samples']], dim=1))
        return ld_model.apply_layered_diffusion(model, weight) + ld_model.apply_c_concat(cond, uncond, c_concat)
```