
# Documentation
- Class name: ImageDuplicator
- Category: image
- Output node: False

The ImageDuplicator node is designed to duplicate each image in a given batch, effectively increasing the image count by repeating images. Its purpose is to augment datasets or prepare data for processes requiring multiple instances of the same image.

# Input types
## Required
- images
    - The images to be duplicated. This parameter is critical as it directly affects the node's operation by specifying which images need to be processed and duplicated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- dup_times
    - Specifies how many times each image should be duplicated. This parameter controls the degree of duplication, thereby determining the total number of images produced by the node.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The node's output, containing the original images along with their copies, effectively increasing the total number of images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageDuplicator:
    """
    Duplicate each images and pipe through
    """

    def __init__(self):
        self._name = "ImageDuplicator"
        pass

    @classmethod
    def INPUT_TYPES(s):
        """
        Input: copies you want to get
        """
        return {
            "required": {
                "images": ("IMAGE", ),
                "dup_times": ("INT", {
                    "default": 2,
                    "min": 1,
                    "max": 16,
                    "step": 1,
                }),
            },
        }

    RETURN_TYPES = ("IMAGE", )
    # RETURN_NAMES = ("image_output_name",)

    FUNCTION = "run"

    OUTPUT_NODE = False

    CATEGORY = "image"

    def run(self, images: torch.Tensor, dup_times: int):
        """
        对输入的图像张量进行复制多次，并将复制后的张量拼接起来返回。

        Args:
            images (torch.Tensor): 输入的图像张量，维度为 (batch_size, channels, height, width)。
            dup_times (int): 复制的次数。

        Returns:
            torch.Tensor: 拼接后的图像张量，维度为 (batch_size * dup_times, channels, height, width)。

        """

        tensor_list = [images
                       ] + [torch.clone(images) for _ in range(dup_times - 1)]

        print(
            f"ImageDuplicator: dup {dup_times} times,",
            f"return {len(tensor_list)} images",
        )
        return (torch.cat(tensor_list), )

```
