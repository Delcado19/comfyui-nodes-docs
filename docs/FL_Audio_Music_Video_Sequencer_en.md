# Documentation
- Class name: FL_Audio_Music_Video_Sequencer
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
- pattern_A
    - The pattern_A input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- pattern_B
    - The pattern_B input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- pattern_C
    - The pattern_C input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- pattern_D
    - The pattern_D input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- pattern_sequence
    - The pattern_sequence input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- repeat_pattern
    - The repeat_pattern input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- max_shots
    - The max_shots input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sequence_json
    - The sequence_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- total_shots
    - The total_shots output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
