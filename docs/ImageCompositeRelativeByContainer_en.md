
# Documentation
- Class name: ImageCompositeRelativeByContainer
- Category: image/composite
- Output node: False

The ImageCompositeRelativeByContainer node creates composite images by positioning and merging two sets of images relative to the container size. It dynamically calculates image placement based on the container's dimensions and specified relative positions, ensuring images are properly scaled and positioned before merging them according to the specified method.

# Input types
## Required
- container
    - The container image used as a reference for scaling and positioning other images. Its dimensions determine how other images are adjusted and placed.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_a
    - The first set of images to be composited. These images are adjusted and positioned based on the container's dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_b
    - The second set of images to be composited. These images are also adjusted and positioned based on the container's dimensions, similar to the first set.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_a_x
    - The relative horizontal position (percentage) of the first set of images within the container.
    - Comfy dtype: FLOAT
    - Python dtype: float
- images_a_y
    - The relative vertical position (percentage) of the first set of images within the container.
    - Comfy dtype: FLOAT
    - Python dtype: float
- images_b_x
    - The relative horizontal position (percentage) of the second set of images within the container.
    - Comfy dtype: FLOAT
    - Python dtype: float
- images_b_y
    - The relative vertical position (percentage) of the second set of images within the container.
    - Comfy dtype: FLOAT
    - Python dtype: float
- background
    - Specifies which set of images ('images_a' or 'images_b') should be used as the background for the final composite image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- method
    - The method used to composite the images, which may affect the appearance of the merged result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The final composite image, which is the result of merging and positioning two sets of images based on the container's dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageCompositeRelativeByContainer:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "container": ("IMAGE",),
                "images_a": ("IMAGE",),
                "images_b": ("IMAGE",),
                "images_a_x": ("FLOAT", {
                    "default": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "images_a_y": ("FLOAT", {
                    "default": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "images_b_x": ("FLOAT", {
                    "default": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "images_b_y": ("FLOAT", {
                    "default": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "background": (["images_a", "images_b"],),
                "method": (["pair", "matrix"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/composite"

    def node(
            self,
            container,
            images_a,
            images_b,
            images_a_x,
            images_a_y,
            images_b_x,
            images_b_y,
            background,
            method
    ):
        def offset_by_percent(container_size: int, image_size: int, percent: float):
            return int((container_size - image_size) * percent)

        img_a_height, img_a_width = images_a[0, :, :, 0].shape
        img_b_height, img_b_width = images_b[0, :, :, 0].shape

        container_width = container[0, :, :, 0].shape[1]
        container_height = container[0, :, :, 0].shape[0]

        if container_width < max(img_a_width, img_b_width) or container_height < max(img_a_height, img_b_height):
            raise ValueError("Container can't be smaller then max width or height of images.")

        return ImageCompositeAbsolute().node(
            images_a,
            images_b,
            offset_by_percent(container_width, img_a_width, images_a_x),
            offset_by_percent(container_height, img_a_height, images_a_y),
            offset_by_percent(container_width, img_b_width, images_b_x),
            offset_by_percent(container_height, img_b_height, images_b_y),
            container_width,
            container_height,
            background,
            method
        )

```
