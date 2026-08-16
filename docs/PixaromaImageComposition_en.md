# Documentation
- Class name: PixaromaImageComposition
- Category: 👑 Pixaroma/🎨 Editors
- Output node: True
- Repo Ref: https://github.com/pixaroma/ComfyUI-Pixaroma

Image Composer Pixaroma - combine and arrange multiple images on a layered canvas. Drop an image onto the closed node body to add it as a new layer (opens the editor and stacks the dropped image on top of any existing layers, never replacing). Inside the fullscreen editor you can also add layers via drag-drop, paste from clipboard, or wire upstream IMAGE inputs into placeholder slots, then move / scale / rotate them with handles, and apply per-layer effects: opacity, blend modes (Normal, Multiply, Screen, Overlay, Darken, Lighten, Color Dodge, Color Burn, Hard Light, Soft Light, Difference, Exclusion, Hue, Saturation, Color, Luminosity), Gaussian blur, and AI background removal (rembg-powered, picks the best installed model: birefnet -> isnet -> u2net auto-fallback).

Eraser tool lets you mask any layer non-destructively. Per-layer blur uses a quadratic curve (slider 0-100 -> 0-50 px) so low values give fine control. Shift+Scroll on a selected layer scales it in place.

Outputs the final composite as an IMAGE plus its width and height.

Inputs are dynamic placeholder slots created by the editor when you add a placeholder layer - wire any upstream IMAGE source into the matching slot. Their tooltips live on the JS side.

# Input types
No inputs are defined in the live ComfyUI metadata.

# Output types
- image
    - The composited image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Image width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Image height in pixels.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
