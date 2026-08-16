# Documentation
- Class name: FB_Qwen3TTSVoiceClonePrompt
- Category: Qwen3-TTS
- Output node: False
- Repo Ref: https://github.com/flybirdxx/ComfyUI-Qwen-TTS

VoiceClonePrompt: Extract and cache voice features for reuse in VoiceClone node.

# Input types
## Required
- ref_audio
    - Reference audio (ComfyUI Audio)
    - Comfy dtype: AUDIO
    - Python dtype: object
- ref_text
    - The ref_text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model_choice
    - The model_choice input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- precision
    - The precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- attention
    - Attention implementation
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- x_vector_only
    - If True, only speaker embedding is extracted (ref_text not needed)
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- unload_model_after_generate
    - Unload model from memory after generation
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- voice_clone_prompt
    - The voice_clone_prompt output is produced by this node.
    - Comfy dtype: VOICE_CLONE_PROMPT
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/flybirdxx/ComfyUI-Qwen-TTS)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
