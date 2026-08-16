# Documentation
- Class name: LongCatAvatarWhisperEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

LongCat Avatar Whisper Embeds (v1.5) is a ComfyUI node registered by `custom_nodes.ComfyUI-WanVideoWrapper`. The live metadata did not provide a longer description.

# Input types
## Required
- whisper_model
    - The whisper_model input is used by this node during execution.
    - Comfy dtype: WHISPERMODEL
    - Python dtype: object
- audio_1
    - The audio_1 input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- normalize_loudness
    - Normalize audio loudness to -23 LUFS before encoding (matches the v1.5 reference pipeline)
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- num_frames
    - Total frame count to generate; bounds how much audio is consumed
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - Target video fps. LongCat-Video-Avatar-1.5 is trained at 25 fps.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_scale
    - Strength of the audio conditioning
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_cfg_scale
    - When not 1.0, an extra model pass without audio conditioning is done
    - Comfy dtype: FLOAT
    - Python dtype: float
- multi_audio_type
    - 'para' overlays speakers in parallel (equal length); 'add' concatenates speakers sequentially with silence padding
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- audio_2
    - The audio_2 input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- audio_3
    - The audio_3 input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- audio_4
    - The audio_4 input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- ref_target_masks
    - Per-speaker semantic mask(s) in pixel space, one per speaker
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- multitalk_embeds
    - The multitalk_embeds output is produced by this node.
    - Comfy dtype: MULTITALK_EMBEDS
    - Python dtype: object
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- num_frames
    - The num_frames output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
