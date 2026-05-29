
# Documentation
- Class name: Frame Counter Offset [Dream]
- Category: ✨ Dream/🎥 animation
- Output node: False

The Frame Counter Offset node modifies the frame counter by applying a specified offset value. This adjustment allows dynamic alteration of the animation timeline, enabling shifted or delayed animation sequences based on the original frame count.

# Input types
## Required
- frame_counter
    - The Frame Counter input represents the current state of the animation frame count, including current frame, total frames, and frames per second. Offsets applied to this counter shift the animation timeline forward or backward.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- offset
    - The Offset parameter specifies the number of frames the frame counter should increase or decrease. This allows adjustment of the animation timeline, effectively shifting the frame sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frame_counter
    - The modified frame counter, incremented or decremented according to the specified offset, reflecting the new position in the animation timeline.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamFrameCounterOffset:
    NODE_NAME = "Frame Counter Offset"

    ICON = "±"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "offset": ("INT", {"default": -1}),
            },
        }

    CATEGORY = NodeCategories.ANIMATION
    RETURN_TYPES = (FrameCounter.ID,)
    RETURN_NAMES = ("frame_counter",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, frame_counter, offset):
        return hashed_as_strings(frame_counter, offset)

    def result(self, frame_counter: FrameCounter, offset):
        return (frame_counter.incremented(offset),)

```
