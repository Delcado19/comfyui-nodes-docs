# Documentation
- Class name: PixaromaLoadVideoFrame
- Category: 👑 Pixaroma/🖼️ Image
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Load Video Frame Pixaroma - load a video and pick one exact frame to send into your workflow as an image. Like a Load Image node, but for video.

On the node you get a preview with a slider: drag it to any spot, use the arrow buttons to step one frame back or forward, or type the exact frame number. The frame count is read for you, so the slider knows how many frames the video has.

Outputs: image (the picked frame), mask, frame_count, fps, width and height. The frame number is 0-based, so 0 is the very first frame.

Reads with PyAV when available, otherwise imageio. Grabbing a frame deep in a long video stays fast because it seeks straight to that frame instead of reading the whole clip.

# Input types
## Required
- video
    - The video to load from ComfyUI's input folder. Use the 'choose video to upload' button, or pick one from the dropdown.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- frame
    - Which frame to grab. 0 is the first frame. Drag the slider or use the arrow buttons on the node, or type the number here. If you enter a number past the end of the video, the last frame is used.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The picked frame as an image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - A blank (fully opaque) mask that matches the frame, so it drops into the same slots as Load Image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- frame_count
    - How many frames the whole video has.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - Frames per second of the video.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - Frame width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Frame height in pixels.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
