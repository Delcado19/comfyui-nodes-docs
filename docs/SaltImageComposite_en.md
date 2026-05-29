
# Documentation
- Class name: SaltImageComposite
- Category: SALT/Scheduling/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltImageComposite node aims to create complex image compositions by mixing or overlaying multiple images according to a specified schedule plan. This node implements dynamic composition of images, helping to create visually rich and diverse outputs.

# Input types
## Required
- images_a
    - The first set of images used in the composition process. These images serve as one of the primary layers of the composition.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- images_b
    - The second set of images used in the composition process. These images serve as another primary layer of the composition, and will be mixed with the first set according to a specified mode.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- mode
    - Defines the mixing method of the two sets of images. This mode determines how images_a and images_b are combined, affecting the visual effect of the composition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- masks
    - Optional masks that can be applied to images during the composition process. Masks allow for more controlled blending by specifying areas of the image that are affected or protected.
    - Comfy dtype: MASK
    - Python dtype: List[Mask]
- blend_schedule
    - An optional schedule plan for controlling the blending strength or method over time, allowing dynamic changes during the composition process.
    - Comfy dtype: LIST
    - Python dtype: List[Any]

# Output types
- images
    - The resulting image after applying the composition operation. This output shows the final composition effect, blending all input images according to the defined mode and schedule plan.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltImageComposite:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images_a": ("IMAGE",),
                "images_b": ("IMAGE",),
                "mode": ([
                    "add",
                    "color",
                    "color_burn",
                    "color_dodge",
                    "darken",
                    "difference",
                    "exclusion",
                    "hard_light",
                    "hue",
                    "lighten",
                    "multiply",
                    "overlay",
                    "screen",
                    "soft_light"
                ],),
            },
            "optional": {
                "masks": ("MASK",),
                "blend_schedule": ("LIST", ),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)
    FUNCTION = "blend"
    CATEGORY = f"SALT/Scheduling/Image"

    def blend(self, images_a, images_b, mode, blend_schedule=[1.0], masks=None):
        blended_images = []
        min_length = min(len(images_a), len(images_b))

        if len(blend_schedule) < min_length:
            blend_schedule += [blend_schedule[-1]] * (min_length - len(blend_schedule))

        for i in range(min_length):
            img_a = tensor2pil(images_a[i].unsqueeze(0))
            img_b = tensor2pil(images_b[i].unsqueeze(0))
            img_b_resized = img_b.resize(img_a.size, Image.LANCZOS).convert(img_a.mode)

            if mode == "add":
                base_image = ImageChops.add(img_a, img_b_resized, scale=2.0, offset=int(255 * (1 - blend_schedule[i])))
            else:
                base_image = getattr(pilgram.css.blending, mode)(img_a, img_b_resized)

            blend_mask = Image.new("L", img_a.size, int(255 * blend_schedule[i]))
            out_image = Image.composite(base_image, img_a, blend_mask)

            if isinstance(masks, torch.Tensor):
                mask = mask2pil(masks[i if len(masks) > i else -1].unsqueeze(0)).resize(img_a.size, Image.LANCZOS).convert("L")
                final_image = Image.composite(out_image, img_a, mask)
            else:
                final_image = out_image

            blended_images.append(pil2tensor(final_image))

        blended_images_batch = torch.cat(blended_images, dim=0)
        return (blended_images_batch, )

```
