
# Documentation
- Class name: SaltOutput
- Category: SALT/IO
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltOutput node is designed to handle various types of output data, including images, audio, and text. It can appropriately format and save this data according to the specified output type. The node supports a wide range of file formats and is capable of generating complex UI structures to effectively represent the output data.

# Input types
## Required
- output_name
    - Specifies the name of the output, used as the basis for generating filenames and identifiers in saved output files.
    - Comfy dtype: STRING
    - Python dtype: str
- output_desc
    - Provides a description of the output, which can be used for metadata or UI display purposes.
    - Comfy dtype: STRING
    - Python dtype: str
- output_type
    - Determines the format of the output file (e.g., PNG, JPEG, MP3, WAV, STRING), affecting how the output data is processed and saved.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_data
    - The actual data to be output, whose type may vary significantly (e.g., bytes for audio, torch.Tensor for images, string for text output).
    - Comfy dtype: *
    - Python dtype: Union[bytes, torch.Tensor, str]
## Optional
- video_audio
    - Optional audio data for video output, specifying the audio track to be included in the video file.
    - Comfy dtype: AUDIO
    - Python dtype: bytes
- animation_fps
    - Specifies the frame rate for animation output, allowing control over animation speed.
    - Comfy dtype: INT
    - Python dtype: int
- animation_quality
    - Defines the quality level of the animation (DEFAULT or HIGH), affecting the visual fidelity of the output file.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- ui
    - Generates a complex UI structure to represent the output data, including metadata and previews for supported file types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
