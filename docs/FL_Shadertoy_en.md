# Documentation
- Class name: FL_Shadertoy
- Category: 🏵️Fill Nodes/VFX
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_count
    - The frame_count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- source
    - The source input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- channel_0
    - The channel_0 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- channel_1
    - The channel_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- channel_2
    - The channel_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- channel_3
    - The channel_3 input is used by this node during execution.
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
