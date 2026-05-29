
# Documentation
- Class name: ImageContainerInheritanceAdd
- Category: image/container
- Output node: False

The ImageContainerInheritanceAdd node is designed to perform addition operations on a set of images, adjusting their dimensions and applying color transformations based on specified parameters. It encapsulates the functionality of batch scaling and modifying images, utilizing inheritance to extend or customize image processing workflows.

# Input types
## Required
- images
    - The collection of images to process. It serves as the primary input to the node, determining the base content for subsequent operations.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- add_width
    - The additional width to add to the images, affecting the overall dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- add_height
    - The additional height to add to the images, affecting the overall dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- red
    - The red component to add to each image, affecting the final color balance.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The green component to add to each image, affecting the final color balance.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The blue component to add to each image, affecting the final color balance.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The alpha (transparency) value to apply to each image, affecting its opacity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- method
    - Specifies the method used for the addition operation, which may alter how color and size adjustments are applied.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is one or more processed images according to the specified parameters, including size adjustments and color transformations.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageContainerInheritanceAdd:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "add_width": ("INT", {
                    "default": 0,
                    "step": 1
                }),
                "add_height": ("INT", {
                    "default": 0,
                    "step": 1
                }),
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
                "method": (["single", "for_each"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/container"

    def node(self, images, add_width, add_height, red, green, blue, alpha, method):
        width, height = images[0, :, :, 0].shape

        width = width + add_width
        height = height + add_height

        image = create_rgba_image(width, height, (red, green, blue, int(alpha * 255))).image_to_tensor()

        if method == "single":
            return (image.unsqueeze(0),)
        else:
            length = len(images)

            images = torch.zeros(length, height, width, 4)
            images[:, :, :] = image
            return (images,)

```
