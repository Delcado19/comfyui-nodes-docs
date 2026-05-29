# Documentation
- Class name: LoadAudio
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The LoadAudio node is designed to efficiently load and process audio files. It handles various audio file formats and provides the ability to seek to a specific second within the audio stream. This node is essential for applications that require audio manipulation or analysis as part of a larger multimedia processing workflow.

# Input types
## Required
- audio_file
    - The audio_file parameter specifies the path to the audio file to be loaded. This is a fundamental parameter, as the node's operation revolves around the provided audio file. The node validates the path and ensures the file is accessible and in a supported format.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seek_seconds
    - The seek_seconds parameter allows the node to begin processing audio from a specified time offset in seconds. This is useful when only a portion of the audio file is relevant, improving efficiency and reducing unnecessary processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- audio
    - The audio output of the LoadAudio node represents the loaded and optionally processed audio data. It is a critical output, as it feeds into subsequent audio analysis or manipulation stages in the multimedia workflow.
    - Comfy dtype: VHS_AUDIO
    - Python dtype: bytes

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
