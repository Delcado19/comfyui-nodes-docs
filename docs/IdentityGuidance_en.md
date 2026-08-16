# Documentation
- Class name: IdentityGuidance
- Category: conditioning/flux2klein
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Flux.2Klein 9B Enhancement Nodes Suite

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- identity_latent
    - VAE-encoded reference image at full resolution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- strength
    - How hard to pull toward the reference each step. 0.3 = move 30% of the distance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - When to start correcting. 0.0 = beginning of denoising.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - When to stop correcting. 0.8 = last 20% runs freely for texture refinement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - adaptive: pulls only where prediction resembles reference. direct: pulls everywhere equally. channel_match: matches color/feature statistics without copying spatial content.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
