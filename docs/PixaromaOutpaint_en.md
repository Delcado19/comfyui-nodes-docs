# Documentation
- Class name: PixaromaOutpaint
- Category: 👑 Pixaroma/✂️ Resize & Crop
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Pads an image with a solid colour so an outpainting model can fill the new area in, then optionally scales the result down to a megapixel limit and reports the final size.

Mid grey is the default fill. Any colour works, but a strongly coloured fill can tint the whole generated image, because a model trained to replace it learns the colour as well as the shape. Grey is neutral, so it has no hue to bleed.

To ratio grows the image to a target shape and the anchor decides which side the new space appears on. By side lets you set an exact number of pixels per edge. The megapixel limit is optional: with it off the image keeps its padded size.

The width and height outputs report the FINAL size, so they can feed an empty latent directly.

# Input types
## Required
- image
    - The image to pad. Wire any image source here.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Hidden
- OutpaintState
    - The OutpaintState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The padded image, scaled to the megapixel limit when one is set.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Final width in pixels, after padding and any scaling.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Final height in pixels, after padding and any scaling.
    - Comfy dtype: INT
    - Python dtype: int
- outpaint_info
    - Info for Outpaint Stitch Pixaroma - carries the pristine original and where it sits in the padded canvas, so after the model fills the new area you can put the original back at full quality. Optional; wire it into Outpaint Stitch Pixaroma, or leave it unused.
    - Comfy dtype: PIXAROMA_OUTPAINT_INFO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
