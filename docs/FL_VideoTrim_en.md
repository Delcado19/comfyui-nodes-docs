# Documentation
- Class name: FL_VideoTrim
- Category: 🏵️Fill Nodes/Video
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- trim_start
    - The trim_start input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- trim_end
    - The trim_end input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- trimmed_video
    - The trimmed_video output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- start_frames
    - The start_frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- end_frames
    - The end_frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
