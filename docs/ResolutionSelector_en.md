# Documentation
- Class name: ResolutionSelector
- Category: utilities
- Output node: False
- Repo Ref: https://github.com/comfy-deploy/comfyui-llm-toolkit

Calculate width and height from aspect ratio and megapixel target. Useful for setting up Empty Latent Image dimensions.

# Input types
## Required
- aspect_ratio
    - The aspect ratio for the output dimensions.
    - Comfy dtype: COMBO
    - Python dtype: object
- megapixels
    - Target total megapixels. 1.0 MP ≈ 1024x1024 for square.
    - Comfy dtype: FLOAT
    - Python dtype: float
- multiple
    - Nearest multiple of the result to set the selected resolution to.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - Calculated width in pixels multiplied by the selected multiple.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Calculated height in pixels multiplied by the selected multiple.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfy-deploy/comfyui-llm-toolkit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
