
# Documentation
- Class name: ImageTransformResizeAbsolute
- Category: image/transform
- Output node: False

The ImageTransformResizeAbsolute node provides the ability to resize a batch of images to a specified absolute size, using various interpolation methods. It allows precise control over the output image size, suitable for tasks requiring uniform image dimensions.

# Input types
## Required
- images
    - The batch of images to resize. This parameter is essential because it directly supplies the raw data used for resizing, thereby affecting the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The target width of the resized images. It determines the horizontal dimension of the output images.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The target height of the resized images. It determines the vertical dimension of the output images.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - The interpolation method used for resizing. This affects the quality and characteristics of the resized images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resized images as batch output. This output is the direct result of the resizing operation, providing images of uniform size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTransformResizeAbsolute:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "width": ("INT", {
                    "default": 256,
                    "min": 1,
                    "step": 1
                }),
                "height": ("INT", {
                    "default": 256,
                    "min": 1,
                    "step": 1
                }),
                "method": (["lanczos", "bicubic", "hamming", "bilinear", "box", "nearest"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/transform"

    def node(self, images, width, height, method):
        def resize_tensor(tensor):
            return tensor.tensor_to_image().resize((width, height), get_sampler_by_name(method)).image_to_tensor()

        return (torch.stack([
            resize_tensor(images[i]) for i in range(len(images))
        ]),)

```
