
# Documentation
- Class name: Saw Curve [Dream]
- Category: ✨ Dream/🎥 animation/📈 curves
- Output node: False

The Saw Curve node generates a linear ramp waveform that cycles over a specified period, used for creating sawtooth wave animations based on frame count and time. It supports customization through parameters such as maximum value, minimum value, periodicity, and phase adjustment.

# Input types
## Required
- frame_counter
    - Represents the current frame count and time, used as the basis for calculating the position of the sawtooth curve within its period.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- max_value
    - The maximum value the sawtooth curve can reach within its period, defining the peak of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_value
    - The minimum value the sawtooth curve can reach, defining the baseline of the waveform.
    - Comfy dtype: FLOAT
    - Python dtype: float
- periodicity_seconds
    - The duration of one complete cycle of the sawtooth curve (in seconds), determining its frequency.
    - Comfy dtype: FLOAT
    - Python dtype: float
- phase
    - The phase offset of the sawtooth curve, allowing the waveform to be advanced or delayed within its period.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- FLOAT
    - The calculated floating-point value of the sawtooth curve at the current frame.
    - Comfy dtype: FLOAT
    - Python dtype: float
- INT
    - The integer representation of the current sawtooth curve value, obtained by rounding the floating-point calculation result.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamSawWave:
    NODE_NAME = "Saw Curve"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "max_value": ("FLOAT", {"default": 1.0, "multiline": False}),
                "min_value": ("FLOAT", {"default": 0.0, "multiline": False}),
                "periodicity_seconds": ("FLOAT", {"default": 10.0, "multiline": False, "min": 0.01}),
                "phase": ("FLOAT", {"default": 0.0, "multiline": False, "min": -1, "max": 1}),
            },
        }

    CATEGORY = NodeCategories.ANIMATION_CURVES
    RETURN_TYPES = ("FLOAT", "INT")
    RETURN_NAMES = ("FLOAT", "INT")
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def result(self, frame_counter: FrameCounter, max_value, min_value, periodicity_seconds, phase):
        x = frame_counter.current_time_in_seconds
        x = ((x + periodicity_seconds * phase) % periodicity_seconds) / periodicity_seconds
        y = x * (max_value - min_value) + min_value
        return _curve_result(y)

```
