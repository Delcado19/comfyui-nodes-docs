# Documentation
- Class name: SplatToMesh
- Category: 3d/splat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Extract a coloured mesh from a gaussian splat.

# Input types
## Required
- splat
    - The splat input is used by this node during execution.
    - Comfy dtype: SPLAT
    - Python dtype: object
- resolution
    - Density-grid resolution along the longest axis. Higher = finer surface, more VRAM/time (grows with resolution^3).
    - Comfy dtype: INT
    - Python dtype: int
- kernel
    - Max splat half-width in voxels. Each gaussian is rasterized over a window sized to its own 3-sigma, capped here - small surfels stay cheap, large ones aren't truncated. Raise if sparse splats leave gaps.
    - Comfy dtype: INT
    - Python dtype: int
- smooth
    - Taubin mesh-smoothing iterations. Smooths the surface without shrinking it (volume-preserving), unlike blurring the density. 0 = raw surface.
    - Comfy dtype: INT
    - Python dtype: int
- level
    - Iso-surface level. Auto-picked by Otsu; this biases it (1.0 = auto, lower = fatter/more-connected surface, higher = thinner/tighter).
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_component
    - Drop connected components smaller than this many vertices (0 = keep all). Removes detached floater blobs and the inner shell of the double wall.
    - Comfy dtype: INT
    - Python dtype: int
- min_opacity
    - Ignore gaussians fainter than this before meshing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_sharpen
    - Crisp up the vertex texture: 1.0 = physically-correct blend; higher biases each voxel's colour toward its dominant gaussian instead of averaging neighbours (de-smears the texture). Colour only - geometry is unchanged.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- mesh
    - The mesh output is produced by this node.
    - Comfy dtype: MESH
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
