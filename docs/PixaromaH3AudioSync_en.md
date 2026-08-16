# Documentation
- Class name: PixaromaH3AudioSync
- Category: 👑 Pixaroma/🎵 Audio
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Makes a MiniMax H3 video sing the track you give it, instead of the meaningless sound the model would invent on its own. Put it between your latent and your sampler.

H3 is unusual: it creates the picture and the sound at the same time, as one thing. That is why you cannot simply mute its audio and lay your own song on top afterwards, because the mouth was never moving to your song in the first place. This node drops your recording into the sound half and holds it still, so the only thing left for the model to decide is the picture that fits it.

It works out how long the clip is by itself, so you never type a duration. If your track is shorter than the clip the node fills the rest with silence or loops it, whichever you chose, and says so on the node. If the clip is longer than about 15 seconds it warns you before the render rather than after, because H3 was only trained to about that length.

This node only works with MiniMax H3. Find it by searching for h3, minimax, lipsync, sync, or music video.

# Input types
## Required
- model
    - Your MiniMax H3 model. It passes straight through untouched.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latent
    - The joined picture-and-sound latent from an H3 node, such as Empty MiniMax H3 AV Latent or MiniMax H3 Image to Video.
    - Comfy dtype: LATENT
    - Python dtype: dict
- audio_vae
    - H3's audio VAE, the same one the H3 conditioning node uses.
    - Comfy dtype: VAE
    - Python dtype: object
- track
    - The real recording you want the video to perform: a song, a line of dialogue, anything. Trim it first with Load Audio Pixaroma if you only want part of it.
    - Comfy dtype: AUDIO
    - Python dtype: object
## Hidden
- H3SyncState
    - The H3SyncState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - Your model, unchanged. Wire it on to the sampler so this node sits in the chain instead of being wired around.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latent
    - The latent with your track locked into its sound half. Wire this into the sampler.
    - Comfy dtype: LATENT
    - Python dtype: dict
- audio
    - Your track cut to exactly the length of the clip, ready for the save node so the finished file has picture and sound the same length.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
