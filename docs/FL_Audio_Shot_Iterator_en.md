# Documentation
- Class name: FL_Audio_Shot_Iterator
- Category: 🏵️Fill Nodes/Audio
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- sequence_json
    - The sequence_json input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- shot_index
    - The shot_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frame_count
    - The frame_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- start_frame
    - The start_frame output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- end_frame
    - The end_frame output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- start_beat
    - The start_beat output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- beat_count
    - The beat_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- start_time
    - The start_time output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- duration
    - The duration output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- is_last_shot
    - The is_last_shot output is produced by this node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- total_frames
    - The total_frames output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
