# Documentation
- Class name: PixaromaLoadImage
- Category: 👑 Pixaroma/🖼️ Image
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Load Image Pixaroma - native LoadImage parity (upload, drag-drop, paste, multi-frame, alpha to mask) plus inline resize: max megapixels, longest side, scale by, fit inside, crop to fill, match aspect ratio. Snap chips, resample picker, upscale guard. Outputs: image, mask, width, height, filename, original_width, original_height.

Eliminates the need for downstream Get Image Size + Image Scale + Image Resize chains in most workflows.

# Input types
## Required
- image
    - The image to load from ComfyUI's input folder. Use the Upload Image button, drag a file onto the node, paste from the clipboard, or pick one from the dropdown.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Hidden
- LoadImagePixState
    - The LoadImagePixState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The loaded image, after any resize.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The image's mask, from its alpha channel (blank if it has none).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - Output width in pixels, after any resize.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Output height in pixels, after any resize.
    - Comfy dtype: INT
    - Python dtype: int
- filename
    - The image's filename.
    - Comfy dtype: STRING
    - Python dtype: str
- original_width
    - Width of the original image, before any resize.
    - Comfy dtype: INT
    - Python dtype: int
- original_height
    - Height of the original image, before any resize.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
