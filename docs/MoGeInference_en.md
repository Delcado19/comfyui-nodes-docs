# Documentation
- Class name: MoGeInference
- Category: image/geometry estimation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Run MoGe on a single image to estimate depth and geometry.

# Input types
## Required
- moge_model
    - The moge_model input is used by this node during execution.
    - Comfy dtype: MOGE_MODEL
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resolution_level
    - 0 = fastest, 9 = most detail.
    - Comfy dtype: INT
    - Python dtype: int
- fov_x_degrees
    - Horizontal field of view of the source camera. Sets the focal length used to unproject the depth map into 3D. 0 = auto-recover from the predicted points.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - Images per inference call. Lower if you OOM on a long video / image set.
    - Comfy dtype: INT
    - Python dtype: int
- force_projection
    - The force_projection input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- apply_mask
    - Set masked-out (sky / invalid) pixels to inf in points and depth so meshing culls them. Disable to keep the raw predicted geometry everywhere; the mask is still returned separately.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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
