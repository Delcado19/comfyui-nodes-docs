# Documentation
- Class name: iToolsImageAdjust
- Category: iTools
- Output node: False
- Repo Ref: https://github.com/MohammadAboulEla/ComfyUI-iTools

Upload an image, right click to paste image from clipboard, or connect one from the workflow, then use the brightness and contrast sliders to adjust it. A connected IMAGE input takes priority over a manually uploaded image.

# Input types
## Required
- widget_state
    - The widget_state input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image
    - Optional IMAGE from another node. Takes priority over the uploaded image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/MohammadAboulEla/ComfyUI-iTools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
