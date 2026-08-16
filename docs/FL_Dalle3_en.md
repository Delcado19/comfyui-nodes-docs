# Documentation
- Class name: FL_Dalle3
- Category: 🏵️Fill Nodes/GPT
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dummy_seed
    - The dummy_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- quality
    - The quality input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- style
    - The style input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- retry
    - The retry input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- auto_save
    - The auto_save input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- auto_save_dir
    - The auto_save_dir input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGES
    - The IMAGES output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- WIDTH
    - The WIDTH output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- HEIGHT
    - The HEIGHT output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- REVISED_PROMPTS
    - The REVISED_PROMPTS output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
