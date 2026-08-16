# Documentation
- Class name: FL_VideoCropMask
- Category: 🏵️Fill Nodes/Utility
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- video
    - The video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- output_width
    - The output_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- output_height
    - The output_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- padding
    - The padding input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- smoothing_factor
    - The smoothing_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- cropped_video
    - The cropped_video output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- original_video
    - The original_video output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- crop_data
    - The crop_data output is produced by this node.
    - Comfy dtype: CROP_DATA
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
