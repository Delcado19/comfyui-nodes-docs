# Documentation
- Class name: FL_GPT_Image1
- Category: 🏵️Fill Nodes/GPT
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- size
    - The size input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quality
    - The quality input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- background
    - The background input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_format
    - The output_format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- output_compression
    - The output_compression input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- moderation
    - The moderation input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- API Response
    - The API Response output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
