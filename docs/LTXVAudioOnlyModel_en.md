# Documentation
- Class name: LTXVAudioOnlyModel
- Category: Lightricks/audio
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Run the LTX-2 audio/video model in audio-only mode for text-to-audio. Skips the video stream and disables the audio<->video cross-attention, so the generated audio does not depend on the video latent. The sampler still needs a minimal dummy video latent (EmptyLTXVLatentVideo at 64x64 length 1, joined with LTXVConcatAVLatent); it is never attended to. Remove or bypass this node to restore normal joint audio+video generation.

# Input types
## Required
- model
    - The LTX-2 audio/video model to run in audio-only mode.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
