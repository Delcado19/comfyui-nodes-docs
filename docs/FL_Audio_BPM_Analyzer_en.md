# Documentation
- Class name: FL_Audio_BPM_Analyzer
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
- bpm_method
    - The bpm_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- half_time
    - The half_time input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- beat_offset_ms
    - The beat_offset_ms input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- bpm
    - The bpm output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- beat_positions
    - The beat_positions output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- visualization
    - The visualization output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
