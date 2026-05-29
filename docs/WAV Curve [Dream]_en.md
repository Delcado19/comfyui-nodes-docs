
# Documentation
- Class name: WAV Curve [Dream]
- Category: ✨ Dream/🎥 animation/📈 curves
- Output node: False

The WAV Curve node dynamically generates animation curves based on the audio data of a WAV file, enabling animations to sync with audio. It scales the amplitude values for a given frame, providing both float and integer outputs for flexible use in animation scripts.

# Input types
## Required
- frame_counter
    - The frame counter is essential for determining the current position on the animation timeline, affecting which portion of the WAV file's amplitude is used to generate the curve.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- wav_path
    - Specifies the path to the WAV file used to generate the animation curve. A default path is provided but can be customized.
    - Comfy dtype: STRING
    - Python dtype: str
- scale
    - A multiplier used to adjust the amplitude values extracted from the WAV file, allowing the intensity of the animation curve to be tuned.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- FLOAT
    - Outputs the scaled amplitude value from the WAV file as a float, suitable for precise animation adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- INT
    - Rounds the scaled amplitude value from the WAV file to the nearest integer, suitable for discrete animation steps.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamWavCurve:
    NODE_NAME = "WAV Curve"
    CATEGORY = NodeCategories.ANIMATION_CURVES
    RETURN_TYPES = ("FLOAT", "INT")
    RETURN_NAMES = ("FLOAT", "INT")
    FUNCTION = "result"
    ICON = "∿"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "wav_path": ("STRING", {"default": "audio.wav"}),
                "scale": ("FLOAT", {"default": 1.0, "multiline": False})
            },
        }

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def result(self, frame_counter: FrameCounter, wav_path, scale):
        if not os.path.isfile(wav_path):
            return (0.0, 0)
        data = _wav_loader(wav_path, frame_counter.frames_per_second)
        frame_counter.current_time_in_seconds
        v = data.value_at_time(frame_counter.current_time_in_seconds)
        return (v * scale, round(v * scale))

```
