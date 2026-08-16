# Documentation
- Class name: FL_CaptionSaver_V2
- Category: 🏵️Fill Nodes/Captioning
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- input_type
    - The input_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- caption_input_type
    - The caption_input_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- folder_name
    - The folder_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- overwrite
    - The overwrite input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- downsize_factor
    - The downsize_factor input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_image
    - The mask_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- input_directory
    - The input_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- single_caption
    - The single_caption input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- multiple_captions
    - The multiple_captions input is used by this node during execution.
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
