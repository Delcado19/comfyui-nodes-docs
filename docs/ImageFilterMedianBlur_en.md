
# Documentation
- Class name: `ImageFilterMedianBlur`
- Category: `image/filter`
- Output node: `False`

The ImageFilterMedianBlur node applies a median blur filter to an image, effectively reducing noise and smoothing the image while preserving edges. This filter is particularly suitable for removing salt-and-pepper noise from images.

# Input types
## Required
- **`images`**
    - Specifies the image to be processed. This parameter is critical as it determines which input the median blur effect will be applied to.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- **`size`**
    - Defines the size of the kernel used for median blur. A larger size will produce a more pronounced blurring effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- **`image`**
    - Returns the image after applying the median blur filter, presenting a reduced-noise, smoother appearance.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterMedianBlur:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "size": ("INT", {
                    "default": 10,
                    "min": 1,
                    "step": 2
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images, size):
        size -= 1

        img = images.clone().detach()
        img = (img * 255).to(torch.uint8)

        return ((cv2_layer(img, lambda x: cv2.medianBlur(x, size)) / 255),)

```
