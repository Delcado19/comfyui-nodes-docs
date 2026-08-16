# Documentation
- Class name: RenderSplat
- Category: 3d/splat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Render a gaussian splat as an image with an anisotropic EWA rasterizer (oriented elliptical splats, antialiased, depth-sorted front-to-back). The camera comes from a camera_info input (Load / Preview 3D, or a Create Camera Info node); leave it empty to auto-frame the splat. Set frames greater than 1 for a turntable batch of images to feed a Video node.

# Input types
## Required
- splat
    - The splat input is used by this node during execution.
    - Comfy dtype: SPLAT
    - Python dtype: object
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frames
    - -1, 0, 1 = single still image; >1 = turntable, the camera orbits over a full 360 turn (works with any camera_info). Negative value orbits the other way.
    - Comfy dtype: INT
    - Python dtype: int
- splat_scale
    - Multiplier on each splat's projected footprint (lower = crisper points, higher = softer/fuller surface).
    - Comfy dtype: FLOAT
    - Python dtype: float
- sharpen
    - Sharpen overlapping splats: 1.0 = physically-correct blend; higher biases each pixel toward its dominant (nearest) splat for crisper texture, without shrinking splats or opening gaps. Non-physical above 1.
    - Comfy dtype: FLOAT
    - Python dtype: float
- headlight_shading
    - Diffuse shading from a light at the camera (headlight), using the splat surfel normals: darkens surfaces that turn away from view to reveal form/curvature. 0 = flat albedo, 1 = strongest shading.
    - Comfy dtype: FLOAT
    - Python dtype: float
- opacity_threshold
    - Cull gaussians with opacity below this (removes faint floaters).
    - Comfy dtype: FLOAT
    - Python dtype: float
- render_style
    - What the image output shows: color, clay (neutral-albedo shaded), depth (near=bright), normal (OpenGL normal map).
    - Comfy dtype: COMBO
    - Python dtype: object
- background
    - The background input is used by this node during execution.
    - Comfy dtype: COLOR
    - Python dtype: object
## Optional
- bg_image
    - Optional background plate composited behind the splat (overrides the solid background colour). Resized to the render size; a batch is used per frame, a single image for all. color/clay only.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- camera_info
    - Camera to render from - a Load3D / Preview3D camera or a Create Camera Info node. If empty, the splat is auto-framed from a default 3/4 view.
    - Comfy dtype: LOAD3D_CAMERA
    - Python dtype: object

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
