
# Documentation
- Class name: `ImageFilterGaussianBlur`
- Category: `image/filter`
- Output node: `False`

The ImageFilterGaussianBlur node applies a Gaussian blur filter to process images, smoothing image noise and details using a Gaussian function. This node is designed to simulate the effect of viewing an image through a translucent screen, effectively reducing image noise and detail.

# Input types
## Required
- **`images`**
    - The image to be processed. This parameter is critical as it specifies the target image on which the Gaussian blur effect will be applied.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`
- **`size_x`**
    - Specifies the horizontal size of the Gaussian kernel. This affects the degree of blur in the horizontal direction.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`size_y`**
    - Specifies the vertical size of the Gaussian kernel. This affects the degree of blur in the vertical direction.
    - Comfy dtype: `INT`
    - Python dtype: `int`

# Output types
- **`image`**
    - The blurred image after applying the Gaussian blur filter.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterGaussianBlur:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "size_x": ("INT", {
                    "default": 10,
                    "min": 2,
                    "step": 2
                }),
                "size_y": ("INT", {
                    "default": 10,
                    "min": 2,
                    "step": 2
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images, size_x, size_y):
        size_x -= 1
        size_y -= 1

        return (cv2_layer(images, lambda x: cv2.GaussianBlur(x, (size_x, size_y), size_x, size_y)),)

```
