# Documentation
- Class name: PixaromaImageResize
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Resize an image (and its mask) mid-workflow. Pick a mode - Off, Max megapixels, Longest side, Scale by, Fit inside, Crop to fill, Match aspect ratio, or Pad (add a border for outpainting). Optionally wire a width/height (e.g. from Resolution Pixaroma) to drive the size, or wire a single longest_side to scale the longer edge to that value (portrait or landscape, no need to pick an axis). Outputs image, mask, width, height.

# Input types
## Required
- image
    - The image to resize.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- mask
    - Optional mask. Resized alongside the image with crisp (nearest) edges. In Pad mode the added border becomes white (the inpaint region).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - Optional target width (e.g. from Resolution Pixaroma). Wire only width OR only height to scale keeping aspect ratio; wire both for an exact size. While wired, the matching field is locked.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Optional target height (e.g. from Resolution Pixaroma). Wire only width OR only height to scale keeping aspect ratio; wire both for an exact size. While wired, the matching field is locked.
    - Comfy dtype: INT
    - Python dtype: int
- longest_side
    - Optional single target for the LONGER side. Wire one number (e.g. from Number Pixaroma) and the image scales so its longest side equals this value, aspect ratio kept - works for portrait or landscape without choosing width or height. Takes priority over width/height when connected.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- ImageResizeState
    - The ImageResizeState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The resized image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The resized mask (white = the padded / inpaint area when using Pad). If you leave the mask input empty and the picture carries its own transparency, that transparency comes out here, resized to match - wire it with the image into Join Image with Alpha to get the transparent picture back.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - Final output width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Final output height in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- longest_side
    - The longer of the output's width and height, whatever the resize produced. Use it when you want the longest dimension without caring about orientation.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
