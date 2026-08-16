# Documentation
- Class name: FL_PixelArtShader
- Category: 🏵️Fill Nodes/VFX
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- envelope_json
    - The envelope_json input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- blend_intensity
    - The blend_intensity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- invert
    - The invert input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pixel_size
    - The pixel_size input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_depth
    - The color_depth input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_aspect_ratio
    - The use_aspect_ratio input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- palette_image
    - The palette_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- palette_colors
    - The palette_colors input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
