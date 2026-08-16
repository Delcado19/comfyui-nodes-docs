# Documentation
- Class name: FL_HF_Character
- Category: 🏵️Fill Nodes/Hugging Face
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- owner
    - The owner input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- repo_name
    - The repo_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- studio_name
    - The studio_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- project_name
    - The project_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- character_name
    - The character_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- create_new_repo
    - The create_new_repo input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- repo_type
    - The repo_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- lora_file
    - The lora_file input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- dataset_zip
    - The dataset_zip input is used by this node during execution.
    - Comfy dtype: ZIP
    - Python dtype: object
- caption_layout
    - The caption_layout input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- caption_PDF_layout
    - The caption_PDF_layout input is used by this node during execution.
    - Comfy dtype: PDF
    - Python dtype: object
- csv_file
    - The csv_file input is used by this node during execution.
    - Comfy dtype: CSV
    - Python dtype: object

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
