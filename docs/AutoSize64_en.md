# Documentation
- Class name: AutoSize64
- Category: itsjustregi / SDXL Adherence
- Output node: False
- Repo Ref: https://github.com/regiellis/ComfyUI-SDXL-Adherence

ComfyUI nodes that improve SDXL prompt adherence and any-size/tiled VAE workflows.

# Input types
## Required
- size
    - Target megapixels (snapped to 64).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- image
    - Optional image to infer aspect ratio.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- dims_json
    - The dims_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/regiellis/ComfyUI-SDXL-Adherence)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
