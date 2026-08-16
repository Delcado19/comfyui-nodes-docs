# Documentation
- Class name: FantasyTalkingWav2VecEmbeds
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
- fantasytalking_model
    - The fantasytalking_model input is used by this node during execution.
    - Comfy dtype: FANTASYTALKINGMODEL
    - Python dtype: object
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- num_frames
    - The num_frames input is used by this node during execution.
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

# Output types
- fantasytalking_embeds
    - The fantasytalking_embeds output is produced by this node.
    - Comfy dtype: FANTASYTALKING_EMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
