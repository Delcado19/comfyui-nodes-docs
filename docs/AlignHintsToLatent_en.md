# Documentation
- Class name: AlignHintsToLatent
- Category: itsjustregi / SDXL Adherence
- Output node: False
- Repo Ref: https://github.com/regiellis/ComfyUI-SDXL-Adherence

ComfyUI nodes that improve SDXL prompt adherence and any-size/tiled VAE workflows.

# Input types
## Required
- latent
    - Latent whose W×H defines the target size.
    - Comfy dtype: LATENT
    - Python dtype: dict
- image
    - Hint image to align (B×H×W×C or H×W×C).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- snap_mode
    - How to match the latent size: pad, downscale, resize, or crop.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pad_kind
    - Padding mode for pad-up/downscale residual.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- pad_value
    - Constant pad value (0..255).
    - Comfy dtype: INT
    - Python dtype: int
- keep_alpha
    - Preserve alpha channel if present.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image_aligned
    - The image_aligned output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bbox_json
    - The bbox_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/regiellis/ComfyUI-SDXL-Adherence)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
