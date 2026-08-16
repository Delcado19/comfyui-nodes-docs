# Documentation
- Class name: LTXVEmptyLatentAudio
- Category: model/latent/ltxv
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

LTXV Empty Latent Audio is a ComfyUI node registered by `comfy_extras.nodes_lt_audio`. The live metadata did not provide a longer description.

# Input types
## Required
- frames_number
    - Number of frames.
    - Comfy dtype: INT
    - Python dtype: int
- frame_rate
    - Number of frames per second.
    - Comfy dtype: FLOAT,INT
    - Python dtype: object
- batch_size
    - The number of latent audio samples in the batch.
    - Comfy dtype: INT
    - Python dtype: int
- audio_vae
    - The Audio VAE model to get configuration from.
    - Comfy dtype: VAE
    - Python dtype: object

# Output types
- Latent
    - The Latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
