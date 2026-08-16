# Documentation
- Class name: LTXVReferenceAudio
- Category: model/conditioning/ltxv
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Set reference audio for ID-LoRA speaker identity transfer. Encodes a reference audio clip into the conditioning and optionally patches the model with identity guidance (extra forward pass without reference, amplifying the speaker identity effect).

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- reference_audio
    - Reference audio clip whose speaker identity to transfer. ~5 seconds recommended (training duration). Shorter or longer clips may degrade voice identity transfer.
    - Comfy dtype: AUDIO
    - Python dtype: object
- audio_vae
    - LTXV Audio VAE for encoding.
    - Comfy dtype: VAE
    - Python dtype: object
- identity_guidance_scale
    - Strength of identity guidance. Runs an extra forward pass without reference each step to amplify speaker identity. Set to 0 to disable (no extra pass).
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Start of the sigma range where identity guidance is active.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End of the sigma range where identity guidance is active.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
