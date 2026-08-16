# Documentation
- Class name: AddLayer
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Add Layer is a ComfyUI node registered by `comfy_extras.nodes_compositor`. The live metadata did not provide a longer description.

# Input types
## Required
- image
    - Layer content at its native size. A batch expands to consecutive layers.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- layers
    - Layer stack to append to. Leave unconnected to start a new stack.
    - Comfy dtype: LAYERS
    - Python dtype: object
- mask
    - Transparency mask for this layer. Masked areas (value 1) become transparent, multiplying with any alpha channel the image already carries.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- name
    - Layer name shown in the compositor editor.
    - Comfy dtype: STRING
    - Python dtype: str
- x
    - Initial horizontal placement on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - Initial vertical placement on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- opacity
    - Initial layer opacity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_mode
    - Initial blend mode, applied against the layers below. On the bottom layer over the default transparent background, non-normal modes produce transparency.
    - Comfy dtype: COMBO
    - Python dtype: object
- rotation
    - Initial rotation in degrees, clockwise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - Initial display width. 0 keeps the image's native width.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Initial display height. 0 keeps the image's native height.
    - Comfy dtype: INT
    - Python dtype: int
- z_index
    - Stacking override. Layers are stable-sorted by z_index; equal values keep their list order.
    - Comfy dtype: INT
    - Python dtype: int
- flip_h
    - Flip the layer horizontally.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- flip_v
    - Flip the layer vertically.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- LAYERS
    - The layer stack with this layer appended.
    - Comfy dtype: LAYERS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
