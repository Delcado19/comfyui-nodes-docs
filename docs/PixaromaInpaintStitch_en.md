# Documentation
- Class name: PixaromaInpaintStitch
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Inpaint Stitch Pixaroma - paste your inpainted crop back onto the original image at the exact spot it came from, blended so the seam disappears.

Wire the crop_info output of Inpaint Crop Pixaroma into crop_info here, and wire your inpainted crop (after the model) into image. The node resizes the crop back to the region and blends only the painted area by default, so everything outside the mask stays pixel-perfect.

The seam softness and blend mode come from the Inpaint Crop node on the crop_info wire, but you can OVERRIDE them here (softness -1 = use the crop's). Because this node is after the sampler, changing softness, blend mode or color match re-runs only this node - the sampler stays cached on a fixed seed - so you can fine-tune the blend instantly without re-generating. color match corrects a color/tone shift the model introduced.

Outputs the finished full image, plus the original uncropped image - wire both into Image Compare Pixaroma for an instant before / after.

# Input types
## Required
- image
    - Your inpainted crop (after the model). Resized back to the original crop region automatically if its size differs.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- mask
    - Optional. Limits the blend to this area (resized to the crop region). If omitted, the painted mask carried in crop_info is used for the mask-aware blend.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_info
    - Wire the crop_info output of Inpaint Crop Pixaroma here. If left unwired, the image passes straight through.
    - Comfy dtype: PIXAROMA_CROP_INFO
    - Python dtype: object
- softness
    - Seam feather, overriding the Inpaint Crop node's softness. -1 = use the Crop node's value. Set 0-150 to tune the blend HERE - because Stitch is after the sampler, only this node re-runs (the sampler stays cached on a fixed seed), so it is instant. Going bigger than the room the crop left may show a slightly harder edge - raise the Crop node's softness for more room.
    - Comfy dtype: INT
    - Python dtype: int
- blend_mode
    - Override the Crop node's blend mode. 'from crop' = use what the Crop node set. 'mask' = replace only the painted area. 'whole crop' = replace the entire cropped box. Like softness, changing it here re-runs only this node (no re-sample).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- color_match
    - Correct a color/tone shift the model introduced, matching the unchanged surroundings around your mask. Keep it Off when you deliberately changed colors (it would pull them back). No live preview - set it and re-run.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The original image with the inpainted crop blended back in place.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- original
    - The full original uncropped image (from crop_info) - wire it together with the result into Image Compare Pixaroma for a before / after.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
