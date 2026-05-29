
# Documentation
- Class name: ImageTransformCropAbsolute
- Category: image/transform
- Output node: False

The ImageTransformCropAbsolute node performs absolute cropping on a batch of images, cropping them to a specific rectangular size based on specified absolute pixel coordinates. It is designed to precisely resize images by removing unwanted outer portions, focusing on a specific area.

# Input types
## Required
- images
    - The batch of images to be cropped. This parameter is critical as it directly affects the output, determining which images will undergo the cropping process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- start_x
    - The starting x-coordinate of the crop (inclusive), defining the left boundary of the crop rectangle. It determines how much of the left side of the image is removed.
    - Comfy dtype: INT
    - Python dtype: int
- start_y
    - The starting y-coordinate of the crop (inclusive), defining the top boundary of the crop rectangle. It affects the top portion of the image that will be cropped away.
    - Comfy dtype: INT
    - Python dtype: int
- end_x
    - The ending x-coordinate of the crop (exclusive), defining the right boundary of the crop rectangle. It specifies the width of the cropped image.
    - Comfy dtype: INT
    - Python dtype: int
- end_y
    - The ending y-coordinate of the crop (exclusive), defining the bottom boundary of the crop rectangle. It specifies the height of the cropped image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The cropped images, resized to the specified dimensions by removing portions outside the defined rectangular area.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTransformCropAbsolute:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "start_x": ("INT", {
                    "default": 0,
                    "step": 1
                }),
                "start_y": ("INT", {
                    "default": 0,
                    "step": 1
                }),
                "end_x": ("INT", {
                    "default": 128,
                    "step": 1
                }),
                "end_y": ("INT", {
                    "default": 128,
                    "step": 1
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/transform"

    def node(self, images, start_x, start_y, end_x, end_y):
        def resize_tensor(tensor):
            return tensor.tensor_to_image().crop([start_x, start_y, end_x, end_y]).image_to_tensor()

        return (torch.stack([
            resize_tensor(images[i]) for i in range(len(images))
        ]),)

```
