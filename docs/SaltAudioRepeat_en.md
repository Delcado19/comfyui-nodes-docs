
# Documentation
- Class name: SaltAudioRepeat
- Category: SALT/Audio/Process
- Output node: False

The purpose of the SaltAudioRepeat node is to repeat an audio clip a specified number of times. This feature is very useful for extending the duration of an audio clip without changing its original content.

# Input types
## Required
- audio
    - The audio parameter is the raw audio data to be processed. It serves as the base audio clip and will be repeated according to the repeat_times parameter.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- repeat_times
    - The repeat_times parameter specifies the number of times the audio clip should be repeated. This directly affects the length of the final audio output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- audio
    - The output is the audio data after being repeated the specified number of times, effectively extending its duration.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioRepeat:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", {}),
                "repeat_times": ("INT", {"min": 1, "default": 2}),
            },
        }

    RETURN_TYPES = ("AUDIO",)
    RETURN_NAMES = ("audio",)
    FUNCTION = "loop_audio"
    CATEGORY = "SALT/Audio/Process"

    def loop_audio(cls, audio, repeat_times):
        audio_segment = AudioSegment.from_file(io.BytesIO(audio), format="wav")
        looped_audio_segment = audio_segment * repeat_times
        return (get_buffer(looped_audio_segment),)

```
