# Documentation
- Class name: PixaromaSaveVideo
- Category: 👑 Pixaroma/🖼️ Image
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Save Video Pixaroma - save an mp4 to any folder on your computer, not just ComfyUI's output folder, with the same filename tools as Save Image Pixaroma and a player built into the node. Type or paste a folder path, or click Browse to pick one with your system's own folder dialog; leave the field empty to use the output folder. The filename field supports tokens and shows a live 'Will save as' preview of the exact file that will be written. Tokens: %input% (the wired name input), %date:yyyy-MM-dd% (and any date or time format), %counter% (auto-incrementing, never overwrites), %width%, %height%, %fps%, %frames%, %duration%, plus node references like %Seed Pixaroma.seed%. Use / in the name to create subfolders.

Two formats. MP4 is H.264 at 8-bit and plays everywhere, which is why it is the default. MP4 HQ is H.265 at 10-bit: gradients like skies and fades stay smooth instead of banding, and the file is roughly half the size, but it needs a reasonably recent player. Open the settings with the gear on the node or by right-clicking it for quality, colour depth, date style, counter digits, trim to audio, workflow embedding, and which buttons the node shows.

The workflow is embedded in the saved mp4, so you can drag the video back into ComfyUI to rebuild the graph. Saving it always works; reading it back needs your ComfyUI to support dropping a video onto the canvas.

The Save and Preview pills switch between writing to your folder on every run and writing to ComfyUI's temp folder instead, which is cleared on restart, so you can iterate without filling your folder. ffmpeg is found automatically: it prefers the one bundled with imageio-ffmpeg (pip install imageio-ffmpeg, no system setup) and falls back to ffmpeg on your PATH. Both formats need even width and height, and the node says so clearly rather than letting ffmpeg fail.

# Input types
## Required
- video_frames
    - The frames to encode, as an image batch. Wire a video source, an AudioReact Pixaroma video_frames output, or any node that produces a batch of images. They must be RGB and have even width and height.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- fps
    - Frames per second for the saved video. Wire the fps output of whatever produced the frames so the two always agree, or type a number. Also available in the filename as the %fps% token.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- audio
    - Optional sound track, mixed into the mp4 as AAC 192k. If the audio cannot be read the video is still saved, just without it. Turn on 'Trim to audio' in the settings to end the video where the audio ends.
    - Comfy dtype: AUDIO
    - Python dtype: object
- name
    - Optional text used by the %input% token in the filename, for example wire the filename output of a loader here to keep the original name. To save into a folder named after this text, put a slash after the token: %input%/clip_%counter%.
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- SaveVideoState
    - The SaveVideoState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
