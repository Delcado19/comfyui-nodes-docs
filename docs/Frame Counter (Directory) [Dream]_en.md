
# Documentation
- Class name: Frame Counter (Directory) [Dream]
- Category: ✨ Dream/🎥 animation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node calculates the frame count from images found in a specified directory, matching a given pattern, and sorted numerically or alphabetically. It is particularly useful in animation projects where tracking frame progress is required.

# Input types
## Required
- directory_path
    - Specify the directory path containing the images to count. This path is essential for locating and processing the images.
    - Comfy dtype: STRING
    - Python dtype: str
- pattern
    - Define the pattern used to match files in the directory (e.g., '*.jpg'). This pattern determines which files are included in the frame count.
    - Comfy dtype: STRING
    - Python dtype: str
- indexing
    - Determines the order of image indexing and counting, either numerically or alphabetically. This affects the sequence of frame counting.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- total_frames
    - Set the maximum number of frames to count, providing a limit for the frame counting process.
    - Comfy dtype: INT
    - Python dtype: int
- frames_per_second
    - Specify the frame rate, used to calculate the duration of the animation based on the frame count.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frame_counter
    - Outputs a FrameCounter object, encapsulating the current frame count, total frames, and frames per second.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamDirectoryBackedFrameCounter:
    NODE_NAME = "Frame Counter (Directory)"
    ICON = "⚋"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "directory_path": ("STRING", {"default": '', "multiline": False}),
                "pattern": ("STRING", {"default": '*', "multiline": False}),
                "indexing": (["numeric", "alphabetic order"],),
                "total_frames": ("INT", {"default": 100, "min": 2, "max": 24 * 3600 * 60}),
                "frames_per_second": ("INT", {"min": 1, "default": 30}),
            },
        }

    CATEGORY = NodeCategories.ANIMATION
    RETURN_TYPES = (FrameCounter.ID,)
    RETURN_NAMES = ("frame_counter",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def result(self, directory_path, pattern, indexing, total_frames, frames_per_second):
        results = list_images_in_directory(directory_path, pattern, indexing == "alphabetic order")
        if not results:
            return (FrameCounter(0, total_frames, frames_per_second),)
        n = max(results.keys()) + 1
        return (FrameCounter(n, total_frames, frames_per_second),)

```
