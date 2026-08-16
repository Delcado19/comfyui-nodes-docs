# Documentation
- Class name: DA3Inference
- Category: image/geometry estimation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Run Depth Anything 3 on an image. In multi-view mode each image is treated as a separate view of the same scene.

# Input types
## Required
- da3_model
    - The da3_model input is used by this node during execution.
    - Comfy dtype: DA3_MODEL
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resolution
    - Resolution the model runs at (longest side, multiple of 14).
Lower = faster / less VRAM.
Higher = more detail.
Output is upsampled back to the original size.
    - Comfy dtype: INT
    - Python dtype: int
- resize_method
    - upper_bound_resize: scale so the longest side = resolution (caps memory, default).
lower_bound_resize: scale so the shortest side = resolution (preserves more detail on tall/wide images, uses more memory).
    - Comfy dtype: COMBO
    - Python dtype: object
- mode
    - mono: single view image (works with any model variant).
multiview: all images processed together for geometric consistency + camera pose (for Small/Base models only).
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- da3_geometry
    - Dictionary of non-normalized tensors.
Always has the keys: depth, image, mode.
Optional keys: sky (for Mono/Metric), confidence (for Small/Base), extrinsics + intrinsics (for multi-view).
    - Comfy dtype: DA3_GEOMETRY
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
