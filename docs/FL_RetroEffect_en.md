# Documentation
- Class name: FL_RetroEffect
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
- color_offset
    - The color_offset input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scanline_strength
    - The scanline_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vignette_strength
    - The vignette_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_strength
    - The noise_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

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
