# Documentation
- Class name: AudioEqualizer3Band
- Category: audio
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Audio Equalizer (3-Band) is a ComfyUI node registered by `comfy_extras.nodes_audio`. The live metadata did not provide a longer description.

# Input types
## Required
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- low_gain_dB
    - Gain for Low frequencies (Bass)
    - Comfy dtype: FLOAT
    - Python dtype: float
- low_freq
    - Cutoff frequency for Low shelf
    - Comfy dtype: INT
    - Python dtype: int
- mid_gain_dB
    - Gain for Mid frequencies
    - Comfy dtype: FLOAT
    - Python dtype: float
- mid_freq
    - Center frequency for Mids
    - Comfy dtype: INT
    - Python dtype: int
- mid_q
    - Q factor (bandwidth) for Mids
    - Comfy dtype: FLOAT
    - Python dtype: float
- high_gain_dB
    - Gain for High frequencies (Treble)
    - Comfy dtype: FLOAT
    - Python dtype: float
- high_freq
    - Cutoff frequency for High shelf
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- AUDIO
    - The AUDIO output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
