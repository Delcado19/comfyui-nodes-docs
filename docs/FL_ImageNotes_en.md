# Documentation
- Class name: FL_ImageNotes
- Category: 🏵️Fill Nodes/Image
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- bar_height
    - The bar_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- text_size
    - The text_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- border
    - The border input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- word_wrap
    - The word_wrap input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- bar_position
    - The bar_position input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

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
