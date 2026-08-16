# Documentation
- Class name: FL_ImageOverlay
- Category: 🏵️Fill Nodes/Image
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- base_image
    - The base_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- overlay_image
    - The overlay_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- x_offset
    - The x_offset input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- y_offset
    - The y_offset input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- alignment
    - The alignment input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resize_overlay
    - The resize_overlay input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- blend_mode
    - The blend_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- opacity
    - The opacity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_feather
    - The mask_feather input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- boundary_behavior
    - The boundary_behavior input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- show_preview
    - The show_preview input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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
