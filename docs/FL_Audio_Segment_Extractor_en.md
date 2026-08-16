# Documentation
- Class name: FL_Audio_Segment_Extractor
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
- beat_positions
    - The beat_positions input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- start_beat
    - The start_beat input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- beat_count
    - The beat_count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- start_frame
    - The start_frame input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- audio_segment
    - The audio_segment output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- frame_count
    - The frame_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- end_frame
    - The end_frame output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
