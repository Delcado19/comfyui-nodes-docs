# Documentation
- Class name: FL_API_Base64_ImageLoader
- Category: 🏵️Fill Nodes/API Tools
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- base64_string
    - The base64_string input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- job_id
    - The job_id input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- user_id
    - The user_id input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- category
    - The category input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- resize_width
    - The resize_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- resize_height
    - The resize_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- maintain_aspect_ratio
    - The maintain_aspect_ratio input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- auto_clean_base64
    - The auto_clean_base64 input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- job_id
    - The job_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- user_id
    - The user_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- category
    - The category output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
