# Documentation
- Class name: DA3GeometryToMesh
- Category: image/geometry estimation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Convert a depth map into a triangulated 3D mesh.

# Input types
## Required
- da3_geometry
    - The da3_geometry input is used by this node during execution.
    - Comfy dtype: DA3_GEOMETRY
    - Python dtype: object
- batch_index
    - Which image of a batch to convert. Per-image vertex counts differ so batches cannot be stacked.
    - Comfy dtype: INT
    - Python dtype: int
- decimation
    - Vertex stride. 1 = full resolution, 2 = half, etc.
    - Comfy dtype: INT
    - Python dtype: int
- discontinuity_threshold
    - Drop triangles whose 3x3 depth span exceeds this fraction. 0 = off.
    - Comfy dtype: FLOAT
    - Python dtype: float
- confidence_threshold
    - Exclude pixels whose per-image normalised confidence is below this value (0 = keep all, 1 = keep only the single most confident pixel). Used when the geometry has a confidence map (Small/Base models).
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_sky_mask
    - Exclude sky-probability pixels (sky >= 0.5) from the mesh. Used when the geometry has a sky map (Mono/Metric models).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- texture
    - Use the source image as a base color texture.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MESH
    - The MESH output is produced by this node.
    - Comfy dtype: MESH
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
