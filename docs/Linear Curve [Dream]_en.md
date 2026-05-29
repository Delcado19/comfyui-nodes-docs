
# Documentation
- Class name: Linear Curve [Dream]
- Category: ✨ Dream/🎥 animation/📈 curves
- Output node: False

The Linear Curve node provides a linear interpolation between an initial value and a final value, based on a sequence of frames. It is commonly used to create smooth transitions or animation effects.

# Input types
## Required
- frame_counter
    - Used to track the progress of frames, determining the current position in the interpolation process. It is key to the entire interpolation process and directly affects the calculation of the output value.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- initial_value
    - Specifies the starting value for the linear interpolation, serving as the base for the animation or transition. This value determines the starting point of the interpolation and is critical to the initial state of the entire process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- final_value
    - Defines the endpoint value for the linear interpolation, determining the target of the animation or transition. This value sets the final state of the interpolation and has a decisive impact on the result of the entire process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- FLOAT
    - Outputs the interpolated float value for the current frame, reflecting the state of the linear progression. This value can be used in scenarios requiring precise decimal values.
    - Comfy dtype: FLOAT
    - Python dtype: float
- INT
    - Outputs the interpolation rounded to the nearest integer, providing discrete steps of the progression. This value is suitable for scenarios requiring integer output.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamLinear:
    NODE_NAME = "Linear Curve"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "initial_value": ("FLOAT", {"default": 0.0, "multiline": False}),
                "final_value": ("FLOAT", {"default": 100.0, "multiline": False}),
            },
        }

    CATEGORY = NodeCategories.ANIMATION_CURVES
    RETURN_TYPES = ("FLOAT", "INT")
    RETURN_NAMES = ("FLOAT", "INT")
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def result(self, initial_value, final_value, frame_counter: FrameCounter):
        d = final_value - initial_value
        v = initial_value + frame_counter.progress * d
        return (v, int(round(v)))

```
