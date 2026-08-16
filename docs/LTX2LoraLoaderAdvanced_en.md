# Documentation
- Class name: LTX2LoraLoaderAdvanced
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Advanced LoRA loader with per-block strength control for LTX2 models

# Input types
## Required
- lora_name
    - The name of the LoRA.
    - Comfy dtype: COMBO
    - Python dtype: object
- model
    - The diffusion model the LoRA will be applied to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- strength_model
    - How strongly to modify the diffusion model. This value can be negative.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video
    - Strength for video attention layers.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video_to_audio
    - Strength for video to audio cross-attention layers.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio
    - Strength for audio attention layers.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_to_video
    - Strength for audio to video cross-attention layers.
    - Comfy dtype: FLOAT
    - Python dtype: float
- other
    - Strength for layers not caught by other layer filters.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- opt_lora_path
    - Absolute path of the LoRA.
    - Comfy dtype: STRING
    - Python dtype: str
- blocks
    - Selected DiT blocks configuration
    - Comfy dtype: SELECTEDDITBLOCKS
    - Python dtype: object

# Output types
- model
    - The modified diffusion model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- rank
    - Possible rank of the LoRA.
    - Comfy dtype: STRING
    - Python dtype: str
- loaded_keys_info
    - List of loaded keys and their alpha values.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
