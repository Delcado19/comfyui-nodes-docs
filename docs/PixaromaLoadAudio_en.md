# Documentation
- Class name: PixaromaLoadAudio
- Category: 👑 Pixaroma/🎵 Audio
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Loads a sound file and hands on the part of it you choose. The node draws the whole waveform so you can see where the loud parts are, and you drag a window across it to pick your moment: no counting seconds in your head, no cutting the file up in another program first.

Wire the seconds output of Duration Pixaroma into the seconds input and the window is exactly as long as the video you are about to make, so the picture and the sound cannot drift apart. The selection resizes the moment you connect it, before you run anything. Leave that input empty and you get the whole file, or a length you set in the node's settings.

If your window runs off the end of the file, the node either fills the rest with silence or loops back to the start, whichever you chose in the settings, and it tells you it did.

Works with any model. Find it by searching for audio, sound, music, song, wav, mp3, or trim.

# Input types
## Optional
- seconds
    - How many seconds to take, normally wired from the seconds output of Duration Pixaroma. Leave it unconnected to use the whole file or the length set in this node's settings.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Hidden
- LoadAudioState
    - The LoadAudioState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- audio
    - The piece of the file you selected, ready to wire into a save node, a sync node, or anything else that takes audio.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
