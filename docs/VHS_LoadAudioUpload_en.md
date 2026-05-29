# Load Audio (Upload)🎥🅥🅗🅢
## Documentation
- Class name: VHS_LoadAudioUpload
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The VHS_LoadAudioUpload node is used to upload and process audio files in the video assistant suite. It allows users to upload audio files and specify the start time and duration of audio processing. This node is crucial for applications requiring audio manipulation or analysis, providing a foundation for further audio-related operations in the suite.

## Input types
### Required
- audio
    - Specify the audio file to be uploaded and processed. This parameter is essential for determining the audio content that will be processed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_time
    - Define the starting point (in seconds) from which the audio file should be processed. This parameter allows selective processing of audio content, enhancing flexibility.
    - Comfy dtype: FLOAT
    - Python dtype: float
- duration
    - Specify the duration (in seconds) for which the audio should be processed from the start time. This allows precise control over the segment of the audio file to be analyzed or manipulated.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- audio
    - Comfy dtype: VHS_AUDIO
    - Represents the processed audio data, ready for subsequent operations in the suite.
    - Python dtype: torch.Tensor

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
