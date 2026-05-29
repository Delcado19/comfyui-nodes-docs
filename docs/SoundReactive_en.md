
# Documentation
- Class name: SoundReactive
- Category: KJNodes/audio
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SoundReactive node is designed to process audio input and adjust its behavior based on sound level. It dynamically responds to changes in sound intensity within a specified frequency range and offers customization options through parameters such as sound level, frequency range, and normalization. This node is especially suitable for creating real‑time audio‑reactive visualizations or effects.

# Input types
## Required
- sound_level
    - Specifies the current sound level to process. It scales the node’s output according to multiplier and normalization settings, directly affecting the dynamic response to audio input.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_range_hz
    - Defines the lower bound of the frequency range of interest. This parameter helps focus the node’s sensitivity on a specific part of the audio spectrum.
    - Comfy dtype: INT
    - Python dtype: int
- end_range_hz
    - Sets the upper bound of the frequency range to consider. It works with start_range_hz to fine‑tune the node’s responsiveness to the desired band.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - Applies a scaling factor to the sound level, allowing finer control over the node’s response to audio input.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothing_factor
    - Determines the amount of smoothing applied to the sound level, aiding in creating smoother transitions and effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- normalize
    - Enables or disables normalization of the sound level, which standardizes the input range for consistent processing across different audio sources.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- sound_level
    - The processed sound level, adjusted according to the node’s parameters. It reflects dynamic changes in audio intensity after scaling and optional normalization.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sound_level_int
    - Integer representation of the processed sound level, providing a simplified or quantized output for scenarios requiring discrete levels.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
