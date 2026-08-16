# Documentation
- Class name: FL_Audio_Separation
- Category: 🏵️Fill Nodes/Audio
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
## Optional
- chunk_length
    - The chunk_length input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- chunk_overlap
    - The chunk_overlap input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- chunk_fade_shape
    - The chunk_fade_shape input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- bass
    - The bass output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- drums
    - The drums output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- other
    - The other output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- vocals
    - The vocals output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
