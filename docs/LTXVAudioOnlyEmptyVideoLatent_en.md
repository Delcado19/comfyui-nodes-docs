# Documentation
- Class name: LTXVAudioOnlyEmptyVideoLatent
- Category: Lightricks/audio
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Fixed minimal placeholder video latent for audio-only (text-to-audio) generation - a single 64x64 frame. LTX-2 needs a video latent at input index 0, but with LTXV Audio Only Model it is never attended to, so the dimensions are fixed (and hidden) to avoid confusion. Join it with the audio latent via LTXVConcatAVLatent.

# Input types
No inputs are defined in the live ComfyUI metadata.

# Output types
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
