# Documentation
- Class name: PixaromaTextOverlay
- Category: 👑 Pixaroma/📝 Notes & Overlay
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Adds a single styled text overlay on top of an input image. Tune font, size, weight, italic, alignment, line height, letter spacing, opacity, rotation, position, text color and an optional background bar directly on the node. Click 'Open Text Editor' for a fullscreen canvas with drag-to-move, drag-corner-to-scale, drag-handle-to-rotate, snap guides, align-to-canvas buttons, Fit W / Fit H, undo/redo and Save-to-Disk. Wire the optional 'text' input to override the panel text from any upstream STRING source. The first run on a fresh node auto-centers the text on the actual image dimensions.

# Input types
## Required
- image
    - Required upstream image. Text is overlaid on this image at render time.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- text
    - Optional STRING input. When wired, replaces the panel's text at render time (the textarea on the node is greyed out while the wire is connected to remind you).
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- TextOverlayState
    - The TextOverlayState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The input image with your text drawn on top.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
