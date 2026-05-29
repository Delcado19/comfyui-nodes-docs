
# Documentation
- Class name: SaltAdvancedAudioCompressor
- Category: SALT/Audio/Process
- Output node: False

The SaltAdvancedAudioCompressor node aims to provide advanced audio compression functionality, allowing fine control over the compression process through parameters such as threshold, ratio, attack time, release time, and makeup gain. It utilizes ffmpeg to apply compression, providing a method for adjusting the dynamic range of audio content in various application scenarios.

# Input types
## Required
- audio
    - The original audio data to be compressed. This input is crucial as it represents the audio content to be compressed, directly affecting the quality and characteristics of the output.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- threshold_dB
    - The threshold level of the compressor, in decibels (dB). Signals above this level will be compressed. This is a critical parameter for determining the volume level at which compression begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ratio
    - The compression ratio, indicating the degree to which the signal is reduced after exceeding the threshold. This parameter affects the intensity of the compression effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attack_ms
    - The attack time, in milliseconds (ms), defines the speed at which the compressor responds to audio exceeding the threshold. A shorter attack time causes transient sounds to be compressed more quickly.
    - Comfy dtype: INT
    - Python dtype: float
- release_ms
    - The release time, in milliseconds (ms), specifies the speed at which the compressor stops affecting the audio after it falls below the threshold. This parameter affects the smoothness of dynamic changes in the audio.
    - Comfy dtype: INT
    - Python dtype: float
- makeup_gain
    - The makeup gain, in decibels (dB), applied after compression to restore or increase the overall level of the audio signal. This allows compensation for the volume lost during compression.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- audio
    - The compressed audio data after processing with the specified compression settings. This output reflects the adjustments made to the dynamic range of the audio, suitable for further processing or playback.
    - Comfy dtype: AUDIO
    - Python dtype: bytes


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltAdvancedAudioCompressor:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO", {}),
                "threshold_dB": ("FLOAT", {"default": -20.0, "min": -60.0, "max": 0.0}),
                "ratio": ("FLOAT", {"default": 4.0, "min": 1.0, "max": 20.0}),
                "attack_ms": ("INT", {"default": 5, "min": 1, "max": 100}),
                "release_ms": ("INT", {"default": 50, "min": 10, "max": 1000}),
                "makeup_gain": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 24.0}),
            },
        }

    RETURN_TYPES = ("AUDIO",)
    RETURN_NAMES = ("audio",)
    FUNCTION = "compress_detailed_audio"
    CATEGORY = "SALT/Audio/Process"

    def compress_detailed_audio(self, audio, threshold_dB, ratio, attack_ms, release_ms, makeup_gain):
        TEMP = folder_paths.get_temp_directory()
        os.makedirs(TEMP, exist_ok=True)

        with tempfile.NamedTemporaryFile(delete=False, suffix='.wav', dir=TEMP) as temp_input:
            temp_input.write(audio)
            temp_input_path = temp_input.name

        temp_output_path = tempfile.mktemp(suffix='.wav', dir=TEMP)
        attack_sec = max(attack_ms / 1000.0, 0.01)
        release_sec = max(release_ms / 1000.0, 0.01)
        command = [
            'ffmpeg', '-y', '-i', temp_input_path,
            '-af', f'acompressor=threshold={threshold_dB}dB:ratio={ratio}:attack={attack_sec}:release={release_sec}:makeup={makeup_gain}dB',
            temp_output_path
        ]

        subprocess.run(command, check=True)
        
        with open(temp_output_path, 'rb') as temp_output:
            compressed_audio = temp_output.read()

        os.unlink(temp_input_path)
        os.unlink(temp_output_path)

        return (compressed_audio,)

```
