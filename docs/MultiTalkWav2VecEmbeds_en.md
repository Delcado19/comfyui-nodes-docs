# Documentation
- Class name: MultiTalkWav2VecEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- wav2vec_model
    - The wav2vec_model input is used by this node during execution.
    - Comfy dtype: WAV2VECMODEL
    - Python dtype: object
- audio_1
    - The audio_1 input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- normalize_loudness
    - Normalize the audio loudness to -23 LUFS
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- num_frames
    - The total frame count to generate.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_scale
    - Strength of the audio conditioning
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_cfg_scale
    - When not 1.0, an extra model pass without audio conditioning is done: slower inference but more motion is allowed
    - Comfy dtype: FLOAT
    - Python dtype: float
- multi_audio_type
    - 'para' overlay speakers in parallel, 'add' concatenate sequentially
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
    - Per-speaker semantic mask(s) in pixel space. Supply one mask per speaker (plus optional background) to guide mouth assignment
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- add_noise_floor
    - Add a low-level noise floor to the audio to reduce silent gaps
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- smooth_transients
    - Apply a low-pass filter to the audio to smooth out transients
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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
