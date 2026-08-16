# Documentation
- Class name: FL_API_ImageSaver
- Category: 🏵️Fill Nodes/API Tools
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
- base_output_dir
    - The base_output_dir input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image_format
    - The image_format input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image_quality
    - The image_quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- saved_path
    - The saved_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
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
