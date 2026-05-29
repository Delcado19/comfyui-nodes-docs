
# Documentation
- Class name: ImageFilterBoxBlur
- Category: image/filter
- Output node: False

The ImageFilterBoxBlur node applies a box blur effect to images. It achieves a uniform smoothing effect by specifying the blur size in both x and y dimensions. This blurring technique effectively softens image details, creating soft and hazy visual effects.

# Input types
## Required
- images
    - The image to be processed. This parameter is crucial as it defines the input image to which the box blur effect will be applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size_x
    - Specifies the horizontal size of the blur effect. It determines the width of the kernel used in the box blur operation.
    - Comfy dtype: INT
    - Python dtype: int
- size_y
    - Specifies the vertical size of the blur effect. It determines the height of the kernel used in the box blur operation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is the image after box blur processing, presenting a uniformly smoothed appearance.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterBoxBlur:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "size_x": ("INT", {
                    "default": 10,
                    "min": 1,
                }),
                "size_y": ("INT", {
                    "default": 10,
                    "min": 1,
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images, size_x, size_y):
        return (cv2_layer(images, lambda x: cv2.boxFilter(x, -1, (size_x, size_y))),)

```
