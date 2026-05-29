# Documentation
- Class name: LayeredDiffusionCondJoint
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionCondJoint node is designed to seamlessly integrate foreground and background elements into a composite image. It achieves this by applying layered diffusion technology, which allows the generation of composite images that preserve distinct characteristics of foreground and background components. This node is particularly suitable for applications where visual coherence and realistic blending of different image elements are critical.

# Input types
## Required
- model
    - Model parameters are crucial for the node's operation, as they define the base model used to generate the composite image. The choice of model directly impacts the quality and style of the generated image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - Image input is essential, as it provides the visual content that the node processes and blends with other elements. The quality and resolution of the input image significantly influence the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- config
    - Configuration string parameters are important, as they specify the settings and options that guide the diffusion process. They determine how the node will blend foreground and background elements.
    - Comfy dtype: str
    - Python dtype: str
- cond
    - Conditional inputs, when provided, allow for additional control over the diffusion process, enabling the node to generate images that conform to specific conditions or styles.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[List[torch.Tensor]]
- blended_cond
    - Blending conditional inputs are used to further refine the blending process, ensuring the final image meets the desired aesthetic and thematic requirements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[List[torch.Tensor]]

# Output types
- model
    - The output model is the result of the diffusion process, representing the composite image that combines foreground and background elements as specified by the input parameters.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class LayeredDiffusionCondJoint:
    """Generate fg/bg + blended given fg/bg.
    - FG => Blended + BG
    - BG => Blended + FG
    """

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'image': ('IMAGE',), 'config': ([c.config_string for c in s.MODELS],)}, 'optional': {'cond': ('CONDITIONING',), 'blended_cond': ('CONDITIONING',)}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'apply_layered_diffusion'
    CATEGORY = 'layer_diffuse'
    MODELS = (LayeredDiffusionBase(model_file_name='layer_sd15_fg2bg.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_sd15_fg2bg.safetensors', sd_version=StableDiffusionVersion.SD1x, attn_sharing=True, frames=2, cond_type=LayerType.FG), LayeredDiffusionBase(model_file_name='layer_sd15_bg2fg.safetensors', model_url='https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_sd15_bg2fg.safetensors', sd_version=StableDiffusionVersion.SD1x, attn_sharing=True, frames=2, cond_type=LayerType.BG))

    def apply_layered_diffusion(self, model: ModelPatcher, image, config: str, cond: Optional[List[List[torch.TensorType]]]=None, blended_cond: Optional[List[List[torch.TensorType]]]=None):
        ld_model = [m for m in self.MODELS if m.config_string == config][0]
        assert get_model_sd_version(model) == ld_model.sd_version
        assert ld_model.attn_sharing
        work_model = ld_model.apply_layered_diffusion_attn_sharing(model, control_img=image.movedim(-1, 1))[0]
        work_model.model_options.setdefault('transformer_options', {})
        work_model.model_options['transformer_options']['cond_overwrite'] = [cond[0][0] if cond is not None else None for cond in (cond, blended_cond)]
        return (work_model,)
```