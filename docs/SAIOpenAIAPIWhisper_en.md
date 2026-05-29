
# Documentation
- Class name: SAIOpenAIAPIWhisper
- Category: SALT/Whisper
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SAIOpenAIAPIWhisper node uses OpenAI's Whisper API to provide transcription or translation of audio content. It supports various configuration options, including model selection, response format, and temperature settings to customize the transcription or translation process according to specific needs.

# Input types
## Required
- file_path
    - The path to the audio file to be transcribed or translated. This parameter is essential for locating and processing the audio content.
    - Comfy dtype: STRING
    - Python dtype: str
- openai_key
    - The OpenAI API key used to authenticate requests to the Whisper API.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- model
    - Specifies the Whisper model to use for transcription or translation, allowing customization of the processing based on model capabilities.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mode
    - Specifies whether the operation is transcription or translation of the audio content, providing processing flexibility.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- language
    - The language of the audio content, which can affect the accuracy of the transcription or translation.
    - Comfy dtype: STRING
    - Python dtype: str
- response_format
    - Determines the format of the transcription or translation output, supporting text or JSON format for flexible integration.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- temperature
    - Adjusts the creativity or variability of the transcription or translation output, enabling fine-tuning of results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- timestamp_granularities
    - Defines the level of detail for timestamps in the transcription, allowing paragraph or word-level granularity.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_frames
    - The maximum number of frames to process, enabling control over the scope of the transcription or translation.
    - Comfy dtype: INT
    - Python dtype: int
- seek_seconds
    - The number of seconds to seek in the audio before starting the transcription or translation, allowing precise setting of the starting point.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prompt
    - An optional prompt that can guide the transcription or translation process, providing context or instructions to the model.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- transcription_result
    - The final transcribed or translated text output.
    - Comfy dtype: STRING
    - Python dtype: str
- audio_path
    - The path to the processed audio file, useful for subsequent operations or verification.
    - Comfy dtype: STRING
    - Python dtype: str
- frames_count
    - The number of frames processed during the transcription or translation, providing insight into the scope of the operation.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
