# Documentation
- Class name: LTXICLoRALoaderModelOnly
- Category: Lightricks/IC-LoRA
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Loads a LoRA model and extracts the latent_downscale_factor from the safetensors metadata.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- lora_name
    - The lora_name input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- strength_model
    - The strength_model input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latent_downscale_factor
    - The latent_downscale_factor output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
