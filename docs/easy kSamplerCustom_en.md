# Documentation
- Class name: easy kSamplerCustom
- Category: EasyUse/Sampler
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- pipe
    - The pipe input is used by this node during execution.
    - Comfy dtype: PIPE_LINE
    - Python dtype: object
- image_output
    - The image_output input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- link_id
    - The link_id input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- save_prefix
    - The save_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Hidden
- tile_size
    - The tile_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object
- my_unique_id
    - The my_unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- embeddingsList
    - The embeddingsList input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- pipe
    - The pipe output is produced by this node.
    - Comfy dtype: PIPE_LINE
    - Python dtype: object
- output
    - The output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised_output
    - The denoised_output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
