# Documentation
- Class name: CR_LoraLoader
- Category: Comfyroll/LoRA
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoraLoader is a node for managing and applying Lora modifications to models and clips. It loads Lora files and adjusts models and clips based on specified Lora name and strength parameters.

# Input types
## Required
- model
- Model parameter is critical for node operation because it represents the base model that Lora will modify.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- Clip parameter is essential because it defines the clip that Lora will process and possibly modify.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- switch
- Switch parameter determines whether to apply Lora modifications to the model and clip.
    - Comfy dtype: ['On', 'Off']
    - Python dtype: str
- lora_name
- Lora name parameter is important because it identifies the Lora file to be used for modification.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- strength_model
- Model strength parameter affects the intensity of Lora's effect on the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
- Clip strength parameter controls the intensity of Lora's effect on the clip.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
- Modified model processed with the selected Lora.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
- Modified clip processed with the selected Lora.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- show_help
- String providing a link to the node's help documentation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
