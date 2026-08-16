# Documentation
- Class name: PixaromaTextWatermark
- Category: 👑 Pixaroma/📝 Notes & Overlay
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Stamps a styled text watermark onto an image or a whole batch. Pick a 9-point anchor (corner, edge or center) plus a margin inset and the watermark lands in the same spot on every image regardless of its size. Size can be a fixed pixel value or a percentage of each image's width, so mixed-size batches stay visually consistent. Tune font, weight, italic, color, opacity, rotation and an optional background bar on the node. Wire the optional 'text' input to drive the watermark text from an upstream STRING source. No fullscreen editor - it is a configure-and-run node.

# Input types
## Required
- image
    - Image or batch to watermark. The watermark is drawn on top at render time.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- text
    - Optional STRING input. When wired, it replaces the watermark text typed on the node (the textbox greys out while connected).
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- TextWatermarkState
    - The TextWatermarkState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The input image(s) with the watermark drawn on top.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
