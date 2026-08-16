# Documentation
- Class name: VHS_LoadVideoFFmpegPath
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite

Load Video FFmpeg (Path) 🎥🅥🅗🅢<div style="font-size: 0.8em"><div id=VHS_shortdesc>Loads a video from an arbitrary path using ffmpeg instead of opencv</div></div><div style="font-size: 0.8em">Provides faster execution speed, transparency support, and allows specifying start time in seconds</div><div style="font-size: 0.8em"><div vhs_title="Inputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Inputs: <div vhs_title="meta_batch" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">meta_batch: (optional) Connect to a Meta Batch manager to divide extremely long sequences into sub batches. See the documentation for Meta Batch Manager</div></div><div vhs_title="vae" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">vae: (optional) If provided the node will output latents instead of images. This drastically reduces the required RAM (not VRAM) when working with long (100+ frames) sequences<div style="font-size: 1em">Using this is strongly encouraged unless connecting to a node that requires a blue image connection such as Apply Controllnet</div></div></div></div></div><div vhs_title="Outputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Outputs: <div vhs_title="IMAGE" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">IMAGE: The loaded images</div></div><div vhs_title="mask" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">mask: Transparency data from the loaded video</div></div><div vhs_title="audio" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">audio: The audio from the loaded video</div></div><div vhs_title="video_info" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">video_info: Exposes additional info about the video such as the source frame rate, or the total length</div></div><div vhs_title="LATENT" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">LATENT: The loaded images pre-converted to latents. Only available when a vae is connected</div></div></div></div><div vhs_title="Widgets" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Widgets: <div vhs_title="video" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">video: The video file to be loaded.<div style="font-size: 1em">You can also select an image to load it as a single frame</div><div style="font-size: 1em">This is a VHS_PATH input. When edited, it provides a list of possible valid files or directories</div><div style="font-size: 1em"><video preload="none" src=https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite/assets/4284322/729b7185-1fca-41d8-bc8d-a770bb2a5ce6 muted loop controls controlslist="nodownload noremoteplayback noplaybackrate" style="width: 0px; min-width: 100%" class="VHS_loopedvideo"></div><div style="font-size: 1em">The current top-most completion may be selected with Tab</div><div style="font-size: 1em">You can navigate up a directory by pressing Ctrl+B (or Ctrl+W if supported by browser)</div><div style="font-size: 1em">The filter on suggested file types can be disabled by pressing Ctrl+G.</div><div style="font-size: 1em">If converted to an input, this functions as a string</div></div></div><div vhs_title="force_rate" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">force_rate: Drops or duplicates frames so that the produced output has the target frame rate. Many motion models are trained on videos of a specific frame rate and will give better results if input matches that frame rate. If set to 0, all frames are returned. May give unusual results with inputs that have a variable frame rate like animated gifs. Reducing this value can also greatly reduce the execution time and memory requirements.</div></div><div vhs_title="force_size" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">force_size: Previously was used to provide suggested resolutions. Instead, custom_width and custom_height can be disabled by setting to 0.</div></div><div vhs_title="custom_width" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">custom_width: Allows for an arbitrary width to be entered, cropping to maintain aspect ratio if both are set</div></div><div vhs_title="custom_height" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">custom_height: Allows for an arbitrary height to be entered, cropping to maintain aspect ratio if both are set</div></div><div vhs_title="frame_load_cap" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">frame_load_cap: The maximum number of frames to load. If 0, all frames are loaded.</div></div><div vhs_title="skip_first_frames" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">skip_first_frames: A number of frames which are discarded before producing output.</div></div><div vhs_title="select_every_nth" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">select_every_nth: Similar to frame rate. Keeps only the first of every n frames and discard the rest. Has better compatibility with variable frame rate inputs such as gifs. When combined with force_rate, select_every_nth_applies after force_rate so the resulting output has a frame rate equivalent to force_rate/select_every_nth. select_every_nth does not apply to skip_first_frames</div></div><div vhs_title="format" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">format: Updates other widgets so that only values supported by the given format can be entered and provides recommended defaults.</div></div><div vhs_title="videopreview" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">videopreview: Displays a preview for the selected video input. Will only be shown if Advanced Previews is enabled. This preview will reflect the frame_load_cap, force_rate, skip_first_frames, and select_every_nth values chosen. If the video has audio, it will also be previewed when moused over. Additional preview options can be accessed with right click.</div></div></div></div></div>

# Input types
## Required
- video
    - The video input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- force_rate
    - The force_rate input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- custom_width
    - The custom_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- custom_height
    - The custom_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_load_cap
    - The frame_load_cap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- start_time
    - The start_time input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- meta_batch
    - The meta_batch input is used by this node during execution.
    - Comfy dtype: VHS_BatchManager
    - Python dtype: object
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- format
    - The format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Hidden
- force_size
    - The force_size input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- video_info
    - The video_info output is produced by this node.
    - Comfy dtype: VHS_VIDEOINFO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
