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
```
class Text2AudioEdgeTts:

    def __init__(self):
        self.output_dir = os.path.join(folder_paths.get_output_directory(), 'audio')
        if not os.path.exists(self.output_dir):
            os.makedirs(self.output_dir)

    @classmethod
    def INPUT_TYPES(cls):
        VOICES = list(voice_dict.keys())
        return {'required': {'voice': (VOICES,), 'rate': ('INT', {'default': 0, 'min': -200, 'max': 200}), 'filename_prefix': ('STRING', {'default': 'comfyUI'}), 'text': ('STRING', {'multiline': True})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('MP3 file: String',)
    FUNCTION = 'text_2_audio'
    OUTPUT_NODE = True
    CATEGORY = '😺dzNodes'

    def text_2_audio(self, voice, filename_prefix, text, rate):
        voice_name = voice_dict[voice]
        (full_output_folder, filename, counter, subfolder, filename_prefix) = folder_paths.get_save_image_path(filename_prefix, self.output_dir)
        _datetime = datetime.datetime.now().strftime('%Y%m%d')
        _datetime = _datetime + datetime.datetime.now().strftime('%H%M%S%f')
        file = f'{filename}_{_datetime}_{voice_name}.mp3'
        audio_path = os.path.join(full_output_folder, file)
        _rate = str(rate) + '%' if rate < 0 else '+' + str(rate) + '%'
        print(f"# 😺dzNodes: MSSpeech TTS: Generating voice files, voice=‘{voice_name}’, rate={rate}, audiofile_path='{audio_path}, 'text='{text}'")
        asyncio.run(gen_tts(text, voice_name, _rate, audio_path))
        return {'ui': {'text': 'Audio file：' + os.path.join(full_output_folder, file), 'audios': [{'filename': file, 'type': 'output', 'subfolder': 'audio'}]}, 'result': (audio_path,)}
```