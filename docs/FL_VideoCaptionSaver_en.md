# Documentation
- Class name: FL_VideoCaptionSaver
- Category: 🏵️Fill Nodes/Captioning
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- folder_name
    - The folder_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- caption_text
    - The caption_text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- video_name
    - The video_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- format
    - The format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quality
    - The quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- overwrite
    - The overwrite input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
