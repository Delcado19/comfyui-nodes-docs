# Documentation
- Class name: FL_GPT_Text
- Category: 🏵️Fill Nodes/GPT
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- system_prompt
    - The system_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- user_prompt
    - The user_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_tokens
    - The max_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - The top_p input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frequency_penalty
    - The frequency_penalty input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- presence_penalty
    - The presence_penalty input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- save_to_file
    - The save_to_file input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- output_directory
    - The output_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- filename
    - The filename input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- response
    - The response output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
