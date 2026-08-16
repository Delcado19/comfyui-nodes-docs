# Documentation
- Class name: LTXVSetAudioRefTokens
- Category: Lightricks/IC-LoRA
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Provides speaker identity context for audio generation by attaching reference audio tokens to the conditioning. The tokens are prepended with negative temporal positions so the model treats them as context rather than generation targets.

# Input types
## Required
- positive
    - Positive conditioning to attach the reference audio tokens to.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - Negative conditioning to attach the reference audio tokens to.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- audio_latent
    - Encoded audio latent from LTXV Audio VAE Encode.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- positive
    - Positive conditioning with reference audio tokens attached.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - Negative conditioning with reference audio tokens attached.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- frozen_audio
    - Audio latent with noise_mask=0, fully frozen during denoising.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
