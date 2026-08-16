# Documentation
- Class name: MoGePointMapToMesh
- Category: image/geometry estimation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Convert a MoGe point map into a 3D mesh.

# Input types
## Required
- moge_geometry
    - The moge_geometry input is used by this node during execution.
    - Comfy dtype: MOGE_GEOMETRY
    - Python dtype: object
- batch_index
    - Which image of a batched MoGe geometry to mesh. Per-image vertex counts differ, so batches can't be stacked into a single MESH.
    - Comfy dtype: INT
    - Python dtype: int
- decimation
    - Vertex stride; 1 = full resolution.
    - Comfy dtype: INT
    - Python dtype: int
- discontinuity_threshold
    - Drop pixels whose 3x3 depth span exceeds this fraction. 0 = off.
    - Comfy dtype: FLOAT
    - Python dtype: float
- texture
    - Carry the source image through as the baseColor texture.
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
