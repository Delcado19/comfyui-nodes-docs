# Documentation
- Class name: FL_TimeLine
- Category: 🏵️Fill Nodes/WIP
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- timeline_data
    - The timeline_data input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- ipadapter_preset
    - The ipadapter_preset input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- video_width
    - The video_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- video_height
    - The video_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation_mode
    - The interpolation_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- number_animation_frames
    - The number_animation_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frames_per_second
    - The frames_per_second input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
