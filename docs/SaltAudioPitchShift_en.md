
# Documentation
- Class name: SaltAudioPitchShift
- Category: SALT/Audio/Effect
- Output node: False

This node applies pitch shifting to the input audio by the specified number of semitones, enabling audio manipulation to adjust the perceived pitch of the sound without changing playback speed.

# Input types
## Required
- audio
    - The audio input to be pitch shifted. It is the main content for pitch shifting processing.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- semitones
    - The number of semitones to shift the pitch of the input audio. Positive values raise pitch, negative values lower pitch.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- audio
    - The output audio after pitch shifting, with pitch adjusted by the specified number of semitones.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAudioPitchShift:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", {}),
                "semitones": ("FLOAT", {"default": 0.0, "min": -12.0, "max": 12.0}),
            },
        }

    RETURN_TYPES = ("AUDIO",)
    RETURN_NAMES = ("audio",)
    FUNCTION = "shift_pitch"
    CATEGORY = "SALT/Audio/Effect"

    def shift_pitch(cls, audio, semitones):
        TEMP = tempfile.gettempdir()
        os.makedirs(TEMP, exist_ok=True)

        temp_input_path = tempfile.mktemp(suffix='.wav', dir=TEMP)
        temp_output_path = tempfile.mktemp(suffix='.wav', dir=TEMP)

        with open(temp_input_path, 'wb') as f:
            f.write(audio)

        command = [
            'ffmpeg', '-y', '-i', temp_input_path,
            '-af', f'asetrate=44100*2^({semitones}/12),aresample=44100',
            temp_output_path
        ]

        try:
            subprocess.run(command, check=True)
        except subprocess.CalledProcessError as e:
            print(f"Error during pitch shifting: {e}")
            os.remove(temp_input_path)
            if os.path.exists(temp_output_path):
                os.remove(temp_output_path)
            raise

        with open(temp_output_path, 'rb') as f:
            pitch_shifted_audio = f.read()

        os.remove(temp_input_path)
        os.remove(temp_output_path)

        return (pitch_shifted_audio,)

```
