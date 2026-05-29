
# Documentation
- Class name: SaltAudioStereoSplitter
- Category: SALT/Audio/Process
- Output node: False

The SaltAudioStereoSplitter node's primary function is to split a stereo audio file into separate left and right channel mono audio files. This is essential for audio editing and processing tasks that require handling each stereo channel independently.

# Input types
## Required
- audio
    - The audio parameter receives a stereo audio file as input, which is the core of the splitting process. The node expects the input audio to be in dual-channel stereo format to successfully separate it into mono channels.
    - Comfy dtype: AUDIO
    - Python dtype: bytes

# Output types
- left_channel_mono
    - Output represents the left channel of the original stereo audio file, returned as a mono audio file after processing.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- right_channel_mono
    - Output represents the right channel of the original stereo audio file, returned as a mono audio file after processing.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioStereoSplitter:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", {}),
            },
        }

    RETURN_TYPES = ("AUDIO", "AUDIO")
    RETURN_NAMES = ("left_channel_mono", "right_channel_mono")
    FUNCTION = "split_stereo_to_mono"
    CATEGORY = "SALT/Audio/Process"

    def split_stereo_to_mono(self, audio):
        stereo_audio_segment = AudioSegment.from_file(io.BytesIO(audio), format="wav")

        if stereo_audio_segment.channels != 2:
            raise ValueError("Input audio must be two channel stereo.")

        left_channel_mono = stereo_audio_segment.split_to_mono()[0]
        right_channel_mono = stereo_audio_segment.split_to_mono()[1]

        left_audio = get_buffer(left_channel_mono)
        right_audio = get_buffer(right_channel_mono)

        return (left_audio, right_audio)

```
