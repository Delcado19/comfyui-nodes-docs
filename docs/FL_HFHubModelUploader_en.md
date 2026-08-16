# Documentation
- Class name: FL_HFHubModelUploader
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
- readme_content
    - The readme_content input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- create_new_repo
    - The create_new_repo input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_folder_path
    - The image_folder_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- repo_type
    - The repo_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model_card_header
    - The model_card_header input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- zip_file
    - The zip_file input is used by this node during execution.
    - Comfy dtype: ZIP
    - Python dtype: object
- zip_filename
    - The zip_filename input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- zip_folder_path
    - The zip_folder_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model_file_path
    - The model_file_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model_repo_path
    - The model_repo_path input is used by this node during execution.
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
