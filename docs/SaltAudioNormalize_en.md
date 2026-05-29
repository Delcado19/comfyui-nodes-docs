
# Documentation
- Class name: SaltAudioNormalize
- Category: SALT/Audio/Process
- Output node: False

SaltAudioNormalize node is used to normalize the volume of a given audio file to a standard level to ensure volume consistency across different tracks.

# Input types
## Required
- audio
    - The 'audio' parameter is the raw audio data that needs to be normalized. It is crucial for determining the current volume level of the audio and adjusting it to the target normalized level.
    - Comfy dtype: AUDIO
    - Python dtype: bytes

# Output types
- audio
    - The normalized audio data has its volume level adjusted to ensure consistency across different tracks.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioNormalize:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", {}),
            },
        }

    RETURN_TYPES = ("AUDIO",)
    RETURN_NAMES = ("audio",)
    FUNCTION = "normalize_audio"
    CATEGORY = "SALT/Audio/Process"

    def normalize_audio(self, audio):
        audio_segment = AudioSegment.from_file(io.BytesIO(audio), format="wav")
        normalized_segment = AudioEffects.normalize(audio_segment)
        return (get_buffer(normalized_segment), )

```
