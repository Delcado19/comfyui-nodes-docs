
# Documentation
- Class name: ReverseImageBatch
- Category: KJNodes/image
- Output node: False

The ReverseImageBatch node reverses the order of images in a batch, providing a simple and effective method for image sequence operations.

# Input types
## Required
- images
    - The image batch that needs to be reversed. This input is crucial for determining the arrangement of images in the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The image batch after order reversal. This output is essential for applications that require a specific image sequence.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ReverseImageBatch:
    
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "reverseimagebatch"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Reverses the order of the images in a batch.
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                 "images": ("IMAGE",),
        },
    } 
    
    def reverseimagebatch(self, images):
        reversed_images = torch.flip(images, [0])
        return (reversed_images, )

```
