
# Documentation
- Class name: `Frame Counter Info [Dream]`
- Category: `✨ Dream/🎥 animation`
- Output node: `False`

The Frame Counter Info [Dream] node provides detailed information about the current state of the frame counter in the animation context, including the number of completed frames, total frames, and various time-based metrics.

# Input types
## Required
- frame_counter
    - This is a frame counter object used to track the current frame, total frames, and time information in an animation sequence. It is the core input for obtaining animation progress and status information.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter

# Output types
- frames_completed
    - Indicates the number of frames that have been completed. This output can be used to track the progress of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- total_frames
    - Indicates the total number of frames in the animation sequence. This output defines the length of the entire animation.
    - Comfy dtype: INT
    - Python dtype: int
- first_frame
    - A boolean value indicating whether the current frame is the first frame. This is useful for initialization or special start processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- last_frame
    - A boolean value indicating whether the current frame is the last frame. This is useful for end processing or final operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- elapsed_seconds
    - Indicates the elapsed time since the start of the animation (in seconds). This can be used for timing or progress tracking.
    - Comfy dtype: FLOAT
    - Python dtype: float
- remaining_seconds
    - Estimates the time remaining before the animation completes (in seconds). This is helpful for estimating completion time.
    - Comfy dtype: FLOAT
    - Python dtype: float
- total_seconds
    - Indicates the total duration of the entire animation (in seconds). This defines the total length of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- completion
    - Indicates the progress percentage of the animation. This is a floating point number between 0 and 1, which can be used to display a progress bar or other visualizations.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamFrameCounterInfo:
    NODE_NAME = "Frame Counter Info"
    ICON = "⚋"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter
        }

    CATEGORY = NodeCategories.ANIMATION
    RETURN_TYPES = ("INT", "INT", "BOOLEAN", "BOOLEAN", "FLOAT", "FLOAT", "FLOAT", "FLOAT")
    RETURN_NAMES = ("frames_completed", "total_frames", "first_frame", "last_frame",
                    "elapsed_seconds", "remaining_seconds", "total_seconds", "completion")
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *v):
        return ALWAYS_CHANGED_FLAG

    def result(self, frame_counter: FrameCounter):
        return (frame_counter.current_frame,
                frame_counter.total_frames,
                frame_counter.is_first_frame,
                frame_counter.is_final_frame,
                frame_counter.current_time_in_seconds,
                frame_counter.remaining_time_in_seconds,
                frame_counter.total_time_in_seconds,
                frame_counter.current_time_in_seconds / max(0.01, frame_counter.total_time_in_seconds))

```
