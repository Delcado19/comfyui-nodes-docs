# Documentation
- Class name: SpeechRecognition
- Category: ♾️Mixlab/Audio
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The speech recognition node converts audio input to text. It plays a key role in applications that need to turn spoken language into written form, such as voice command systems or transcription services. The node focuses on accurately processing and interpreting audio signals, providing users with a powerful speech‑to‑text tool.

# Input types
## Required
- upload
    - The `upload` parameter is critical for the speech recognition node because it supplies the audio data to be processed. It is a required input that directly affects the node’s operation and the quality of the speech recognition output.
    - Comfy dtype: AUDIOINPUTMIX
    - Python dtype: Union[str, bytes]
- start_by
    - The `start_by` parameter lets users specify the starting point of the speech recognition process within the audio file. Although optional, it can significantly influence node execution by focusing the recognition task on a specific portion of the audio, improving efficiency and accuracy.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- prompt
    - The `prompt` output of the speech recognition node represents the transcribed text from the input audio. This important result contains the node’s primary function, providing users with a textual representation of the spoken content.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
