# Documentation
- Class name: FastPreview
- Category: KJNodes/experimental
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Fast image preview using binary websocket, bypassing base64/JSON overhead.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- format
    - The format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_size
    - Maximum width or height for the preview. Images larger than this are downscaled before encoding.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- prompt_id
    - The prompt_id input is used by this node during execution.
    - Comfy dtype: PROMPT_ID
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
