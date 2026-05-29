
# Documentation
- Class name: ImageFilterGaussianBlurAdvanced
- Category: image/filter
- Output node: False

This node applies an advanced Gaussian blur filter to images, allowing separate horizontal and vertical blur size and standard deviation settings. It enhances image processing by providing finer control over the blur effect.

# Input types
## Required
- images
    - The image to be processed. This parameter is essential for defining the input to which the Gaussian blur will be applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size_x
    - Specifies the horizontal size of the Gaussian kernel. It affects the degree of blur along the x-axis.
    - Comfy dtype: INT
    - Python dtype: int
- size_y
    - Specifies the vertical size of the Gaussian kernel. It affects the degree of blur along the y-axis.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_x
    - Determines the standard deviation of the Gaussian kernel in the horizontal direction. It influences the spread of the blur along the x-axis.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_y
    - Determines the standard deviation of the Gaussian kernel in the vertical direction. It influences the spread of the blur along the y-axis.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is the image after applying the Gaussian blur with the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterGaussianBlurAdvanced:
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
                "sigma_x": ("INT", {
                    "default": 0,
                }),
                "sigma_y": ("INT", {
                    "default": 0,
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images, size_x, size_y, sigma_x, sigma_y):
        size_x -= 1
        size_y -= 1

        return (cv2_layer(images, lambda x: cv2.GaussianBlur(x, (size_x, size_y), sigma_x, sigma_y)),)

```
