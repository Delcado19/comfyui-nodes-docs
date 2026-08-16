# Documentation
- Class name: FL_HFDatasetDownloader
- Category: 🏵️Fill Nodes/Hugging Face
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- repo_id
    - The repo_id input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- repo_type
    - The repo_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- local_dir
    - The local_dir input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_workers
    - The max_workers input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- download_trigger
    - The download_trigger input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- download_path
    - The download_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
