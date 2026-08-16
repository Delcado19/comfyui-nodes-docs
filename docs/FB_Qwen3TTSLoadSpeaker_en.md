# Documentation
- Class name: FB_Qwen3TTSLoadSpeaker
- Category: Qwen3-TTS
- Output node: False
- Repo Ref: https://github.com/flybirdxx/ComfyUI-Qwen-TTS

LoadSpeaker: Load saved WAV audio and its metadata. Fast-loads .qvp features if available.

# Input types
## Required
- filename
    - The filename input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- voice_clone_prompt
    - The voice_clone_prompt output is produced by this node.
    - Comfy dtype: VOICE_CLONE_PROMPT
    - Python dtype: object
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- ref_text
    - The ref_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/flybirdxx/ComfyUI-Qwen-TTS)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
