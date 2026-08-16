# Documentation
- Class name: FB_Qwen3TTSDialogueInference
- Category: Qwen3-TTS
- Output node: False
- Repo Ref: https://github.com/flybirdxx/ComfyUI-Qwen-TTS

DialogueInference: Execute a script with multiple roles and generate continuous speech.

# Input types
## Required
- script
    - The script input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- role_bank
    - The role_bank input is used by this node during execution.
    - Comfy dtype: QWEN3_ROLE_BANK
    - Python dtype: object
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
- pause_linebreak
    - Silence duration between lines
    - Comfy dtype: FLOAT
    - Python dtype: float
- period_pause
    - Silence duration after periods (.)
    - Comfy dtype: FLOAT
    - Python dtype: float
- comma_pause
    - Silence duration after commas (,)
    - Comfy dtype: FLOAT
    - Python dtype: float
- question_pause
    - Silence duration after question marks (?)
    - Comfy dtype: FLOAT
    - Python dtype: float
- hyphen_pause
    - Silence duration after hyphens (-)
    - Comfy dtype: FLOAT
    - Python dtype: float
- merge_outputs
    - Merge all dialogue segments into a single long audio
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- batch_size
    - Number of lines to process in parallel. Larger = faster but more VRAM.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_new_tokens_per_line
    - The max_new_tokens_per_line input is used by this node during execution.
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
