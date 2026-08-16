# Documentation
- Class name: FL_InpaintCrop
- Category: 🏵️Fill Nodes/Utility
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- context_factor
    - The context_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- target_size
    - The target_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- resize_mode
    - The resize_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- force_square
    - The force_square input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- divisible_by
    - The divisible_by input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fill_mask_holes
    - The fill_mask_holes input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_gpu
    - The use_gpu input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- optional_context_mask
    - The optional_context_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- stitch
    - The stitch output is produced by this node.
    - Comfy dtype: STITCH
    - Python dtype: object
- cropped_image
    - The cropped_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_mask
    - The cropped_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
