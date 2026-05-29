# Documentation
- Class name: ImageCompositeAbsoluteByContainer
- Category: image/composite
- Output node: False

This node aims to composite two images into a given container according to specified absolute coordinates. It uses the container's dimensions to ensure images fit perfectly, providing a flexible way to manage image layout within predefined spatial constraints.

# Input types
## Required
- container
    - The container image used for compositing other images. It defines the spatial boundary for compositing.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_a
    - The first image to be composited into the container.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_b
    - The second image to be composited into the container.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_a_x
    - The x-coordinate of the top-left corner of the first image within the container.
    - Comfy dtype: INT
    - Python dtype: float
- images_a_y
    - The y-coordinate of the top-left corner of the first image within the container.
    - Comfy dtype: INT
    - Python dtype: float
- images_b_x
    - The x-coordinate of the top-left corner of the second image within the container.
    - Comfy dtype: INT
    - Python dtype: float
- images_b_y
    - The y-coordinate of the top-left corner of the second image within the container.
    - Comfy dtype: INT
    - Python dtype: float
- background
    - Specifies which image (if any) should be considered as background during compositing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- method
    - The method used for compositing images, which may affect the final appearance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The result of the compositing process, a single image that combines the input images according to the specified parameters and method.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
```python
class ImageCompositeAbsoluteByContainer:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "container": ("IMAGE",),
                "images_a": ("IMAGE",),
                "images_b": ("IMAGE",),
                "images_a_x": ("INT", {
                    "default": 0,
                    "step": 1
                }),
                "images_a_y": ("INT", {
                    "default": 0,
                    "step": 1
                }),
                "images_b_x": ("INT", {
                    "default": 0,
                    "step": 1
                }),
                "images_b_y": ("INT", {
                    "default": 0,
                    "step": 1
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
        return ImageCompositeAbsolute().node(
            images_a,
            images_b,
            images_a_x,
            images_a_y,
            images_b_x,
            images_b_y,
            container[0, :, :, 0].shape[1],
            container[0, :, :, 0].shape[0],
            background,
            method
        )
```