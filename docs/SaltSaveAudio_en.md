
# Documentation
- Class name: SaltSaveAudio
- Category: SALT/Audio
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltSaveAudio node is specifically used to save audio content into multiple file formats, including WAV, MP3, and FLAC. It automatically handles file naming and ensures that existing files are not overwritten when saving, making it a key component in audio processing workflows that need to output audio files.

# Input types
## Required
- audio
    - This is the raw audio data to be saved. This parameter is crucial because it directly represents the audio content that will be processed and saved to a file.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- filename_prefix
    - The prefix for generating filenames, making it easy to identify and organize saved audio files. The default value is 'audio_sfx', providing a customizable basic naming convention.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - Specifies the saved audio file format. Supported formats include 'wav', 'mp3', and 'flac', providing flexibility for audio storage and use.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltSaveAudio:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audio": ("AUDIO",),
                "filename_prefix": ("STRING", {"default": "audio_sfx"}),
                "format": (["wav", "mp3", "flac"], ),
            },
        }

    RETURN_TYPES = ()
    RETURN_NAMES = ()
    OUTPUT_NODE = True
    FUNCTION = "save_audio"
    CATEGORY = "SALT/Audio"

    def save_audio(self, audio, filename_prefix="audio_sfx", format="wav"):
        OUTPUT = folder_paths.get_output_directory()
        index = 0

        file_extension = format.lower()
        if format not in ['wav', 'mp3', 'flac']:
            print(f"Unsupported format: {format}. Defaulting to WAV.")
            file_extension = "wav"
            format = "wav"

        while True:
            filename = f"{filename_prefix}_%04d.{file_extension}" % index
            full_path = os.path.realpath(os.path.join(OUTPUT, filename))
            if not os.path.exists(full_path):
                break
            index += 1

        audio_segment = AudioSegment.from_file(io.BytesIO(audio), format="wav")
        audio_segment.export(full_path, format=format)

        print(f"Audio saved to {filename} in {format.upper()} format")
        return ()

```
