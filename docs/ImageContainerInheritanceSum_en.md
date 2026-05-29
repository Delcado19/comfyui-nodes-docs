
# Documentation
- Class name: ImageContainerInheritanceSum
- Category: image/container
- Output node: False

This node is designed to handle the summation of image sizes within a container, facilitating the operation of merging multiple images into a single composite image. It abstracts the complexity of image size calculation and adjustment, making it easier to handle image collections in a unified manner.

# Input types
## Required
- images_a
    - One of the image collections to be processed, playing a key role in determining the overall size of the final composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- images_b
    - Another image collection to be processed, contributing to the overall size of the final composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- red
    - The red component value used in image processing, affecting visual effects.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The green component value used in image processing, affecting visual effects.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The blue component value used in image processing, affecting visual effects.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The transparency value used in image processing, affecting visual effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- container_size_type
    - Specifies the method for calculating container size, affecting the dimensions of the final composite image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- method
    - Specifies the image processing method to be applied, affecting how images are combined or manipulated.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resulting composite image after processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageContainerInheritanceSum:
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
                "container_size_type": (["sum", "sum_width", "sum_height"],),
                "method": (["single", "for_each_pair", "for_each_matrix"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/container"

    def node(self, images_a, images_b, red, green, blue, alpha, container_size_type, method):
        img_a_height, img_a_width = images_a[0, :, :, 0].shape
        img_b_height, img_b_width = images_b[0, :, :, 0].shape

        if container_size_type == "sum":
            width = img_a_width + img_b_width
            height = img_a_height + img_b_height
        elif container_size_type == "sum_width":
            if img_a_height != img_b_height:
                raise ValueError()

            width = img_a_width + img_b_width
            height = img_a_height
        elif container_size_type == "sum_height":
            if img_a_width != img_b_width:
                raise ValueError()

            width = img_a_width
            height = img_a_height + img_b_height
        else:
            raise ValueError()

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
