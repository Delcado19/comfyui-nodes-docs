# Documentation
- Class name: PixaromaImageInfo
- Category: 👑 Pixaroma/🖼️ Image
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Image Info Pixaroma - unpacks the image_info bundle from Load Image Mini Pixaroma into image, mask, width, height and filename outputs. Wire it in only when you need those extras, so the loader stays compact. The width, height and filename also show on the node face.

# Input types
## Required
- image_info
    - The image_info bundle from a Load Image Mini Pixaroma node.
    - Comfy dtype: PIX_IMAGE_INFO
    - Python dtype: object

# Output types
- image
    - The image from the bundle (same as the loader's image output).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The image's mask, from its alpha channel (blank if it has none).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - Image width in pixels, after any resize.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Image height in pixels, after any resize.
    - Comfy dtype: INT
    - Python dtype: int
- filename
    - The image's filename.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
