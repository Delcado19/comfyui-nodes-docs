# Documentation
- Class name: FL_GPT_Vision
- Category: 🏵️Fill Nodes/GPT
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- system_prompt
    - The system_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- request_prompt
    - The request_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- output_directory
    - The output_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- overwrite
    - The overwrite input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- max_tokens
    - The max_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- detail
    - The detail input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- input_directory
    - The input_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- message
    - The message output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- output_directory
    - The output_directory output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
