# Documentation
- Class name: FL_AnimeLineExtractor
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
- line_threshold
    - The line_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- line_width
    - The line_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- detail_level
    - The detail_level input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_reduction
    - The noise_reduction input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- invert_output
    - The invert_output input is used by this node during execution.
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
