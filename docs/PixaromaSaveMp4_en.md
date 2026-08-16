# Documentation
- Class name: PixaromaSaveMp4
- Category: 👑 Pixaroma/🖼️ Image
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Save Mp4 Pixaroma - encode an IMAGE batch (and optional AUDIO) to a single H.264 mp4 with a built-in <video> preview right on the node body so you can watch the result without leaving ComfyUI.

Frames stream straight to ffmpeg's stdin (no temp PNG files); audio is muxed in as AAC 192k. Pairs with AudioReact Pixaroma but works with any source that produces frames + AUDIO.

The workflow is embedded in the saved mp4 (its comment metadata), so you can drag the video back into ComfyUI to restore the graph. Saving it always works; reading it back needs your ComfyUI to support dropping a video onto the canvas.

ffmpeg binary is auto-located: imageio-ffmpeg's bundled exe is preferred (no system install needed - 'pip install imageio-ffmpeg'), with ffmpeg on PATH as a fallback. yuv420p requires even width and height; the node surfaces a clear error rather than ffmpeg's opaque crash if dimensions are odd.

Encoder is hardcoded to libx264 / preset medium / CRF 19. Bring those back to INPUT_TYPES if a workflow needs per-clip control.

# Input types
## Required
- video_frames
    - Frame batch to encode. Wire Audio React Pixaroma's video_frames output here.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- fps
    - Output frame rate. Wire Audio React Pixaroma's fps output here so it always matches what produced the frames.
    - Comfy dtype: FLOAT
    - Python dtype: float
- filename_prefix
    - Filename stem. The node appends a 5-digit counter and .mp4 (e.g. Video_00001.mp4). Use '/' for subfolders, date tokens like %date:yyyy-MM-dd%, and node references like %Seed Pixaroma.seed% that print another node's field value into the name.
    - Comfy dtype: STRING
    - Python dtype: str
- save_mode
    - save: write to ComfyUI's output/ folder, kept across restarts. preview: write to ComfyUI's temp/ folder, auto-cleared on restart, so use it while iterating and you will not clutter output/. The in-node video preview works the same in both modes.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- trim_to_audio
    - Off (default): keep every video frame; the audio simply ends where it ends. On: end the video exactly at the audio's length (ffmpeg -shortest), for when the audio is the master (e.g. with Audio React). On can drop the last frame or two when the audio is slightly shorter than the video.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- audio
    - Optional audio track to mux into the mp4 as AAC 192k. Connect Audio React Pixaroma's audio output here.
    - Comfy dtype: AUDIO
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
