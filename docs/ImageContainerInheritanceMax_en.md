
# Documentation
- Class name: ImageContainerInheritanceMax
- Category: image/container
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageContainerInheritanceMax node is specifically designed for processing multiple image data, managing images by applying a "maximum" operation across multiple images. This node abstracts the complexities of handling image dimensions and pixel values, facilitating the creation of composite images where the maximum value of each pixel across all images is considered.

# Input types
## Required
- images_a
    - The 'images_a' input type accepts a set of images to be processed, serving as one set of images for the operation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- images_b
    - The 'images_b' input type accepts a second set of images, used in conjunction with 'images_a' to jointly determine the scope of the operation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- red
    - Specifies the red component of the operation background or effect.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - Specifies the green component of the operation background or effect.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - Specifies the blue component of the operation background or effect.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - Defines the alpha (transparency) level of the operation background or effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- method
    - Determines the method for applying the "maximum" operation across images. The 'single' option applies the operation to create a single composite image, 'for_each_pair' generates a new image for each pair of input images, and 'for_each_matrix' creates a composite image for every possible combination of images in 'images_a' and 'images_b', which significantly affects the node's execution and results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is a single image representing the composite result of applying the "maximum" operation across all input images. It encapsulates the highest pixel value at each pixel position across the input set.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageContainerInheritanceMax:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images_a": ("IMAGE",),
                "images_b": ("IMAGE",),
                "red": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "green": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "blue": ("INT", {
                    "default": 255,
                    "max": 255,
                    "step": 1
                }),
                "alpha": ("FLOAT", {
                    "default": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "method": (["single", "for_each_pair", "for_each_matrix"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/container"

    def node(self, images_a, images_b, red, green, blue, alpha, method):
        img_a_height, img_a_width = images_a[0, :, :, 0].shape
        img_b_height, img_b_width = images_b[0, :, :, 0].shape

        width = max(img_a_width, img_b_width)
        height = max(img_a_height, img_b_height)

        image = create_rgba_image(width, height, (red, green, blue, int(alpha * 255))).image_to_tensor()

        if method == "single":
            return (image.unsqueeze(0),)
        elif method == "for_each_pair":
            length = len(images_a)
            images = torch.zeros(length, height, width, 4)
        else:
            length = len(images_a) * len(images_b)
            images = torch.zeros(length, height, width, 4)

        images[:, :, :] = image
        return (images,)

```
