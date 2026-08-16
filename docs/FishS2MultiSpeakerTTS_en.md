# Documentation
- Class name: FishS2MultiSpeakerTTS
- Category: FishAudioS2
- Output node: False
- Repo Ref: https://github.com/Saganaki22/ComfyUI-FishAudioS2

Fish Audio S2-Pro Multi-Speaker TTS. Synthesises a conversation between multiple cloned voices in one generation pass. Connect reference audio clips and use <|speaker:N|> tokens in text.

# Input types
## Required
- model_path
    - S2-Pro checkpoint folder name. Place model folders in ComfyUI/models/fishaudioS2/
    - Comfy dtype: COMBO
    - Python dtype: object
- text
    - Multi-speaker text. Use [speaker_1]:, [speaker_2]:, ... to assign lines to each connected speaker. Supports inline tags: [laugh], [whisper], etc.
    - Comfy dtype: STRING
    - Python dtype: str
- language
    - Language hint. 'auto' lets the model detect it.
    - Comfy dtype: COMBO
    - Python dtype: object
- device
    - Compute device. 'auto' picks CUDA > MPS > CPU.
    - Comfy dtype: COMBO
    - Python dtype: object
- precision
    - Model precision. 'auto' picks bfloat16 for full model, float16 for quantized model. bfloat16 recommended for CUDA.
    - Comfy dtype: COMBO
    - Python dtype: object
- attention
    - Attention kernel. 'auto' uses model default. 'sdpa' forces PyTorch SDPA. 'flash_attention' forces FlashAttention. 'sage_attention' requires sageattention package. BNB models (s2-pro-bnb-int8/nf4) always use sdpa regardless of this setting. Changing this reloads the model.
    - Comfy dtype: COMBO
    - Python dtype: object
- max_new_tokens
    - Max acoustic tokens. 0 = auto.
    - Comfy dtype: INT
    - Python dtype: int
- chunk_length
    - Chunk length for iterative synthesis (100-400).
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - Sampling temperature.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - Top-p nucleus sampling cutoff.
    - Comfy dtype: FLOAT
    - Python dtype: float
- repetition_penalty
    - Repetition penalty. Higher = less repetition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - Random seed.
    - Comfy dtype: INT
    - Python dtype: int
- keep_model_loaded
    - ON = model stays in VRAM between runs. OFF = unloaded after each run.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- offload_to_cpu
    - After generation, move the model to CPU instead of keeping it in VRAM. Frees VRAM while avoiding the full reload penalty. Ignored if keep_model_loaded is OFF.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- compile_model
    - torch.compile for ~10x speedup after warmup. Not supported on Windows.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- pause_after_speaker
    - Seconds of silence to add after each speaker turn.
    - Comfy dtype: FLOAT
    - Python dtype: float
- num_speakers
    - How many speakers (2-10). Changing this shows/hides speaker audio inputs.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Saganaki22/ComfyUI-FishAudioS2)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
