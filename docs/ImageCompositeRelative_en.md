# Documentation
- Class name: ImageCompositeRelative
- Category: image/composite
- Output node: False

The ImageCompositeRelative node composites two images based on their relative sizes and positions, allowing dynamic image overlay and manipulation using specified coordinates and dimensions. It calculates the relative position and size of input images to create a composite image that achieves the desired layout and visual effect.

# Input types
## Required
- images_a
    - This parameter represents the first set of images to be composited onto the container. It plays a key role in the overlay process, determining the visual content and layering order in the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_b
    - Similar to images_a, this parameter represents the second set of images to be overlaid onto the container. It allows the introduction of additional visual elements, enhancing the complexity and depth of the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_a_x
    - Specifies the horizontal position of the first set of images (as a percentage of the container width), affecting their placement in the composite image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- images_a_y
    - Specifies the vertical position of the first set of images (as a percentage of the container height), affecting their alignment and layering in the composite image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- images_b_x
    - Determines the horizontal position of the second set of images (as a percentage of the container width), guiding their placement and interaction with the first set of images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- images_b_y
    - Determines the vertical position of the second set of images (as a percentage of the container height), affecting their layering and visual relationship with the first set of images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- background
    - The background parameter specifies which set of images (images_a or images_b) should be treated as the background layer in the composite image. This choice affects the visual hierarchy and layering of the composite image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- container_size_type
    - Defines the strategy for determining the container size, which can be based on the maximum dimensions of the input images or their sum, affecting the overall size of the composite image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- method
    - Defines the method or algorithm used for compositing images. This parameter influences the blending and overlay techniques applied, thereby affecting the final appearance of the composite image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resulting composite image, created by blending and overlaying the specified images according to the given positions, sizes, and method. This output represents the final visual product of the compositing process.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageCompositeRelative:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
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
                "container_size_type": (["max", "sum", "sum_width", "sum_height"],),
                "method": (["pair", "matrix"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/composite"

    def node(
            self,
            images_a,
            images_b,
            images_a_x,
            images_a_y,
            images_b_x,
            images_b_y,
            background,
            container_size_type,
            method
    ):
        def offset_by_percent(container_size: int, image_size: int, percent: float):
            return int((container_size - image_size) * percent)

        img_a_height, img_a_width = images_a[0, :, :, 0].shape
        img_b_height, img_b_width = images_b[0, :, :, 0].shape

        if container_size_type == "max":
            container_width = max(img_a_width, img_b_width)
            container_height = max(img_a_height, img_b_height)
        elif container_size_type == "sum":
            container_width = img_a_width + img_b_width
            container_height = img_a_height + img_b_height
        elif container_size_type == "sum_width":
            container_width = img_a_width + img_b_width
            container_height = max(img_a_height, img_b_height)
        elif container_size_type == "sum_height":
            container_width = max(img_a_width, img_b_width)
            container_height = img_a_height + img_a_height
        else:
            raise ValueError()

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
