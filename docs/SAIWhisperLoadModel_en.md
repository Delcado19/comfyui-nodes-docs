
# Documentation
- Class name: SAIWhisperLoadModel
- Category: SALT/Whisper
- Output node: False

The SAIWhisperLoadModel node is designed to load a specified Whisper model into memory, preparing it for speech-to-text operations. It supports multiple Whisper model versions and allows specifying a device to optimize performance.

# Input types
## Required
- model
    - Specify the Whisper model version to load. Multiple versions are supported, including large, base, medium, small, and tiny variants, as well as distil versions for efficient processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
## Optional
- device
    - Determine the computing device ('cuda' or 'cpu') used for loading the model, providing flexibility based on available hardware.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- model
    - The loaded Whisper model, its processor, and the device it was loaded onto, ready for speech-to-text processing.
    - Comfy dtype: WHISPER_MODEL
    - Python dtype: Tuple[torch.nn.Module, AutoProcessor, str]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SAIWhisperLoadModel:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model": (["openai/whisper-large-v2", "openai/whisper-large-v3", "openai/whisper-base", "openai/whisper-large", "openai/whisper-medium", "openai/whisper-small", "openai/whisper-tiny", "distil-whisper/distil-large-v3", ], ),
            },
            "optional": {
                "device": (["cuda", "cpu"], ),
            },
        }
    
    RETURN_TYPES = ("WHISPER_MODEL",)
    RETURN_NAMES = ("model", "processor")

    FUNCTION = "load_model"
    CATEGORY = "SALT/Whisper"

    def load_model(self, model, device="cuda"):
        whisper_model = AutoModelForSpeechSeq2Seq.from_pretrained(model, cache_dir=WHISPER_MODELS, use_safetensors=True).to(device)
        processor = AutoProcessor.from_pretrained(model)
        return ((whisper_model, processor, device), )

```
