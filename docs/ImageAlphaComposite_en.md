
# Documentation
- Class name: ImageAlphaComposite
- Category: Art Venture/Utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageAlphaComposite node blends two images together based on their alpha channel values to produce a composite image. This process involves combining the visual elements of the two input images into a single image, taking into account transparency and layering effects.

# Input types
## Required
- image_i
    - The second image participating in the composition. It serves as another base layer in the alpha compositing process, overlaid with the first image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The resulting image after alpha compositing, produced by blending the input images based on their alpha values.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilImageAlphaComposite:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image_1": ("IMAGE",),
                "image_2": ("IMAGE",),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "image_alpha_composite"

    def image_alpha_composite(self, image_1: torch.Tensor, image_2: torch.Tensor):
        if image_1.shape[0] != image_2.shape[0]:
            raise Exception("Images must have the same amount")

        if image_1.shape[1] != image_2.shape[1] or image_1.shape[2] != image_2.shape[2]:
            raise Exception("Images must have the same size")

        composited_images = []
        for i, im1 in enumerate(image_1):
            composited = Image.alpha_composite(
                tensor2pil(im1).convert("RGBA"),
                tensor2pil(image_2[i]).convert("RGBA"),
            )
            composited_images.append(pil2tensor(composited))

        return (torch.cat(composited_images, dim=0),)

```
