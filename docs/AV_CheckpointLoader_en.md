
# Documentation
- Class name: `AV_CheckpointLoader`
- Category: `Art Venture/Loaders`
- Output node: `False`

The AV_CheckpointLoader node is designed to load model checkpoints and can optionally override specific components, such as the checkpoint itself, the VAE, or a LoRA model. It extends the functionality of the standard checkpoint loader, allowing users to specify alternative sources for model components, thereby increasing flexibility in model configuration and experimentation.

# Input types
## Required
- **`ckpt_name`**
    - Specify the name of the checkpoint to load. This parameter can be overridden to load a different checkpoint, providing flexibility for model experiments.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- **`vae_name`**
    - Specify the name of the VAE model to load. This parameter can be overridden to load a different VAE model, allowing experimentation with different VAE configurations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- **`clip_skip`**
    - Indicate whether to skip loading the CLIP model. This parameter allows selective loading of model components as needed.
    - Comfy dtype: INT
    - Python dtype: bool
- **`lora_name`**
    - Specify the name of the LoRA model to load. This parameter can be overridden to load a different LoRA model, enabling customization of LoRA components.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- **`lora_model_strength`**
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- **`lora_clip_strength`**
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- **`positive`**
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- **`negative`**
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- **`token_normalization`**
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- **`weight_interpretation`**
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- **`empty_latent_width`**
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- **`empty_latent_height`**
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- **`batch_size`**
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
## Optional
- **`lora_stack`**
    - Unknown
    - Comfy dtype: LORA_STACK
    - Python dtype: unknown
- **`cnet_stack`**
    - Unknown
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: unknown
- **`ckpt_override`**
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- **`vae_override`**
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- **`lora_override`**
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown

# Output types
- **`MODEL`**
    - Comfy dtype: MODEL
    - The loaded model instance.
    - Python dtype: torch.nn.Module
- **`CONDITIONING+`**
    - Comfy dtype: CONDITIONING
    - Positive conditioning components loaded or configured during checkpoint loading.
    - Python dtype: Dict[str, torch.Tensor]
- **`CONDITIONING-`**
    - Comfy dtype: CONDITIONING
    - Negative conditioning components loaded or configured during checkpoint loading.
    - Python dtype: Dict[str, torch.Tensor]
- **`LATENT`**
    - Comfy dtype: LATENT
    - Latent representations or configurations loaded or derived from the checkpoint.
    - Python dtype: torch.Tensor
- **`VAE`**
    - Comfy dtype: VAE
    - The VAE model loaded as part of the checkpoint (if applicable).
    - Python dtype: torch.nn.Module
- **`CLIP`**
    - Comfy dtype: CLIP
    - The CLIP model loaded as part of checkpoint one (if applicable).
    - Python dtype: torch.nn.Module
- **`DEPENDENCIES`**
    - Comfy dtype: DEPENDENCIES
    - Any additional dependencies or components loaded alongside the main model components.
    - Python dtype: List[torch.nn.Module]


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [ImpactWildcardEncode](../../ComfyUI-Impact-Pack/Nodes/ImpactWildcardEncode.md)



## Source code
```python
    class AVCheckpointLoader(TSC_EfficientLoader):
        @classmethod
        def INPUT_TYPES(cls):
            inputs = TSC_EfficientLoader.INPUT_TYPES()
            inputs["optional"]["ckpt_override"] = ("STRING", {"default": "None"})
            inputs["optional"]["vae_override"] = ("STRING", {"default": "None"})
            inputs["optional"]["lora_override"] = ("STRING", {"default": "None"})
            return inputs

        CATEGORY = "Art Venture/Loaders"

        def efficientloader(
            self,
            ckpt_name,
            vae_name,
            clip_skip,
            lora_name,
            *args,
            ckpt_override="None",
            vae_override="None",
            lora_override="None",
            **kwargs
        ):
            if ckpt_override != "None":
                ckpt_name = ckpt_override
            if vae_override != "None":
                vae_name = vae_override
            if lora_override != "None":
                lora_name = lora_override

            return super().efficientloader(
                ckpt_name, vae_name, clip_skip, lora_name, *args, **kwargs
            )

```
