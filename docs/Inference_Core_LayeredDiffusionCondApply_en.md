
# Documentation
- Class name: Inference_Core_LayeredDiffusionCondApply
- Category: layer_diffuse
- Output node: False

This node is specifically designed to apply a conditional hierarchical diffusion process to input data, utilizing specific configurations and weights to modulate the diffusion effect. It integrates conditional inputs to guide the diffusion process, thereby enhancing the generation or transformation of data with meticulous control.

# Input types
## Required
- model
    - The model to which the hierarchical diffusion process will be applied, serving as the foundation for diffusion modification.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- cond
    - The conditional input for the foreground, used to guide the diffusion process to achieve specific visual effects or features.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.TensorType]]]
- uncond
    - The unconditional input for the background, providing a baseline for the diffusion process and influencing the overall output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.TensorType]]]
- latent
    - The latent representation used in the diffusion process, contributing to the generation or transformation of the output.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- config
    - The configuration string specifying the diffusion model and settings, crucial for determining the behavior of the diffusion process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight
    - The weight factor affecting the strength and characteristics of the diffusion effect applied to the model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The modified model after conditional hierarchical diffusion processing, reflecting the applied conditions and adjustments.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- conditioning
    - The conditional information used in the diffusion process, indicating how the conditional input influences the output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LayeredDiffusionCond:
    """Generate foreground + background given background / foreground.
    - FG => Blended
    - BG => Blended
    """

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model": ("MODEL",),
                "cond": ("CONDITIONING",),
                "uncond": ("CONDITIONING",),
                "latent": ("LATENT",),
                "config": ([c.config_string for c in s.MODELS],),
                "weight": (
                    "FLOAT",
                    {"default": 1.0, "min": -1, "max": 3, "step": 0.05},
                ),
            },
        }

    RETURN_TYPES = ("MODEL", "CONDITIONING", "CONDITIONING")
    FUNCTION = "apply_layered_diffusion"
    CATEGORY = "layer_diffuse"
    MODELS = (
        LayeredDiffusionBase(
            model_file_name="layer_xl_fg2ble.safetensors",
            model_url="https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_xl_fg2ble.safetensors",
            sd_version=StableDiffusionVersion.SDXL,
            cond_type=LayerType.FG,
        ),
        LayeredDiffusionBase(
            model_file_name="layer_xl_bg2ble.safetensors",
            model_url="https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_xl_bg2ble.safetensors",
            sd_version=StableDiffusionVersion.SDXL,
            cond_type=LayerType.BG,
        ),
    )

    def apply_layered_diffusion(
        self,
        model: ModelPatcher,
        cond,
        uncond,
        latent,
        config: str,
        weight: float,
    ):
        ld_model = [m for m in self.MODELS if m.config_string == config][0]
        assert get_model_sd_version(model) == ld_model.sd_version
        c_concat = model.model.latent_format.process_in(latent["samples"])
        return ld_model.apply_layered_diffusion(
            model, weight
        ) + ld_model.apply_c_concat(cond, uncond, c_concat)

```
