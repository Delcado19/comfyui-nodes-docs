
# Documentation
- Class name: SaltAudioSimpleReverb
- Category: SALT/Audio/Effect
- Output node: False

SaltAudioSimpleReverb node adds reverb effect to audio input, simulating sound reflection characteristics of physical space. It allows adjusting reverb level and decay to customize the effect.

# Input types
## Required
- audio
    - Audio input to which the reverb effect will be applied. It serves as the raw material for reverb simulation.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- reverb_level
    - Determines the intensity of the reverb effect applied to the audio, influencing the perceived size and reflectivity of the virtual space.
    - Comfy dtype: FLOAT
    - Python dtype: float
- decay
    - Controls the decay rate of the reverb effect, simulating the absorption characteristics of the simulated space.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- audio
    - Audio output with the reverb effect applied, simulating the acoustic characteristics of a space with reverb properties.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioSimpleReverb:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", {}),
                "reverb_level": ("FLOAT", {"default": 0.5, "min": 0.1, "max": 1.0, "step": 0.01}),
                "decay": ("FLOAT", {"default": 0.5, "min": 0.1, "max": 1.0, "step": 0.01}),
            },
        }

    RETURN_TYPES = ("AUDIO",)
    RETURN_NAMES = ("audio",)
    FUNCTION = "apply_reverb"
    CATEGORY = "SALT/Audio/Effect"

    def apply_reverb(self, audio, reverb_level, decay):
        original = AudioSegment.from_file(io.BytesIO(audio), format="wav")
        reverb_duration = int(len(original) * reverb_level)
        output = original

        for overlay_delay in range(50, reverb_duration, 50):
            decayed_overlay = original - (decay * overlay_delay)
            output = output.overlay(decayed_overlay, position=overlay_delay)

        return (get_buffer(output),)

```
