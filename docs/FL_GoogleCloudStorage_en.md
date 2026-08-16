# Documentation
- Class name: FL_GoogleCloudStorage
- Category: 🏵️Fill Nodes/Google Drive
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bucket_name
    - The bucket_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- folder_path
    - The folder_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- file_prefix
    - The file_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- file_format
    - The file_format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- jpg_quality
    - The jpg_quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- compile_video
    - The compile_video input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- video_fps
    - The video_fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video_codec
    - The video_codec input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- video_quality
    - The video_quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- credentials_json
    - The credentials_json input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- make_public
    - The make_public input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- metadata
    - The metadata input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- status
    - The status output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- urls
    - The urls output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- error_message
    - The error_message output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
