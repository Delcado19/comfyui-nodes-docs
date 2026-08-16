# Documentation
- Class name: FL_ModelInspector
- Category: 🏵️Fill Nodes/Utility
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- ckpt_path
    - The ckpt_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- include_state_dict
    - The include_state_dict input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- include_layer_details
    - The include_layer_details input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_all_keys
    - The show_all_keys input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model_info
    - The model_info output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
