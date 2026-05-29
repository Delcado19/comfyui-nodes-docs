# Documentation
- Class name: Text2AudioEdgeTts
- Category: 😺dzNodes
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_MSSpeech_TTS

The Text2AudioEdgeTts node aims to convert text to audio files using the edge_tts library. It accepts text, a voice parameter, and an optional rate adjustment to generate audio files that can be used in various applications such as voice assistants or audiobooks. The main goal of this node is to provide an efficient and customizable text-to-speech conversion process.

# Input types
## Required
- voice
    - The voice parameter is crucial for determining the voice characteristics of the generated audio. It selects a specific voice from the predefined set of voices in the edge_tts library, which significantly influences the quality and tone of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- text
    - The text parameter is the input text to be converted to audio. It is the core content that the node processes to generate the desired audio output. The quality of the text directly affects the effectiveness of the conversion.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- rate
    - The rate parameter allows adjusting the speaking speed. It can be set to a negative value to slow down or a positive value to speed up. This feature is important for fine-tuning the audio output to meet specific requirements or preferences.
    - Comfy dtype: INT
    - Python dtype: int
- filename_prefix
    - The filename prefix is used to create a unique identifier for the output audio file. It is particularly useful when organizing and managing multiple audio files, as it ensures each file has a unique and identifiable name.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MP3 file
    - The output of the Text2AudioEdgeTts node is an MP3 file containing the audio generated from the input text. This file is important because it represents the result of the node's text-to-speech conversion process and can be used in various downstream applications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_MSSpeech_TTS)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
