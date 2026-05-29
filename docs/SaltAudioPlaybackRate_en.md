
# Documentation
- Class name: SaltAudioPlaybackRate
- Category: SALT/Audio/Process
- Output node: False

SaltAudioPlaybackRate node is designed to adjust the playback speed of audio files, allowing users to speed up or slow down audio playback without changing the audio pitch. This functionality is especially useful for scenarios where audio duration needs to be compressed or extended while maintaining the original pitch characteristics.

# Input types
## Required
- audio
    - This is the audio input for speed adjustment. This parameter is crucial for determining the source audio file to be processed. It is the foundation of the entire processing, directly affecting the quality and characteristics of the final output.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- speed_factor
    - This is a factor for adjusting audio speed. This parameter directly affects the playback rate of the audio, allowing audio to be accelerated or decelerated. For example, a factor value of 2.0 doubles the playback speed, while 0.5 halves it.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- audio
    - Output is the audio adjusted according to the specified speed factor. This is the processed audio file that can be played at the new speed. The output audio retains the pitch characteristics of the original audio, only the playback speed has changed.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioPlaybackRate:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", {}),
                "speed_factor": ("FLOAT", {"min": 0.5, "max": 12.0, "default": 1.0, "step": 0.01}),
            },
        }

    RETURN_TYPES = ("AUDIO",)
    RETURN_NAMES = ("audio",)
    FUNCTION = "adjust_speed"
    CATEGORY = "SALT/Audio/Process"

    def adjust_speed(cls, audio, speed_factor):
        audio_segment = AudioSegment.from_file(io.BytesIO(audio), format="wav")
        playback_rate = int(audio_segment.frame_rate * speed_factor)
        adjusted_audio_segment = audio_segment.set_frame_rate(playback_rate)
        return (get_buffer(adjusted_audio_segment),)

```
