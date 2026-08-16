# Documentation
- Class name: FL_Audio_Reactive_Envelope
- Category: 🏵️Fill Nodes/Audio
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- drum_times_json
    - The drum_times_json input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- kick_attack_frames
    - The kick_attack_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- kick_decay_frames
    - The kick_decay_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- kick_sustain_level
    - The kick_sustain_level input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- kick_release_frames
    - The kick_release_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- snare_attack_frames
    - The snare_attack_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- snare_decay_frames
    - The snare_decay_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- snare_sustain_level
    - The snare_sustain_level input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- snare_release_frames
    - The snare_release_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- hihat_attack_frames
    - The hihat_attack_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- hihat_decay_frames
    - The hihat_decay_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- hihat_sustain_level
    - The hihat_sustain_level input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hihat_release_frames
    - The hihat_release_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- kick_envelope_json
    - The kick_envelope_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- snare_envelope_json
    - The snare_envelope_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- hihat_envelope_json
    - The hihat_envelope_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
