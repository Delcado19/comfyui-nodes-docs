
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
```python
class SAIOpenAIAPIWhisper:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "file_path": ("STRING", {}),
                "openai_key": ("STRING", {}),
            },
            "optional": {
                "model": (["whisper-1"],),
                "mode": (["transcribe", "translate_to_english"],),
                "language": ("STRING", {}),
                "response_format": (["text", "json", "verbose_json", "prompt_schedule"],),
                "temperature": ("FLOAT", {"min": 0.0, "max": 1.0, "default": 0.7}),
                "timestamp_granularities": (["segment", "word"],),
                "max_frames": ("INT", {"default": 0, "min": 0}),
                "seek_seconds": ("FLOAT", {"default": 0.0}),
                "prompt": ("STRING", {"multiline": True, "placeholder": "Optional prompt..."})
            }
        }
    
    RETURN_TYPES = ("STRING", "STRING", "INT")
    RETURN_NAMES = ("transcription_result", "audio_path", "frames_count")

    FUNCTION = "whisper_v2"
    CATEGORY = "SALT/Whisper"

    def whisper_v2(self, file_path, openai_key, model="whisper-1", mode="transcribe", language="", response_format="text", temperature=0.7, timestamp_granularities="segment", max_frames=0, seek_seconds=0.0, prompt=""):
        language = language if language else None
        prompt = prompt if prompt else None
        file_path = os.path.join(INPUT, file_path)

        if not os.path.exists(file_path):
            raise ValueError(f"The specified file `{file_path}` does not exist!")
        
        if model not in ("whisper-1"):
            raise ValueError(f"The specified model `{model}` does not exist!")

        if mode not in ("transcribe", "translate_to_english"):
            print(f'The `mode` selected "{mode}" is not valid. Please use either "transcribe", or "translate_to_english"')
            mode = "transcribe"

        openai.api_key = openai_key

        audio_path, fps, total_frames = self.extract_audio(file_path)

        max_frames = max_frames if max_frames != 0 else total_frames

        match mode:
            case "transcribe":
                if response_format == "prompt_schedule":
                    transcription = self.transcribe_audio(file_path, model, prompt, language, "verbose_json", temperature, timestamp_granularities, json_string=False)
                    out = self.prompt_schedule(transcription, fps, max_frames, seek_seconds)
                else:
                    out = self.transcribe_audio(file_path, model, prompt, language, response_format, temperature, timestamp_granularities)
            case "translate_to_english":
                out = self.translate_audio(file_path, model, prompt, response_format, temperature)

        return (out, audio_path, total_frames)

    def transcribe_audio(self, file_path, model="whisper-1", prompt=None, language=None, response_format="json", temperature=0.7, timestamp_granularities="segment", json_string=True):
        with open(file_path, "rb") as audio_file:
            response = openai.audio.transcriptions.create(
                model=model,
                file=audio_file,
                prompt=prompt,
                response_format=response_format,
                language=language,
                temperature=temperature,
                timestamp_granularities=timestamp_granularities
            )
            from pprint import pprint
            pprint(response, indent=4)
            if response_format in ("json", "verbose_json"):
                segments = getattr(response, 'segments', [])
                if json_string:
                    out = json.dumps(segments, ensure_ascii=True, indent=4)
                else:
                    out = segments
            else:
                out = response
            
            return out

    def translate_audio(self, file_path, model="whisper-1", prompt=None, response_format="json", temperature=0.7):
        with open(file_path, "rb") as audio_file:
            response = openai.audio.translations.create(
                model=model,
                file=audio_file,
                prompt=prompt,
                response_format=response_format,
                temperature=temperature,
            )
            from pprint import pprint
            pprint(response, indent=4)
            if response_format in ("json", "verbose_json"):
                segments = getattr(response, 'segments', [])
                out = json.dumps(segments, ensure_ascii=True, indent=4)
            else:
                out = response
            
            return out

    def extract_audio(self, file_path):
        clip = VideoFileClip(file_path)
        fps = clip.fps
        total_frames = int(clip.duration * fps)
        audio_path = os.path.join(OUTPUT, f"{os.path.splitext(os.path.basename(file_path))[0]}.mp3")
        clip.audio.write_audiofile(audio_path)
        clip.close()
        return audio_path, fps, total_frames
    
    def prompt_schedule(self, transcription, fps, max_frames, seek_seconds):
        prompt_schedule = ""
        max_seconds = max_frames / fps if max_frames > 0 else float('inf')
        start_frame = int(seek_seconds * fps)

        if isinstance(transcription, list):
            for idx, segment in enumerate(transcription):
                segment_start = segment.get("start", 0.0)
                if segment_start < seek_seconds or segment_start > max_seconds:
                    continue

                frame_number = int(segment_start * fps) - start_frame
                text = segment.get("text", "")
                if frame_number >= 0:
                    prompt_schedule += f'"{frame_number}": "{text.strip()}"' + (",\n" if idx != len(transcription) else "\n")

        return prompt_schedule

```
