
# Documentation
- Class name: Sine Curve [Dream]
- Category: ✨ Dream/🎥 animation/📈 curves
- Output node: False

'Sine Curve' node generates a sine wave based on animation frame data, used to create dynamic visual effects. It adjusts the amplitude and frequency of the sine wave through parameters such as maximum value, minimum value, period, and phase.

# Input types
## Required
- frame_counter
    - The frame_counter parameter tracks the current time (in seconds) according to the frame rate of the animation, serving as the basis for calculating the sine wave position.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- max_value
    - The max_value parameter specifies the maximum amplitude of the sine wave, defining the peak it can reach.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_value
    - The min_value parameter determines the minimum amplitude of the sine wave, setting the lowest value it can drop to.
    - Comfy dtype: FLOAT
    - Python dtype: float
- periodicity_seconds
    - The periodicity_seconds parameter controls the period of the sine wave, affecting the speed at which it completes a full cycle.
    - Comfy dtype: FLOAT
    - Python dtype: float
- phase
    - The phase parameter adjusts the phase of the sine wave, changing its starting position within the cycle.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- FLOAT
    - Output the sine wave value calculated for the current frame as a floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float
- INT
    - Output the sine wave value rounded to an integer, suitable for discrete animations or effects.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamSineWave:
    NODE_NAME = "Sine Curve"

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
        a = (max_value - min_value) * 0.5
        c = phase
        b = 2 * math.pi / periodicity_seconds
        d = (max_value + min_value) / 2
        y = a * math.sin(b * (x + c)) + d
        return _curve_result(y)

```
