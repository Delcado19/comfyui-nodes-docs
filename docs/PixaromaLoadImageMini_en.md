# Documentation
- Class name: PixaromaLoadImageMini
- Category: 👑 Pixaroma/🖼️ Image
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Load Image Mini Pixaroma - a compact Load Image. Upload, drag-drop, paste, or pick a file; the same inline resize suite as Load Image (max megapixels, longest side, scale by, fit inside, crop to fill, match ratio) lives in the gear settings panel so the node face stays minimal. Mask Editor and Copy/Paste (Clipspace) work as usual.

Outputs just image and a small image_info bundle. Wire image_info into Image Info Pixaroma when you need the mask, width, height, or filename - that keeps this loader small.

# Input types
## Required
- image
    - The image to load from ComfyUI's input folder. Use the Upload button, the paste button, drag a file onto the node, or pick one from the dropdown.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Hidden
- LoadImageMiniState
    - The LoadImageMiniState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The loaded image, after any resize set in the gear panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_info
    - A small bundle (mask, width, height, filename) for Image Info Pixaroma.
    - Comfy dtype: PIX_IMAGE_INFO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
