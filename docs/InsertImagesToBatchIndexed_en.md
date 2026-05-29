
# Documentation
- Class name: InsertImagesToBatchIndexed
- Category: KJNodes/image
- Output node: False

InsertImagesToBatchIndexed node inserts specified images into specific positions of the original image batch, effectively modifying the original sequence by adding new images at designated locations. This operation enables dynamic manipulation of image batches, allowing users to customize image sequences for various application needs.

# Input types
## Required
- original_images
- Represents the original image batch into which new images will be inserted. It is essential for defining the base sequence to be modified.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- images_to_insert
- Specifies the images to insert into the original batch. This parameter is crucial for determining which new images will be added to the sequence.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- indexes
- A comma‑separated index string indicating where the new images should be inserted in the original batch. This parameter determines the insertion points, affecting the final arrangement of the batch.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
- The modified image batch after inserting new images at the specified indices.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class InsertImagesToBatchIndexed:
    
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "insertimagesfrombatch"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Inserts images at the specified indices into the original image batch.
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "original_images": ("IMAGE",),
                "images_to_insert": ("IMAGE",),
                "indexes": ("STRING", {"default": "0, 1, 2", "multiline": True}),
            },
        }
    
    def insertimagesfrombatch(self, original_images, images_to_insert, indexes):
        
        # Parse the indexes string into a list of integers
        index_list = [int(index.strip()) for index in indexes.split(',')]
        
        # Convert list of indices to a PyTorch tensor
        indices_tensor = torch.tensor(index_list, dtype=torch.long)
        
        # Ensure the images_to_insert is a tensor
        if not isinstance(images_to_insert, torch.Tensor):
            images_to_insert = torch.tensor(images_to_insert)
        
        # Insert the images at the specified indices
        for index, image in zip(indices_tensor, images_to_insert):
            original_images[index] = image
        
        return (original_images,)

```
