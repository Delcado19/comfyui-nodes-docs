# Documentation
- Class name: ImageBatchFork
- Category: image/batch
- Output node: False

The ImageBatchFork node splits a batch of images into two batches based on a specified priority. This is useful for dividing image batches according to critical workflows or algorithms during batch processing.

## Input types
### Required
- **images**
    - The 'images' parameter represents the batch of images to split. It determines the structure of the output batches.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- **priority**
    - The 'priority' parameter decides which of the two resulting batches may contain an extra image when the original batch size is odd. This affects the distribution of images between the two batches.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Output types
- **image**
    - Comfy dtype: IMAGE
    - The output consists of two separate batches of images, divided according to the specified priority.
    - Python dtype: Tuple[torch.Tensor, torch.Tensor]

## Usage tips
- Infra type: GPU
- Common nodes: unknown

## Source code
```python
class ImageBatchFork:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "priority": (["first", "second"],),
            },
        }

    RETURN_TYPES = ("IMAGE", "IMAGE")
    FUNCTION = "node"
    CATEGORY = "image/batch"

    def node(self, images, priority):
        batch_size = images.shape[0]

        if batch_size == 1:
            return images, images
        elif batch_size % 2 == 0:
            first_batch = batch_size // 2
            second_batch = batch_size // 2
        else:
            if priority == "first":
                first_batch = batch_size // 2 + 1
                second_batch = batch_size // 2
            elif priority == "second":
                first_batch = batch_size // 2
                second_batch = batch_size // 2 + 1
            else:
                raise ValueError("Invalid priority specified.")

        return images[:first_batch], images[-second_batch:]
```