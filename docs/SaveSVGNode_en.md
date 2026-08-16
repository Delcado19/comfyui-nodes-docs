# Documentation
- Class name: SaveSVGNode
- Category: image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Save SVG files on disk.

# Input types
## Required
- svg
    - The svg input is used by this node during execution.
    - Comfy dtype: SVG
    - Python dtype: object
- filename_prefix
    - The prefix for the file to save. This may include formatting information such as %date:yyyy-MM-dd% or %Empty Latent Image.width% to include values from nodes.
    - Comfy dtype: STRING
    - Python dtype: str
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
- svg
    - The svg output is produced by this node.
    - Comfy dtype: SVG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
