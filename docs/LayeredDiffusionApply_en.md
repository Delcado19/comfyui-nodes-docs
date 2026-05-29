# Documentation
- Class name: LayeredDiffusionFG
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionFG class aims to enhance image generation tasks by applying a layered diffusion process, effectively generating foregrounds with transparent backgrounds. This node integrates with various models to achieve the desired effects, focusing on the seamless integration of layers to produce high-quality visual outputs.

# Input types
## Required
- model
    - The model parameter is crucial for the LayeredDiffusionFG node as it defines the underlying architecture and parameters for the diffusion process. It determines the quality and characteristics of the generated image.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_base.BaseModel
- config
    - The configuration parameter is essential for specifying the configuration string corresponding to the selected model. It ensures that the correct settings are applied during the diffusion process, affecting the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - The weight parameter influences the intensity of the diffusion effect on the generated image. It is a key factor in controlling the trade-off between foreground detail and background transparency.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - The output of the LayeredDiffusionFG node is a modified model that has been patched with diffusion layers. This model is ready to generate images with the desired foreground and transparent background characteristics.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_base.BaseModel

# Usage tips
- Infra type: GPU

# Source code
```
class LayeredDiffusionFG:
    """Generate foreground with transparent background."""

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'config': ([c.config_string for c in s.MODELS],), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'apply_layered_diffusion'
    CATEGORY = 'layer_diffuse'
    MODELS = (LayeredDiffusionBase(model_file_name='layer_xl_transparent_attn.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_xl_transparent_attn.safetensors', sd_version=StableDiffusionVersion.SDXL, injection_method=LayerMethod.ATTN), LayeredDiffusionBase(model_file_name='layer_xl_transparent_conv.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_xl_transparent_conv.safetensors', sd_version=StableDiffusionVersion.SDXL, injection_method=LayerMethod.CONV), LayeredDiffusionBase(model_file_name='layer_sd15_transparent_attn.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_sd15_transparent_attn.safetensors', sd_version=StableDiffusionVersion.SD1x, injection_method=LayerMethod.ATTN, attn_sharing=True))

    def apply_layered_diffusion(self, model: ModelPatcher, config: str, weight: float):
        ld_model = [m for m in self.MODELS if m.config_string == config][0]
        assert get_model_sd_version(model) == ld_model.sd_version
        if ld_model.attn_sharing:
            return ld_model.apply_layered_diffusion_attn_sharing(model)
        else:
            return ld_model.apply_layered_diffusion(model, weight)
```