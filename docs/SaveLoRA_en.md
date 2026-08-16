# Documentation
- Class name: SaveLoRA
- Category: model/merging
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Save LoRA Weights is a ComfyUI node registered by `comfy_extras.nodes_train`. The live metadata did not provide a longer description.

# Input types
## Required
- lora
    - The LoRA model to save. Do not use the model with LoRA layers.
    - Comfy dtype: LORA_MODEL
    - Python dtype: object
- prefix
    - The prefix to use for the saved LoRA file.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- steps
    - Optional: The number of steps the LoRA has been trained for, used to name the saved file.
    - Comfy dtype: INT
    - Python dtype: int
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
