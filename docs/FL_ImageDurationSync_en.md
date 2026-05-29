
# Documentation
- Class name: FL_ImageDurationSync
- Category: 🏵️Fill Nodes
- Output node: False

The FL_ImageDurationSync node is designed to synchronize the duration of a sequence of images with a specific music tempo in beats per minute (BPM), frame count, and number of bars, adjusting the hold frames of each image to match the required total duration. This feature is particularly useful when creating visual effects aligned with an audio track, ensuring visual elements progress in harmony with the musical rhythm.

# Input types
## Required
- images
    - An image sequence that needs to be synchronized with the audio duration. This input is essential for determining the basic visual content that will be adjusted in duration.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frame_count
    - Specifies the total number of frames in the output sequence, affecting how images are stretched or compressed to fit the required duration.
    - Comfy dtype: INT
    - Python dtype: int
- bpm
    - The beats per minute of the audio track, used to calculate the duration per bar, and thus the total duration of the image sequence.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - The frames per second at which the images will be displayed, affecting the calculation of how long each image is held.
    - Comfy dtype: INT
    - Python dtype: int
- bars
    - The number of musical bars to which the images will be synchronized, directly affecting the total duration of the visual sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_images
    - The adjusted image sequence, matched to the required duration, ensuring synchronization with the audio track.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- hold_frames
    - The number of frames each image is held, calculated based on BPM, number of bars, and FPS, to achieve the desired synchronization.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FL_ImageDurationSync:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE", {}),
                "frame_count": ("INT", {"default": 30}),
                "bpm": ("INT", {"default": 120}),
                "fps": ("INT", {"default": 30}),
                "bars": ("FLOAT", {"default": 4.0, "step": 0.05}),
            }
        }

    RETURN_TYPES = ("IMAGE", "INT")
    RETURN_NAMES = ("output_images", "hold_frames")
    FUNCTION = "sync_image_to_duration"
    CATEGORY = "🏵️Fill Nodes"

    def sync_image_to_duration(self, images, bpm, frame_count, bars, fps):
        # Calculate the duration of each bar in seconds
        bar_duration = 60 / bpm * 4

        # Calculate the total duration in seconds
        total_duration = bar_duration * bars

        # Calculate the number of frames to hold the image
        hold_frames = int(total_duration * fps)

        # Repeat the image for the calculated number of frames
        output_images = images.repeat(hold_frames, 1, 1, 1)

        return (output_images, hold_frames)

```
