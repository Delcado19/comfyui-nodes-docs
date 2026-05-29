---
tags:
- Batch
- Image
- ImageDuplication

# ImageBatchCopy
## Documentation Overview
### Class Name: `ImageBatchCopy`
### Category: `image/batch`
### Output Node: `False`

The `ImageBatchCopy` node is designed to copy a specific image in a batch of images a specified number of times. It focuses on adjusting the composition of an image batch by repeating a selected image to augment or diversify the dataset for further processing or analysis.
## Input Types
### Required
- **`images`**
    - Specifies a set of images to process. This parameter is used to determine the source image from which to copy.
    - Comfy data type: `IMAGE`
    - Python data type: `torch.Tensor`
- **`index`**
    - Indicates the position of the image to copy in the batch. This parameter is crucial for selecting the specific image to be copied.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`quantity`**
    - Defines the number of times the selected image should be copied within the batch. This parameter directly affects the size of the output batch by increasing the number of images, altering the composition.
    - Comfy dtype: `INT`
    - Python dtype: `int`
## Output Types
- **`image`**
    - Comfy data type: `IMAGE`
    - Returns a new batch of images where the specific image has been copied the specified number of times, thus altering the batch composition.
    - Python data type: `torch.Tensor`

## Usage Tips
- Hardware Type: `GPU`
- Common Nodes: Unknown

## Source Code
```python
class ImageBatchCopy:
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
                "quantity": ("INT", {
                    "default": 1,
                    "min": 2,
                    "step": 1
                })
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/batch"

    def node(self, images, index, quantity):
        batch_size = images.shape[0]
        index = min(batch_size, index) - 1

        return (images[index].repeat(quantity, 1, 1, 1),)
```