
# Documentation
- Class name: Frame Counter Time Offset [Dream]
- Category: ✨ Dream/🎥 animation
- Output node: False

This node applies a time‑based offset to a frame counter, effectively adjusting the current frame by the specified number of seconds. It is designed to facilitate animation time adjustments by converting time into an equivalent frame count increment, using the frame rate for precise synchronization.

# Input types
## Required
- frame_counter
    - Frame counter to be adjusted. It serves as the basis for applying the time offset and determines the new frame position.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- offset_seconds
    - Length of time (in seconds) to offset the frame counter. This value is multiplied by the frame rate to compute the equivalent number of frames to adjust.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- frame_counter
    - Adjusted frame counter, increased by the computed frames corresponding to the specified time offset.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamFrameCounterTimeOffset:
    NODE_NAME = "Frame Counter Time Offset"

    ICON = "±"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "offset_seconds": ("FLOAT", {"default": 0.0}),
            },
        }

    CATEGORY = NodeCategories.ANIMATION
    RETURN_TYPES = (FrameCounter.ID,)
    RETURN_NAMES = ("frame_counter",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, frame_counter, offset):
        return hashed_as_strings(frame_counter, offset)

    def result(self, frame_counter: FrameCounter, offset_seconds):
        offset = offset_seconds * frame_counter.frames_per_second
        return (frame_counter.incremented(offset),)

```
