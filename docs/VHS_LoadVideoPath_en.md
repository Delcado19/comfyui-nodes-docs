# Load Video (Path) 🎥🅥🅗🅢
## Documentation
- Class name: VHS_LoadVideoPath
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

VHS_LoadVideoPath node is used to load video files from a specified path to integrate into video processing workflows. It ensures the video file is accessible, validates the path, and prepares the video for subsequent processing or analysis tasks.

## Input types
### Required
- video
    - Specifies the path of the video file to load, enabling the node to access and process the video.
    - Comfy dtype: STRING
    - Python dtype: str
- force_rate
    - Determines the frame rate to enforce on the loaded video, allowing consistent frame rate processing across different videos.
    - Comfy dtype: INT
    - Python dtype: int
- force_size
    - Allows specifying the desired resolution of the video, facilitating standardization of video dimensions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_width
    - Sets a custom width for the video, enabling precise control over video dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- custom_height
    - Sets a custom height for the video, enabling precise control over video dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- frame_load_cap
    - Limits the number of frames loaded from the video, helping process videos within memory constraints.
    - Comfy dtype: INT
    - Python dtype: int
- skip_first_frames
    - Skips a specified number of initial frames in the video, allowing processing to start from a later part.
    - Comfy dtype: INT
    - Python dtype: int
- select_every_nth
    - Selects every nth frame to load, allowing sparse sampling of video frames.
    - Comfy dtype: INT
    - Python dtype: int

### Optional
- meta_batch
    - Associates the loaded video with a specific batch, facilitating batch operations in the Video Helper Suite.
    - Comfy dtype: VHS_BatchManager
    - Python dtype: VHS_BatchManager

## Output types
- IMAGE
    - Comfy dtype: IMAGE
    - Loaded video frames as images, ready for further processing.
    - Python dtype: List[Image]
- frame_count
    - Comfy dtype: INT
    - Total number of frames loaded from the video.
    - Python dtype: int
- audio
    - Comfy dtype: VHS_AUDIO
    - Audio track extracted from the video (if any).
    - Python dtype: VHS_AUDIO
- video_info
    - Comfy dtype: VHS_VIDEOINFO
    - Metadata and information about the loaded video.
    - Python dtype: VHS_VIDEOINFO

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
