# Documentation
- Class name: FastPreviewBatch
- Category: KJNodes/experimental
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Encodes an image batch as an all-I-frame H.264 MP4 thumbnail strip and shows it as an interactive grid. Click a tile to enlarge with prev/next browsing. Avoids materializing N PNGs.

# Input types
## Required
- input
    - Image or mask batch to preview.
    - Comfy dtype: IMAGE,MASK
    - Python dtype: object
- max_thumb_size
    - Detail-view (mp4) thumbnail max side. Strip thumbs for the grid are auto-capped at 256.
    - Comfy dtype: INT
    - Python dtype: int
- crf
    - H.264 CRF. Lower = higher quality / larger file.
    - Comfy dtype: INT
    - Python dtype: int
- max_grid_frames
    - If batch exceeds this, frames are stride-sampled evenly.
    - Comfy dtype: INT
    - Python dtype: int
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
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
