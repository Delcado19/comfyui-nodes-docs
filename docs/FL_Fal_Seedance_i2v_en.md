# Documentation
- Class name: FL_Fal_Seedance_i2v
- Category: 🏵️Fill Nodes/AI
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- cut_prompt_1
    - The cut_prompt_1 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- cut_prompt_2
    - The cut_prompt_2 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- cut_prompt_3
    - The cut_prompt_3 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- cut_prompt_4
    - The cut_prompt_4 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- camera_fixed
    - The camera_fixed input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frames
    - The frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- video_url
    - The video_url output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- status_message
    - The status_message output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
