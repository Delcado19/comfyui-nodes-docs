# Documentation
- Class name: ImageBatchJoin
- Category: `image/batch`
- Output node: `False`

ImageBatchJoin is a node used to concatenate two image batches along the batch dimension, ensuring that the images in both batches have matching dimensions before concatenation. It provides a mechanism to combine image data from different sources or processing stages into a single batch for further processing or analysis.

## Input types
### Required
- **`images_a`**
    - The first batch of images to concatenate. These images must have the same dimensions as the images in `images_b` to ensure the operation succeeds.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`
- **`images_b`**
    - The second batch of images to concatenate with the first batch. These images must have dimensions matching `images_a` to allow concatenation without errors.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`

## Output types
### `image`
- Comfy dtype: `IMAGE`
- The concatenated image batch, combining `images_a` and `images_b` along the batch dimension.
- Python dtype: `torch.Tensor`

## Usage tips
- Infra type: `GPU`
- Common nodes: Unknown

## Source code
```python
class ImageBatchJoin:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images_a": ("IMAGE",),
                "images_b": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/batch"

    def node(self, images_a, images_b):
        height_a, width_a, channels_a = images_a[0].shape
        height_b, width_b, channels_b = images_b[0].shape

        if height_a != height_b:
            raise ValueError("高度不匹配。images_a 和 images_b 的高度不同，您可以通过使用 ImageTransformResize 进行修复。")

        if width_a != width_b:
            raise ValueError("宽度不匹配。images_a 和 images_b 的宽度不同，您可以通过使用 ImageTransformResize 进行修复。")

        if channels_a != channels_b:
            raise ValueError("通道数不匹配。images_a 和 images_b 的通道数不同，您可以使用 AlphaChanel 模块添加或删除 alpha 通道。")

        return (torch.cat((images_a, images_b)),)

```