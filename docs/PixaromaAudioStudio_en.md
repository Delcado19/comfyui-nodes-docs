# Documentation
- Class name: PixaromaAudioStudio
- Category: 👑 Pixaroma/🎨 Editors
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

AudioReact Pixaroma - turn a single image into an audio-reactive video. Open the fullscreen editor on the node to scrub the audio, pick a motion mode (15 options: Pulse Zoom, Camera Shake, Glitch, Pinch, Wave, Tilt, Pixelate, RGB Split, and more), and stack up to 8 overlay effects (chroma shift, bloom, vignette, hue shift, cinematic teal/orange grade, letterbox, scanlines, film grain). The live WebGL preview reacts to the beat in real time as you drag.

No extra models needed. Pairs with Save Mp4 Pixaroma to encode the result straight to MP4 with the audio muxed in. Requires WebGL2.

Both inputs are optional - you can wire upstream IMAGE / AUDIO from any source, or load them inline inside the editor (drag-drop or pick file). Inline picks override upstream wires until you toggle the inline-pin off.

# Input types
## Optional
- image
    - Optional upstream image source. If wired, used as the still frame for the motion / overlay pipeline. If unwired, the editor's inline-loaded image is used. The 'inline-pin' toggle in the editor lets a fresh in-editor upload override the upstream wire.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - Optional upstream audio source that drives the per-frame motion / overlay envelopes. Same dual-source pattern as image: upstream wins by default, but an inline-loaded audio (drag-drop a WAV/MP3/OGG into the editor) overrides upstream when its inline-pin is toggled on.
    - Comfy dtype: AUDIO
    - Python dtype: object
## Hidden
- studio_json
    - The studio_json input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- video_frames
    - The rendered animation as a batch of image frames. Wire to Save Mp4 Pixaroma or a preview.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - The audio track, passed through so you can mux it onto the video downstream.
    - Comfy dtype: AUDIO
    - Python dtype: object
- fps
    - Frames per second of the render.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
