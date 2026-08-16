# Documentation
- Class name: PixaromaInpaintCrop
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Inpaint Crop Pixaroma - the easy way to set up an inpaint. Open the fullscreen editor and paint a mask over the area you want to fix (brush, erase, clear, invert, adjustable brush size). The node automatically finds the box around your mask, adds a context margin, and crops a model-friendly piece (sized to a multiple of 8, scaled toward your target so even a small masked area gets enough resolution).

Turn on invert_mask to flip the mask and inpaint the OPPOSITE area (e.g. a cut-out's background instead of its subject), no Invert Mask node needed.

Wire the cropped image and mask into your inpaint model (KSampler, Flux, edit models), then send the crop_info wire into Inpaint Stitch Pixaroma to paste the result back onto the original at the exact spot.

Outputs the cropped image, the matching cropped mask, a crop_info wire, and the crop width and height (handy for an empty latent). The crop_info wire is the same type Image Crop uses, so the two are interchangeable.

# Input types
## Required
- size_mode
    - Keep shape: scale the masked area so its long side hits the target, no stretching (best quality). Force size: always output a target x target square. Free: natural size, just rounded to the multiple.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- target
    - Target long side (keep) or square size (force), in px.
    - Comfy dtype: INT
    - Python dtype: int
- multiple
    - Round the crop size to this multiple for model compatibility.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- context_px
    - How many extra pixels of surrounding context to include each side.
    - Comfy dtype: INT
    - Python dtype: int
- mask_grow
    - Expand the painted mask by this many pixels before cropping.
    - Comfy dtype: INT
    - Python dtype: int
- mask_blur
    - Soften the output mask edge by this many pixels for a smoother inpaint.
    - Comfy dtype: INT
    - Python dtype: int
- softness
    - How far the seam feathers when Inpaint Stitch pastes the crop back. Previewed live in the mask editor.
    - Comfy dtype: INT
    - Python dtype: int
- blend_mode
    - How Inpaint Stitch pastes the result back. 'mask': only the area you painted is replaced - the rest of the crop keeps the original (the normal inpaint, the safe default). 'whole crop': the entire cropped region is replaced with the model's version (use when the model also relit / changed the surroundings, or for an img2img-style pass over the whole crop). Previewed live in the mask editor.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- invert_mask
    - Flip the mask so the inpaint targets the OPPOSITE area (swap subject and background). Works on a wired mask or a painted one - a built-in alternative to an Invert Mask node. No effect if no mask is connected.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image
    - Wire any upstream IMAGE here to inpaint it (Load Image, VAE Decode, anything). You can also drag-drop or paste an image onto the node body - those load it directly and disconnect this wire.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Optional mask of the area to inpaint (e.g. a transparent PNG's alpha, or any MASK output). It is used as-is whenever you have not painted a mask in the editor - so clearing the editor falls back to this wired mask. A mask painted in the editor takes priority.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The cropped region, resized to the model-friendly output size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The cropped mask at the same size (grown and blurred as set). Wire it into SetLatentNoiseMask / your inpaint conditioning.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_info
    - Crop info for Inpaint Stitch Pixaroma - carries the original image and where the crop came from so the inpainted result can be pasted back exactly. Same type as Image Crop, so they are interchangeable.
    - Comfy dtype: PIXAROMA_CROP_INFO
    - Python dtype: object
- width
    - Cropped output width in pixels (for an empty latent / edit models).
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Cropped output height in pixels.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
