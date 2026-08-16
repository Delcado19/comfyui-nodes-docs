# Documentation
- Class name: Flux2KleinMaskRefController
- Category: conditioning/flux2klein
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Flux.2Klein 9B Enhancement Nodes Suite

# Input types
## Required
- conditioning
    - The conditioning input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- strength
    - Attenuation strength in the BLACK regions of the mask. 1.0 = black regions multiplied by 0 (full attenuation). 0.5 = black regions kept at 50% of ref strength. 0.0 = mask ignored, ref passes through everywhere.
    - Comfy dtype: FLOAT
    - Python dtype: float
- invert_mask
    - Flip black/white. Enable if you painted the area you want attenuated rather than preserved.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- feather
    - Gaussian blur radius (in latent pixels) on mask edges. 0 = hard edges.
    - Comfy dtype: INT
    - Python dtype: int
- reference_index
    - Which reference latent to attenuate when multiple are connected (0 = first).
    - Comfy dtype: INT
    - Python dtype: int
- debug
    - The debug input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
