
# Documentation
- Class name: ImageEffectsNegative
- Category: image/effects
- Output node: False

The ImageEffectsNegative node converts an image to a negative effect by inverting its colors. This effect is achieved by subtracting each color channel's value from the maximum possible value, effectively inverting the color spectrum to create a photographic negative look.

# Input types
## Required
- images
    - The input image to be converted to negative form. This parameter is critical to the node's operation as it directly affects the visual presentation of the effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The converted negative form image, with each color channel's value inverted, producing a photographic negative effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageEffectsNegative:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/effects"

    def node(self, images):
        tensor = images.clone().detach()
        tensor[:, :, :, 0:3] = 1.0 - tensor[:, :, :, 0:3]

        return (tensor,)

```
