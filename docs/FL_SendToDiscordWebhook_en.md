# Documentation
- Class name: FL_SendToDiscordWebhook
- Category: 🏵️Fill Nodes/Discord
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- webhook_url
    - The webhook_url input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_rate
    - The frame_rate input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- save_locally
    - The save_locally input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bot_username
    - The bot_username input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- message
    - The message input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- user_id_to_tag
    - The user_id_to_tag input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
