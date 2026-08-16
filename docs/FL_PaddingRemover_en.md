# Documentation
- Class name: FL_PaddingRemover
- Category: 🏵️Fill Nodes/Image
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tolerance
    - The tolerance input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- min_content_size
    - The min_content_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- sides_trim
    - The sides_trim input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- top_bottom_trim
    - The top_bottom_trim input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- debug_view
    - The debug_view input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_gpu
    - The use_gpu input is used by this node during execution.
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
