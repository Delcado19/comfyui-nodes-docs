# Documentation
- Class name: CropByBBox
- Category: itsjustregi / SDXL Adherence
- Output node: False
- Repo Ref: https://github.com/regiellis/ComfyUI-SDXL-Adherence

ComfyUI nodes that improve SDXL prompt adherence and any-size/tiled VAE workflows.

# Input types
## Required
- image
    - Image to crop (H×W×C or B×H×W×C).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bbox_json
    - BBox JSON: {x,y,w,h,W,H}.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- resize_back
    - Resize crop back to original content size w×h.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- clamp_to_bounds
    - Clamp crop rect to image bounds.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- feather
    - Soft edge radius in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- expand
    - Grow crop rect by N px in all directions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image_cropped
    - The image_cropped output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- info_json
    - The info_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/regiellis/ComfyUI-SDXL-Adherence)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
