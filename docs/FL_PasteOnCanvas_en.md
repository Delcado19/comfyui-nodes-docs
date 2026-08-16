# Documentation
- Class name: FL_PasteOnCanvas
- Category: 🏵️Fill Nodes/Utility
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- canvas_width
    - The canvas_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- canvas_height
    - The canvas_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- background_red
    - The background_red input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- background_green
    - The background_green input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- background_blue
    - The background_blue input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- padding
    - The padding input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- resize_algorithm
    - The resize_algorithm input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- include_alpha
    - The include_alpha input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_full_mask
    - The use_full_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_preview
    - The show_preview input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bg_image_optional
    - The bg_image_optional input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

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
