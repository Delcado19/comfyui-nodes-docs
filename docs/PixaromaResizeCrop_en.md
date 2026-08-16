# Documentation
- Class name: PixaromaResizeCrop
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Crop an image to an exact width and height. The image is scaled to completely fill the target size, then the overflow is cropped away from the center, so the result is always exactly the width and height you set, with no stretching or letterboxing. Smaller images are scaled up to fill. Type the size into the width and height fields, or wire them from another node (e.g. Resolution Pixaroma or a Number node). An optional mask is cropped the same way. Outputs image, mask, width, and height - handy for forcing image or video frames to a fixed size like 512x896 or 704x1280.

# Input types
## Required
- image
    - The image (or batch / video frames) to crop to size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Target width in pixels. Type a value or wire a number from another node. The arrows step by 8 (AI/video sizes are usually multiples of 8) but you can type any value.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Target height in pixels. Type a value or wire a number from another node. The arrows step by 8 but you can type any value.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - Optional mask. Cropped to the same width and height as the image, with crisp (nearest) edges.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The cropped image, exactly width x height pixels.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The cropped mask, matching the output image size (blank when no mask is wired in).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - The output width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The output height in pixels.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
