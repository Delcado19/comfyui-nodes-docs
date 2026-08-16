# Documentation
- Class name: FishS2TTS
- Category: FishAudioS2
- Output node: False
- Repo Ref: https://github.com/Saganaki22/ComfyUI-FishAudioS2

Fish Audio S2-Pro TTS. Synthesises speech from text with inline emotion/prosody tags. 80+ languages.

# Input types
## Required
- model_path
    - S2-Pro checkpoint folder name. Place model folders in ComfyUI/models/fishaudioS2/
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
    - Text to synthesise. Supports inline emotion tags like [laugh], [whisper], [pause], [excited], [sad], [angry], [volume up], [pitch up], etc.
    - Comfy dtype: STRING
    - Python dtype: str
- language
    - Language hint. 'auto' lets the model detect it.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- device
    - Compute device. 'auto' picks CUDA > MPS > CPU.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- precision
    - Model precision. 'auto' picks bfloat16 for full model, float16 for quantized model. bfloat16 recommended for CUDA.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- attention
    - Attention kernel. 'auto' uses the model default (sdpa/flash). 'sdpa' forces PyTorch SDPA. 'flash_attention' forces FlashAttention via SDPBackend. 'sage_attention' monkey-patches with SageAttention (requires sageattention). BNB models (s2-pro-bnb-int8/nf4) always use sdpa regardless of this setting. Changing this unloads and reloads the model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_new_tokens
    - Maximum acoustic tokens to generate. 0 = auto (no limit, model decides).
    - Comfy dtype: INT
    - Python dtype: int
- chunk_length
    - Chunk length for iterative synthesis (100-400). Lower = faster first audio, slightly lower quality. Higher = better prosody across long sentences.
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - Sampling temperature. Lower = more deterministic output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - Top-p nucleus sampling cutoff.
    - Comfy dtype: FLOAT
    - Python dtype: float
- repetition_penalty
    - Penalises repeated tokens. Higher = less repetition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - Random seed.
    - Comfy dtype: INT
    - Python dtype: int
- keep_model_loaded
    - ON = model stays in VRAM between runs (faster). OFF = model unloaded after each run (frees VRAM).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- offload_to_cpu
    - After generation, move the model to CPU instead of keeping it in VRAM. Frees VRAM while avoiding the full reload penalty. Slower than keep_model_loaded but faster than a cold load. Ignored if keep_model_loaded is OFF.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- compile_model
    - Enable torch.compile (~10x speedup after warmup). First run is slow while compiling. Not supported on Windows. For best results pin max_new_tokens to a fixed value — each new larger length triggers a recompile.
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
[View source repository](https://github.com/Saganaki22/ComfyUI-FishAudioS2)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
