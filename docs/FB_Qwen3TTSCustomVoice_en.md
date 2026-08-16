# Documentation
- Class name: FB_Qwen3TTSCustomVoice
- Category: Qwen3-TTS
- Output node: False
- Repo Ref: https://github.com/flybirdxx/ComfyUI-Qwen-TTS

CustomVoice: Generate speech using preset speakers.

# Input types
## Required
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- speaker
    - The speaker input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
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
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- instruct
    - The instruct input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
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
- custom_speaker_name
    - The custom_speaker_name input is used by this node during execution.
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
