# Documentation
- Class name: PixaromaLoadVideo
- Category: 👑 Pixaroma/🖼️ Image
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Load Video Pixaroma - upload or pick a video and decode it to a frame batch, with a built-in video preview on the node so you can watch the source without leaving ComfyUI.

Outputs: video_frames (the video as an image batch), audio, frame_count, fps, width, height, and duration - so you usually do not need a separate video-info node. Pairs with Save Mp4 Pixaroma: wire video_frames and audio straight across.

Loading controls: Max frames sets how many frames to load from the start (a safety valve for long clips), Skip first frames then trims the front, Force FPS resamples to a steady frame rate, and Custom width/height resize each frame (set both to crop-to-fill that size without stretching).

Reads with PyAV when available, otherwise imageio; audio is pulled with ffmpeg. No extra setup is needed on most ComfyUI installs.

# Input types
## Required
- video
    - The video to load from ComfyUI's input folder. Use the 'choose video to upload' button, or pick one from the dropdown (and the arrows to flip through).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_frames
    - How many frames to load from the start of the video (the first N). 0 = load all of them. The safety valve for long clips: it never reads more than this many frames. Skip first frames then trims the front of these, so Max frames 100 with Skip 5 gives 95.
    - Comfy dtype: INT
    - Python dtype: int
- force_fps
    - Force a steady frames-per-second by dropping or duplicating frames (e.g. a 60fps clip forced to 24). 0 = keep the video's original rate. AI video models usually expect a fixed rate like 24.
    - Comfy dtype: FLOAT
    - Python dtype: float
- skip_first_frames
    - Skip this many frames from the start, like trimming an intro. 0 = start at the beginning. Trims the front of the loaded frames.
    - Comfy dtype: INT
    - Python dtype: int
- custom_width
    - Resize frames as they load. 0 = keep the original. Set only width OR only height to scale proportionally. Set BOTH to crop-to-fill that exact size: it scales to fill the box, keeps the picture's proportions, and trims the overflow (like Resize Crop). It never stretches.
    - Comfy dtype: INT
    - Python dtype: int
- custom_height
    - Resize frames as they load. 0 = keep the original. Set only width OR only height to scale proportionally. Set BOTH to crop-to-fill that exact size: it scales to fill the box, keeps the picture's proportions, and trims the overflow (like Resize Crop). It never stretches.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- video_frames
    - The video as a batch of image frames, after any trim and resize.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - The video's soundtrack (no audio is passed on if the file has none). Wire into Save Mp4 to keep the sound.
    - Comfy dtype: AUDIO
    - Python dtype: object
- frame_count
    - How many frames were loaded.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - Frames per second of the loaded clip (matches Force FPS when set).
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - Frame width in pixels, after any resize.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Frame height in pixels, after any resize.
    - Comfy dtype: INT
    - Python dtype: int
- duration
    - Length of the loaded clip in seconds.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
