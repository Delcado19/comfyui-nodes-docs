# Documentation
- Class name: RandomShapeGenerator
- Category: image/generators
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Generates images with random shapes for testing and prototyping

# Input types
## Required
- width
    - Width of the generated image in pixels
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the generated image in pixels
    - Comfy dtype: INT
    - Python dtype: int
- bg_color
    - Background color preset or random
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fg_color
    - Foreground shape color preset or random
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- shape_type
    - Type of shape to generate or random
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- seed
    - Random seed for reproducible shape generation
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- bg_color_override
    - Override background color with hex (#AABBCC) or RGB(r, g, b) format
    - Comfy dtype: STRING
    - Python dtype: str
- fg_color_override
    - Override foreground color with hex (#AABBCC) or RGB(r, g, b) format
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - Generated image with random shape
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bg_rgb
    - Background color as RGB/hex
    - Comfy dtype: STRING
    - Python dtype: str
- fg_rgb
    - Foreground color as RGB/hex
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
