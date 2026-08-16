# Documentation
- Class name: RemoveBackground
- Category: image/background removal
- Output node: False
- Repo Ref: https://github.com/DareFail/ComfyUI-Roboflow

Generates a foreground mask to remove the background from an image using a background removal model.

# Input types
## Required
- bg_removal_model
    - Background removal model used to generate the mask
    - Comfy dtype: BACKGROUND_REMOVAL
    - Python dtype: object
- image
    - Input image to remove the background from
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- mask
    - Generated foreground mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/DareFail/ComfyUI-Roboflow)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
