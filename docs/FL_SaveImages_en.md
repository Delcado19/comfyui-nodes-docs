# Documentation
- Class name: FL_SaveImages
- Category: 🏵️Fill Nodes/Image
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- base_directory
    - The base_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- folder_structure
    - The folder_structure input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- file_name_template
    - The file_name_template input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
    - The start_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- auto_increment
    - The auto_increment input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- metadata
    - The metadata input is used by this node during execution.
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
