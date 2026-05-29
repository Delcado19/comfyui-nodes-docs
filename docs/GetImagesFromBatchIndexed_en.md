
# Documentation
- Class name: GetImagesFromBatchIndexed
- Category: KJNodes/image
- Output node: False

The GetImagesFromBatchIndexed node is designed to selectively retrieve images from a given image batch based on specified indices, effectively creating a new batch containing only the images at the given positions.

# Input types
## Required
- images
    - The batch from which to select images. The indices determine which images will be included in the output batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- indexes
    - A string specifying the indices of images to select from the batch. This allows flexible selection of images.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - Returns the selected images at the specified indices as a new batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class GetImagesFromBatchIndexed:
    
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "indexedimagesfrombatch"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Selects and returns the images at the specified indices as an image batch.
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                 "images": ("IMAGE",),
                 "indexes": ("STRING", {"default": "0, 1, 2", "multiline": True}),
        },
    } 
    
    def indexedimagesfrombatch(self, images, indexes):
        
        # Parse the indexes string into a list of integers
        index_list = [int(index.strip()) for index in indexes.split(',')]
        
        # Convert list of indices to a PyTorch tensor
        indices_tensor = torch.tensor(index_list, dtype=torch.long)
        
        # Select the images at the specified indices
        chosen_images = images[indices_tensor]
        
        return (chosen_images,)

```
