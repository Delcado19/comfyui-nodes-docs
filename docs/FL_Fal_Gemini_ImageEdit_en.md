# Documentation
- Class name: FL_Fal_Gemini_ImageEdit
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
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- num_images
    - The num_images input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_format
    - The output_format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sync_mode
    - The sync_mode input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_retries
    - The max_retries input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_3
    - The image_3 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_4
    - The image_4 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_5
    - The image_5 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_6
    - The image_6 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_7
    - The image_7 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_8
    - The image_8 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_9
    - The image_9 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_10
    - The image_10 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- enable_web_search
    - The enable_web_search input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_urls
    - The image_urls output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- description
    - The description output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- status_msg
    - The status_msg output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
