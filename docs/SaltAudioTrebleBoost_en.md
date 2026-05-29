
# Documentation
- Class name: SaltAudioTrebleBoost
- Category: SALT/Audio/Effect
- Output node: False

The SaltAudioTrebleBoost node is used to enhance the high-frequency part of the audio input, allowing users to customize the degree of boosting higher frequency ranges. This node modifies audio content by applying a high-pass filter and gain adjustment, and can be customized based on user-specified cutoff frequency and boost level.

# Input types
## Required
- audio
    - The audio parameter is the original audio data to be processed. It is the main input for high-frequency enhancement processing and determines the audio content that will undergo frequency-specific amplification.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- cutoff_freq
    - The cutoff_freq parameter specifies the frequency threshold above which high frequencies will be boosted. It plays a key role in defining the frequency range affected by the high-frequency boost, thereby affecting the overall sound characteristics.
    - Comfy dtype: INT
    - Python dtype: int
- boost_dB
    - The boost_dB parameter controls the gain level applied to high frequencies above the cutoff point. It directly affects the intensity of the high-frequency enhancement, allowing a range of audio modifications from subtle to significant.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- audio
    - The audio after high-frequency enhancement processing reflects the effects of the applied high-pass filter and gain adjustment.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioTrebleBoost:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", {}),
                "cutoff_freq": ("INT", {"default": 150, "min": 20, "max": 300, "step": 1}),
                "boost_dB": ("FLOAT", {"default": 5.0, "min": 0.0, "max": 24.0, "step": 0.1}),
            },
        }

    RETURN_TYPES = ("AUDIO",)
    RETURN_NAMES = ("audio",)
    FUNCTION = "treble_bass"
    CATEGORY = "SALT/Audio/Effect"

    def treble_bass(self, audio, cutoff_freq, boost_dB):
        original = AudioSegment.from_file(io.BytesIO(audio), format="wav")
        
        high_pass_gain = original.high_pass_filter(cutoff_freq).apply_gain(boost_dB)
        if len(high_pass_gain) > len(original):
            high_pass_gain = high_pass_gain[:len(original)]

        boosted = original.overlay(high_pass_gain, position=0)
        
        return (get_buffer(boosted), )

```
