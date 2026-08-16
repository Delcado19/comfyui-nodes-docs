# Documentation
- Class name: ImageCompositor
- Category: image
- Output node: True
- Repo Ref: https://github.com/CY-CHENYUE/ComfyUI-ImageCompositionCY

Real-time multi-image composition node for ComfyUI with interactive canvas editor

# Input types
## Required
- layers
    - Layer stack to composite; build it with Add Layer. Items are stacked by z_index, batch frames inside an item expand to consecutive layers, and item placement, opacity, and blend mode define the initial composition. Without an explicit document canvas the size is a best-effort maximum extent of the placed layers. A saved composition that matches the current inputs takes priority.
    - Comfy dtype: LAYERS
    - Python dtype: object
- compositor
    - Layered composition saved by the compositor editor.
    - Comfy dtype: COMPOSITOR
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- IMAGE
    - Composited image. Carries an alpha channel when the composite has transparent areas (e.g. hidden background), otherwise plain RGB.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - Transparency of the composite (1 = fully transparent). All zeros when the composite is opaque.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/CY-CHENYUE/ComfyUI-ImageCompositionCY)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
