# Documentation
- Class name: GetICLoRAParameters
- Category: model/conditioning/ltxv
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Extracts IC-LoRA parameters from the safetensors metadata of a LoRA-loaded model and outputs them for LTXVAddGuide (eg. reference_downscale_factor).

# Input types
## Required
- iclora_model
    - Direct output from a LoRA Loader for the specific IC-LoRA from which to extract the metadata.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Output types
- iclora_parameters
    - IC-LoRA parameters extracted from the LoRA metadata (eg. reference_downscale_factor). Connect to LTXVAddGuide if the LoRA requires special handling of the guides.
    - Comfy dtype: IC_LORA_PARAMETERS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
