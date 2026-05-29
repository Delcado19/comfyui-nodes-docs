
# Documentation
- Class name: SaltAudioFade
- Category: SALT/Audio/Process
- Output node: False

The SaltAudioFade node is used to apply a fade-in or fade-out effect to an audio clip, thereby enhancing its auditory transition. This process involves gradually increasing or decreasing the volume starting from a specified point in the audio clip over a specific duration.

# Input types
## Required
- audio
    - The raw audio data to which the fade effect will be applied. This parameter is essential for defining the audio clip that will undergo the fade processing.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- fade_type
    - Specifies the type of fade effect to apply: 'in' for fade-in (gradual volume increase), 'out' for fade-out (gradual volume decrease). This choice directly affects the auditory transition of the audio clip.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fade_duration
    - The duration of the fade effect, in seconds. This determines the time required for the volume transition to complete.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- fade_start
    - The start point of the fade effect within the audio clip, in seconds. This optional parameter allows precise control over when the fade begins.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- audio
    - The modified audio data with the fade-in or fade-out effect applied, enhancing the auditory experience of the audio clip.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioFade:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", ),
                "fade_type": (["in", "out"],),
                "fade_duration": ("FLOAT", {"min": 0.01}),
            },
            "optional": {
                "fade_start": ("FLOAT", {"default": 0, "min": 0}),
            },
        }

    RETURN_TYPES = ("AUDIO", )
    RETURN_NAMES = ("audio", )
    FUNCTION = "apply_fade"
    CATEGORY = "SALT/Audio/Process"

    def apply_fade(self, audio, fade_type, fade_duration, fade_start=0):
        audio_segment = AudioSegment.from_file(io.BytesIO(audio), format="wav")

        start_ms = int(fade_start * 1000)
        duration_ms = int(fade_duration * 1000)

        before_fade = audio_segment[:start_ms]
        during_and_after_fade = audio_segment[start_ms:]

        if fade_type == "in":
            faded_part = during_and_after_fade.fade_in(duration_ms)
        else:
            faded_part = during_and_after_fade.fade_out(duration_ms)

        output = before_fade + faded_part

        return(get_buffer(output), )

```
