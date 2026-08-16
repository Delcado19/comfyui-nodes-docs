# Documentation
- Class name: easy hunyuanDiTLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- ckpt_name
    - The ckpt_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- vae_name
    - The vae_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_name
    - The lora_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_model_strength
    - The lora_model_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_clip_strength
    - The lora_clip_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- empty_latent_width
    - The empty_latent_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent_height
    - The empty_latent_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- optional_lora_stack
    - The optional_lora_stack input is used by this node during execution.
    - Comfy dtype: LORA_STACK
    - Python dtype: object
- optional_controlnet_stack
    - The optional_controlnet_stack input is used by this node during execution.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- my_unique_id
    - The my_unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- pipe
    - The pipe output is produced by this node.
    - Comfy dtype: PIPE_LINE
    - Python dtype: object
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - The vae output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
