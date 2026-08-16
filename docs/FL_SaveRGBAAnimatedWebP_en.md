# Documentation
- Class name: FL_SaveRGBAAnimatedWebP
- Category: 🏵️Fill Nodes/Image
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- images_rgb
    - The images_rgb input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- images_alpha
    - The images_alpha input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lossless
    - The lossless input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- quality
    - The quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
