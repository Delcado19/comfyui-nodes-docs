# Documentation
- Class name: FB_Qwen3TTSVoiceClone
- Category: Qwen3-TTS
- Output node: False
- Repo Ref: https://github.com/flybirdxx/ComfyUI-Qwen-TTS

VoiceClone: Clone voice from reference audio.

# Input types
## Required
- target_text
    - The target_text input is used by this node during execution.
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
- language
    - The language input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- ref_audio
    - Reference audio (ComfyUI Audio)
    - Comfy dtype: AUDIO
    - Python dtype: object
- ref_text
    - The ref_text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- voice_clone_prompt
    - Reusable voice clone prompt from VoiceClonePromptNode
    - Comfy dtype: VOICE_CLONE_PROMPT
    - Python dtype: object
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_new_tokens
    - The max_new_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- top_p
    - Nucleus sampling probability
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_k
    - Top-k sampling parameter
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - Sampling temperature
    - Comfy dtype: FLOAT
    - Python dtype: float
- repetition_penalty
    - Penalty for repetition
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_vector_only
    - The x_vector_only input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- attention
    - Attention implementation
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- unload_model_after_generate
    - Unload model from memory after generation
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- custom_model_path
    - The custom_model_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/flybirdxx/ComfyUI-Qwen-TTS)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
