# Documentation
- Class name: WanDancerEncodeAudio
- Category: model/conditioning/wan/dancer
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

WanDancerEncodeAudio is a ComfyUI node registered by `comfy_extras.nodes_wandancer`. The live metadata did not provide a longer description.

# Input types
## Required
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- video_frames
    - The video_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- audio_inject_scale
    - The scale for the audio features when injected into the video model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- audio_encoder_output
    - The audio_encoder_output output is produced by this node.
    - Comfy dtype: AUDIO_ENCODER_OUTPUT
    - Python dtype: object
- fps_string
    - The calculated fps based on the audio length and the number of video frames. Used in the prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
