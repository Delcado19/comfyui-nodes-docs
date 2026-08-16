# Documentation
- Class name: FL_RunwayAct2
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
- character_type
    - The character_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ratio
    - The ratio input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- runway_api_version
    - The runway_api_version input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- character_video
    - The character_video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- character_image
    - The character_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_video
    - The reference_video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- body_control
    - The body_control input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- expression_intensity
    - The expression_intensity input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- public_figure_threshold
    - The public_figure_threshold input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- polling_interval
    - The polling_interval input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_polling_attempts
    - The max_polling_attempts input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- timeout_sdk
    - The timeout_sdk input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- timeout_download
    - The timeout_download input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- video_frames
    - The video_frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- status_text
    - The status_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
