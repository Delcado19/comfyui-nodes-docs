
# Documentation
- Class name: Inference_Core_LayeredDiffusionCondJointApply
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is specifically designed for applying conditioned and joint hierarchical diffusion processes to generate or manipulate images based on a set of conditions and joint configurations. It integrates multiple diffusion models to achieve complex image synthesis or transformation tasks, leveraging conditioned inputs and joint model dynamics.

# Input types
## Required
- model
    - Model patcher for applying hierarchical diffusion techniques, essential for integration with the diffusion process.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- image
    - Target image for the diffusion process, serving as the basis for transformation or synthesis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- config
    - Configuration string that determines the specific hierarchical diffusion model and settings to use.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- cond
    - Optional condition input for the diffusion process, allowing targeted image manipulation or generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]
- blended_cond
    - Optional blended condition input, enabling more complex image synthesis by combining conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]

# Output types
- model
    - Output model after applying the hierarchical diffusion process, equipped with modifications for image synthesis or transformation.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LayeredDiffusionCondJoint:
    """Generate fg/bg + blended given fg/bg.
    - FG => Blended + BG
    - BG => Blended + FG
    """

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model": ("MODEL",),
                "image": ("IMAGE",),
                "config": ([c.config_string for c in s.MODELS],),
            },
            "optional": {
                "cond": ("CONDITIONING",),
                "blended_cond": ("CONDITIONING",),
            },
        }

    RETURN_TYPES = ("MODEL",)
    FUNCTION = "apply_layered_diffusion"
    CATEGORY = "layer_diffuse"
    MODELS = (
        LayeredDiffusionBase(
            model_file_name="layer_sd15_fg2bg.safetensors",
            model_url="https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_sd15_fg2bg.safetensors",
            sd_version=StableDiffusionVersion.SD1x,
            attn_sharing=True,
            frames=2,
            cond_type=LayerType.FG,
        ),
        LayeredDiffusionBase(
            model_file_name="layer_sd15_bg2fg.safetensors",
            model_url="https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_sd15_bg2fg.safetensors",
            sd_version=StableDiffusionVersion.SD1x,
            attn_sharing=True,
            frames=2,
            cond_type=LayerType.BG,
        ),
    )

    def apply_layered_diffusion(
        self,
        model: ModelPatcher,
        image,
        config: str,
        cond: Optional[List[List[torch.TensorType]]] = None,
        blended_cond: Optional[List[List[torch.TensorType]]] = None,
    ):
        ld_model = [m for m in self.MODELS if m.config_string == config][0]
        assert get_model_sd_version(model) == ld_model.sd_version
        assert ld_model.attn_sharing
        work_model = ld_model.apply_layered_diffusion_attn_sharing(
            model, control_img=image.movedim(-1, 1)
        )[0]
        work_model.model_options.setdefault("transformer_options", {})
        work_model.model_options["transformer_options"]["cond_overwrite"] = [
            cond[0][0] if cond is not None else None
            for cond in (
                cond,
                blended_cond,
            )
        ]
        return (work_model,)

```
