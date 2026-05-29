
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
