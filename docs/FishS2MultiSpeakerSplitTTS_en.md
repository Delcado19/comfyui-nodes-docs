# Documentation
- Class name: FishS2MultiSpeakerSplitTTS
- Category: FishAudioS2
- Output node: False
- Repo Ref: https://github.com/Saganaki22/ComfyUI-FishAudioS2

Multi-speaker TTS with per-speaker audio outputs. Outputs combined audio + separate track for each speaker. Useful for multi-speaker lip sync workflows.

# Input types
## Required
- model_path
    - S2-Pro checkpoint folder name.
    - Comfy dtype: COMBO
    - Python dtype: object
- text
    - Multi-speaker text. Use [speaker_1]:, [speaker_2]:, ...
    - Comfy dtype: STRING
    - Python dtype: str
- language
    - Language hint.
    - Comfy dtype: COMBO
    - Python dtype: object
- device
    - Compute device.
    - Comfy dtype: COMBO
    - Python dtype: object
- precision
    - Model precision.
    - Comfy dtype: COMBO
    - Python dtype: object
- attention
    - Attention kernel.
    - Comfy dtype: COMBO
    - Python dtype: object
- max_new_tokens
    - Max acoustic tokens. 0 = auto.
    - Comfy dtype: INT
    - Python dtype: int
- chunk_length
    - Chunk length for synthesis.
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - Sampling temperature.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - Top-p nucleus sampling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- repetition_penalty
    - Repetition penalty.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - Random seed.
    - Comfy dtype: INT
    - Python dtype: int
- keep_model_loaded
    - Keep model in VRAM between runs.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- offload_to_cpu
    - Offload to CPU after generation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- compile_model
    - torch.compile (not on Windows).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- pause_after_speaker
    - Seconds of silence after each turn.
    - Comfy dtype: FLOAT
    - Python dtype: float
- num_speakers
    - How many speakers (2-10).
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_1_audio
    - The speaker_1_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_2_audio
    - The speaker_2_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_3_audio
    - The speaker_3_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_4_audio
    - The speaker_4_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_5_audio
    - The speaker_5_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_6_audio
    - The speaker_6_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_7_audio
    - The speaker_7_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_8_audio
    - The speaker_8_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_9_audio
    - The speaker_9_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- speaker_10_audio
    - The speaker_10_audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Saganaki22/ComfyUI-FishAudioS2)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
