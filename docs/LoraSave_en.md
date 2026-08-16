# Documentation
- Class name: LoraSave
- Category: experimental
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Extract and Save Lora is a ComfyUI node registered by `comfy_extras.nodes_lora_extract`. The live metadata did not provide a longer description.

# Input types
## Required
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- rank
    - The rank input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- lora_type
    - The lora_type input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- bias_diff
    - The bias_diff input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- model_diff
    - The ModelSubtract output to be converted to a lora.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- text_encoder_diff
    - The CLIPSubtract output to be converted to a lora.
    - Comfy dtype: CLIP
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
