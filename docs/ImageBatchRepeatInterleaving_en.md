
# Documentation
- Class name: ImageBatchRepeatInterleaving
- Category: KJNodes/image
- Output node: False

The ImageBatchRepeatInterleaving node is designed to expand an image batch by repeating each image in the batch a specified number of times. This operation effectively increases the batch size by duplicating images, which is useful for data augmentation or ensuring uniform batch sizes.

# Input types
## Required
- images
    - The images parameter represents the batch of images to be repeated. It is essential for defining the input data that will undergo the repetition process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- repeats
    - The repeats parameter specifies how many times each image in the batch should be repeated. It directly affects the final batch size by determining the duplication factor for each image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a new image batch where each original image has been repeated according to the repeats parameter, effectively expanding the batch size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageBatchRepeatInterleaving:
    
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "repeat"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Repeats each image in a batch by the specified number of times.  
Example batch of 5 images: 0, 1 ,2, 3, 4  
with repeats 2 becomes batch of 10 images: 0, 0, 1, 1, 2, 2, 3, 3, 4, 4  
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                 "images": ("IMAGE",),
                 "repeats": ("INT", {"default": 1, "min": 1, "max": 4096}),
        },
    } 
    
    def repeat(self, images, repeats):
       
        repeated_images = torch.repeat_interleave(images, repeats=repeats, dim=0)
        return (repeated_images, )

```
