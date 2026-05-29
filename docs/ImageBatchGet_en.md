# Documentation
- Class name: ImageBatchGet
- Category: image/batch
- Output node: False

The ImageBatchGet node is designed to extract specific images from a batch of images based on given indices. It simplifies the process of handling image batches by allowing selective retrieval of images, which is particularly useful when only a subset of the batch is needed for further processing or analysis.

## Input types
### Required
- **images**
    - The images parameter represents the batch of images from which specific images are to be retrieved. It plays a key role in determining the extraction source.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- **index**
    - The index parameter specifies the position of the image to be extracted from the batch. It is essential for pinpointing the desired image within the batch for further operations.
    - Comfy dtype: INT
    - Python dtype: int

## Output types
### `image`
- Comfy dtype: IMAGE
- This output is the image extracted from the specified index in the batch. It enables focused processing or analysis of individual images within a large collection.
- Python dtype: torch.Tensor

## Usage tips
- Infra type: GPU
- Common nodes: unknown


## Source code
```python
class ImageBatchGet:
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
        index = min(batch_size, index) - 1

        return (images[index].unsqueeze(0),)

```