# Documentation
- Class name: MoGePanoramaInference
- Category: image/geometry estimation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Run MoGe on an equirectangular panorama by splitting it into 12 perspective views, running inference on each, and merging the results into a single depth map.

# Input types
## Required
- moge_model
    - The moge_model input is used by this node during execution.
    - Comfy dtype: MOGE_MODEL
    - Python dtype: object
- image
    - Equirectangular panorama (any aspect).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resolution_level
    - Per-view detail (0 = fastest, 9 = most detailed).
    - Comfy dtype: INT
    - Python dtype: int
- split_resolution
    - Resolution of each perspective split.
    - Comfy dtype: INT
    - Python dtype: int
- merge_resolution
    - Long-side resolution of the merged equirect distance map.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Views per inference batch (12 splits total).
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- moge_geometry
    - The moge_geometry output is produced by this node.
    - Comfy dtype: MOGE_GEOMETRY
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
