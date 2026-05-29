# Documentation
- Class name: ImageBatchRemove
- Category: image/batch
- Output node: False

The ImageBatchRemove node selectively removes images from a batch based on indices. This functionality is essential for operations that need to exclude specific images for further processing, enabling dynamic manipulation of image collections.

## Input types
### Required
- **images**
    - The 'images' parameter represents the batch of images to be modified. It specifies the group of images affected by the changes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- **index**
    - The 'index' parameter determines the position of the image to remove from the batch. It plays a key role in identifying the specific image to exclude, ensuring precise manipulation of the image collection.
    - Comfy dtype: INT
    - Python dtype: int

## Output types
- **image**
    - Returns a new batch of images with the specified images removed, facilitating dynamic adjustment of image collections.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Usage tips
- Infra type: GPU
- Common nodes: unknown


## Source code
```python
class ImageBatchRemove:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "index": ("INT", {
                    "default": 1,
                    "min": 1,
                    "step": 1
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/batch"

    def node(self, images, index):
        batch_size = images.shape[0]
        index = min(batch_size, index - 1)

        return (torch.cat((images[:index], images[index + 1:]), dim=0),)
```