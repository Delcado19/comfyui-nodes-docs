# Documentation
- Class name: FL_GPT_Image1_ADV
- Category: 🏵️Fill Nodes/GPT
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Generates images using OpenAI's "gpt-image-1" model based on multiple prompts.
Each prompt (and optional image/mask for edits) triggers an asynchronous API call.
Uses global settings for size, quality, etc., for all generations/edits.

# Input types
## Required
- inputcount
    - The inputcount input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- size_setting
    - The size_setting input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quality_setting
    - The quality_setting input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- background_setting
    - The background_setting input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_format_setting
    - The output_format_setting input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prompt_1
    - The prompt_1 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed_setting
    - The seed_setting input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- API_responses
    - The API_responses output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
