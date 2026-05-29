
# Documentation
- Class name: SaltRGBAFromMask
- Category: SALT/Image/Composite
- Output node: False

This node converts a mask to an RGBA image, adding transparency to the result. It primarily processes image masks to generate an image with an alpha channel, thus creating an image with certain areas transparent based on the input mask.

# Input types
## Required
- image
    - The source image, which will be combined with the mask to generate an RGBA image. The unmasked areas of the image will remain visible, while the masked areas can become transparent or semi-transparent.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- mask
    - The input mask used to generate the RGBA image. This mask determines which areas in the resulting image will be transparent or opaque.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image
- threshold
    - The threshold used to determine what is considered transparent in the mask. Pixels in the mask above this value will be more opaque.
    - Comfy dtype: FLOAT
    - Python dtype: float
- invert_mask
    - A boolean indicating whether to invert the mask before applying it to the image. Inverting the mask swaps the areas considered transparent and opaque.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- rgba_image
    - The resulting RGBA image after applying the input mask to define transparent areas.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltRGBAFromMask:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
                "mask": ("MASK",),
                "threshold": ("FLOAT", {"min": 0, "max": 1.0, "step": 0.01, "default": 0.5}),
                "invert_mask": ("BOOLEAN", {"default": False})
            }
        }
    
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("rgba_image",)

    FUNCTION = "composite"
    CATEGORY = "SALT/Image/Composite"

    def composite(self, image, mask, threshold, invert_mask):
        img = tensor2pil(image)
        msk = mask2pil(mask)

        msk = msk.convert("L")
        img = img.convert("RGBA")

        img_ratio = img.size[0] / img.size[1]
        msk_ratio = msk.size[0] / msk.size[1]

        if img_ratio > msk_ratio:
            scale_factor = img.size[1] / msk.size[1]
            new_size = (int(msk.size[0] * scale_factor), img.size[1])
        else:
            scale_factor = img.size[0] / msk.size[0]
            new_size = (img.size[0], int(msk.size[1] * scale_factor))

        msk = msk.resize(new_size, Image.Resampling.BILINEAR)

        pad_mask = Image.new("L", img.size, 0)

        x = (img.size[0] - msk.size[0]) // 2
        y = (img.size[1] - msk.size[1]) // 2
        pad_mask.paste(msk, (x, y))

        thresh = int(threshold * 255)
        pad_mask = pad_mask.point(lambda p: 255 if p > thresh else 0)

        if invert_mask:
            pad_mask = ImageOps.invert(pad_mask)

        rgba_image = Image.new("RGBA", img.size, (0, 0, 0, 0))
        rgba_image.paste(img, (0, 0), pad_mask)

        return (pil2tensor(rgba_image),)

```
