# Documentation
- Class name: WAS_Video_Writer
- Category: WAS Suite/Animation/Writer
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Video_Writer node generates a video from a series of images. It offers adjusting transition frames, controlling frames per second (FPS), and setting delays between images. It can also resize images to a maximum dimension and encode the video with a specified codec. This node is ideal for creating animations or timelapse videos from input images.

# Input types
## Required
- image
- Input image sequence for the video creation process. This parameter is critical as it directly determines the video content.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- transition_frames
- Number of transition frames between images. Higher values yield smoother transitions but increase video length.
    - Comfy dtype: INT
    - Python dtype: int
- image_delay_sec
- Delay in seconds before each image transitions to the next. This affects playback speed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fps
- Frames per second of the output video. It determines smoothness and file size.
    - Comfy dtype: INT
    - Python dtype: int
- max_size
- Maximum dimension of the output video in pixels. Resizing may occur to meet this constraint.
    - Comfy dtype: INT
    - Python dtype: int
- output_path
- Directory path where the output video file will be saved.
    - Comfy dtype: STRING
    - Python dtype: str
- filename
- Desired name of the output video file.
    - Comfy dtype: STRING
    - Python dtype: str
- codec
- Codec used for video encoding. It influences format and compression.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE_PASS
- Sequence of linked images that form the video content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filepath_text
- File path where the video is saved.
    - Comfy dtype: TEXT
    - Python dtype: str
- filename_text
- Filename of the saved video.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
