# Documentation
- Class name: PixaromaUncrop
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Image Uncrop Pixaroma - paste an edited crop back onto the original image at the exact spot it came from. The classic crop, fix or upscale, then put it back workflow.

Wire the 'crop_info' output of Image Crop Pixaroma into 'crop_info' here, and wire your edited crop (after upscaling, inpainting, color work, anything) into 'image'. The node resizes the edited crop to the original crop region if needed and composites it onto the full original image, leaving everything outside the crop untouched.

Transparency travels through full-frame: the 'mask' output is the original mask with the crop region updated, so wiring Image Crop's mask straight across keeps the whole image's transparency (or wire an edited region mask to change just that area). 'feather' softens the seam for a seamless blend.

Outputs the recombined full image plus the full-frame mask.

# Input types
## Required
- image
    - The edited crop to paste back (after upscaling, inpainting, color work, etc). It is resized to the original crop region automatically if its size differs.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- mask
    - Optional. The mask for the crop region - it updates that area of the full-frame 'mask' output (the rest keeps the original mask). Wire Image Crop's mask straight across to carry the whole transparency through. Resized to the crop region automatically. It does NOT limit the image paste; the whole region is pasted.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_info
    - Wire the 'crop_info' output of Image Crop Pixaroma here. It carries the original image and where the crop came from, so the edited crop can be placed back exactly. If left unwired, the edited image just passes through.
    - Comfy dtype: PIXAROMA_CROP_INFO
    - Python dtype: object
- feather
    - Softens the edge of the pasted area by this many pixels so it blends into the original. 0 = hard edge.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The original image with the edited crop pasted back in place.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The full-frame mask: the original mask with the crop region updated from the wired mask (or unchanged if none). Use it to keep transparency, e.g. feed it into Join Image with Alpha.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_info
    - The same crop_info passed straight through, so you can forward it to another node without re-routing the wire from Image Crop.
    - Comfy dtype: PIXAROMA_CROP_INFO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
