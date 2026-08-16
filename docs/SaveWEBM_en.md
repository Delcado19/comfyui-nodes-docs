# Documentation
- Class name: SaveWEBM
- Category: video
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Save WEBM is a ComfyUI node registered by `comfy_extras.nodes_video`. The live metadata did not provide a longer description.

# Input types
## Required
- images
    - RGBA images are saved with their alpha channel as transparency (vp9 codec only).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- codec
    - The codec input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crf
    - Higher crf means lower quality with a smaller file size, lower crf means higher quality higher filesize.
    - Comfy dtype: FLOAT
    - Python dtype: float
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
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
