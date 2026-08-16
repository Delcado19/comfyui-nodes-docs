# Documentation
- Class name: SaveVideo
- Category: video
- Output node: True
- Repo Ref: https://github.com/Blonicx/ComfyUI-Vid2Vid

Saves the input videos to your ComfyUI output directory.

# Input types
## Required
- video
    - The video to save.
    - Comfy dtype: VIDEO
    - Python dtype: object
- filename_prefix
    - The prefix for the file to save. This may include formatting information such as %date:yyyy-MM-dd% or %Empty Latent Image.width% to include values from nodes.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - The format to save the video as.
    - Comfy dtype: COMBO
    - Python dtype: object
- codec
    - The codec to use for the video.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
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
- video
    - The video output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Blonicx/ComfyUI-Vid2Vid)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
