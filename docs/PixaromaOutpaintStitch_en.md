# Documentation
- Class name: PixaromaOutpaintStitch
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Puts the pristine original image back onto an outpaint result, keeping only the part the model newly generated. Use it after Outpaint Pixaroma when you had to scale a large image down for the model: the original half comes back at full quality instead of the softened, downscaled version that went through the model.

Wire the 'outpaint_info' output of Outpaint Pixaroma into 'outpaint_info' here, and the finished image (after VAE Decode) into 'image'. The node scales the result back up to the full padded size, drops the original back exactly where it was, and blends the join.

'feather' softens the seam between the original and the new area. The seam will not be perfectly invisible, because the new area was blended to a re-encoded copy of the original rather than the pristine one, so a little feather usually looks best. Only the edges next to the new area are softened; the real picture edges stay sharp.

'color match' fixes the colour/tone step you can sometimes see where the new area meets the original, by continuing the original's colour along the seam into the new area. It follows the background per region, so it evens out a light-wall / dark-floor scene, not only a single flat colour. 0 turns it off, 100 is a full match (the usual sweet spot), above 100 over-matches for the rare stubborn step. It only evens out tone, never texture or detail, so it cannot add artefacts.

Outputs the recombined full-resolution image, plus a mask marking the newly generated area (white) versus the untouched original (black) - handy if you want to run a light refine pass on just the new part later.

# Input types
## Required
- image
    - The finished outpaint result, after VAE Decode. It is scaled back up to the full padded size automatically, so it can be the downscaled generation size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- outpaint_info
    - Wire the 'outpaint_info' output of Outpaint Pixaroma here. It carries the pristine original image and where it sits in the padded canvas, so the original can be put back exactly. If left unwired, the image just passes through unchanged.
    - Comfy dtype: PIXAROMA_OUTPAINT_INFO
    - Python dtype: object
- feather
    - Softens the seam between the original and the newly generated area by this many pixels, fading the original edge into the new area. 0 = hard edge (fully pristine original up to the seam). Higher blends more but eats a little of the original at the join.
    - Comfy dtype: INT
    - Python dtype: int
- color_match
    - Removes the colour/tone step that can show where the newly generated area meets the original, by continuing the original's colour along the seam into the new area. It follows the background per region, so it fixes a light-wall / dark-floor scene, not just a single flat colour. 0 = off, 100 = full match (the usual sweet spot); above 100 over-matches, for the rare case a step still shows. It only evens out tone, never texture or detail, so it cannot add artefacts.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The full-resolution image: the newly generated area from the model with the pristine original pasted back over its own region.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - A mask of the newly generated area (white = generated, black = the untouched original), with the seam feathered to match. Feed it into a refine/inpaint pass if you want to sharpen just the new part.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
