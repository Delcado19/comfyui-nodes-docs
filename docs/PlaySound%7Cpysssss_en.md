# PlaySound 🐍
## Documentation
- Class name: PlaySound|pysssss
- Category: utils
- Output node: True
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

The PlaySound node plays audio files with customizable settings such as volume and playback mode. It abstracts audio playback complexity and provides a simple interface to trigger sound effects or notifications in workflows.

## Input types
### Required
- any
    - Serves as a wildcard input, allowing flexible integration with various data types or structures without enforcing a specific format.
    - Comfy dtype: *
    - Python dtype: AnyType
- mode
    - Determines playback conditions, which can be always playing the sound or only when the queue is empty, thereby controlling sound occurrence.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- volume
    - Controls audio volume, ranging from 0 to 1, allowing fine adjustment of sound levels.
    - Comfy dtype: FLOAT
    - Python dtype: float
- file
    - Specifies the audio file to play, offering a default option and allowing custom sound effects.
    - Comfy dtype: STRING
    - Python dtype: str

## Output types
- *
    - Comfy dtype: *
    - unknown
    - Python dtype: unknown
- ui
    - Returns a UI component structure, which in this context appears to be a placeholder with no active elements.

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class PlaySound:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "any": (any, {}),
            "mode": (["always", "on empty queue"], {}),
            "volume": ("FLOAT", {"min": 0, "max": 1, "step": 0.1, "default": 0.5}),
            "file": ("STRING", { "default": "notify.mp3" })
        }}

    FUNCTION = "nop"
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True,)
    OUTPUT_NODE = True
    RETURN_TYPES = (any,)

    CATEGORY = "utils"

    def IS_CHANGED(self, **kwargs):
        return float("NaN")

    def nop(self, any, mode, volume, file):
        return {"ui": {"a": []}, "result": (any,)}