
# Documentation
- Class name: SaltAudioFramesyncSchedule
- Category: SALT/Audio/Scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SaltAudioFramesyncSchedule node aims to synchronize audio and visual elements by scheduling frames based on audio analysis. It facilitates the creation of audio-visual content by aligning keyframes with specific audio cues, achieving dynamic visual effects that harmonize with the audio track.

# Input types
## Required
- audio
    - Audio input used to generate frame sync scheduling. It is crucial for determining the timing and dynamics of visual effects relative to audio.
    - Comfy dtype: AUDIO
    - Python dtype: np.ndarray
- amp_control
    - Controls the amplitude sensitivity of audio analysis, affecting how audio levels influence frame scheduling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amp_offset
    - Offset value for amplitude, allowing fine-tuning of frame scheduling based on audio amplitude.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_rate
    - Frame rate for synchronizing visual elements with audio, determining the temporal precision of synchronization.
    - Comfy dtype: INT
    - Python dtype: int
- start_frame
    - Start frame for sync scheduling, enabling targeted synchronization within specific segments of audio-visual content.
    - Comfy dtype: INT
    - Python dtype: int
- end_frame
    - End frame for sync scheduling, defining the range of audio-visual synchronization.
    - Comfy dtype: INT
    - Python dtype: int
- curves_mode
    - Specifies the easing function for amplitude control, affecting the dynamic response of visuals to audio.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list

## Optional
- frequency_low
    - Lower limit of the frequency range considered in audio analysis, affecting the selection of audio content that influences frame scheduling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frequency_high
    - Upper limit of the frequency range considered in audio analysis, affecting the selection of audio content that influences frame scheduling.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- left_low_schedule
    - Comfy dtype: LIST
    - Scheduled frames for the low-frequency range of the left channel.
    - Python dtype: list
- left_mid_schedule
    - Comfy dtype: LIST
    - Scheduled frames for the mid-frequency range of the left channel.
    - Python dtype: list
- left_high_schedule
    - Comfy dtype: LIST
    - Scheduled frames for the high-frequency range of the left channel.
    - Python dtype: list
- right_low_schedule
    - Comfy dtype: LIST
    - Scheduled frames for the low-frequency range of the right channel.
    - Python dtype: list
- right_mid_schedule
    - Comfy dtype: LIST
    - Scheduled frames for the mid-frequency range of the right channel.
    - Python dtype: list
- right_high_schedule
    - Comfy dtype: LIST
    - Scheduled frames for the high-frequency range of the right channel.
    - Python dtype: list
- average_low
    - Comfy dtype: LIST
    - Average frame scheduling for the low-frequency range of both channels.
    - Python dtype: list
- average_mid
    - Comfy dtype: LIST
    - Average frame scheduling for the mid-frequency range of both channels.
    - Python dtype: list
- average_high
    - Comfy dtype: LIST
    - Average frame scheduling for the high-frequency range of both channels.
    - Python dtype: list
- average_schedule
    - Comfy dtype: LIST
    - Overall average frame scheduling for all frequency ranges and channels.
    - Python dtype: list
- frame_count
    - Comfy dtype: INT
    - Total number of frames scheduled.
    - Python dtype: int
- frame_rate
    - Comfy dtype: INT
    - Frame rate used for scheduling.
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
