
# Documentation
- Class name: ReplaceImagesInBatch
- Category: KJNodes/image
- Output node: False

The ReplaceImagesInBatch node replaces a portion of images within a batch. It allows replacing part of the original image batch with a new set of images starting from a specified index position. This feature enables dynamic updates or corrections to batch content, providing flexible adjustments for batched image processing.

# Input types
## Required
- original_images
    - This is the original image batch that will undergo the replacement operation. As the base content, it serves as the starting point for the entire replacement process and is critical to the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- replacement_images
    - This is the new set of images used to replace part of the original batch. It defines the new content to be introduced into the batch and is the core input for the replacement operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- start_index
    - This parameter specifies the index position in the original batch where replacement begins. It determines the starting point for modifications, allowing precise control over where updates are applied.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image is the modified version of the image batch after the replacement operation. It reflects all updates and corrections made.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ReplaceImagesInBatch:
    
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "replace"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Replaces the images in a batch, starting from the specified start index,  
with the replacement images.
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                 "original_images": ("IMAGE",),
                 "replacement_images": ("IMAGE",),
                 "start_index": ("INT", {"default": 1,"min": 0, "max": 4096, "step": 1}),
        },
    } 
    
    def replace(self, original_images, replacement_images, start_index):
        images = None
        if start_index >= len(original_images):
            raise ValueError("GetImageRangeFromBatch: Start index is out of range")
        end_index = start_index + len(replacement_images)
        if end_index > len(original_images):
            raise ValueError("GetImageRangeFromBatch: End index is out of range")
         # Create a copy of the original_images tensor
        original_images_copy = original_images.clone()
        original_images_copy[start_index:end_index] = replacement_images
        images = original_images_copy
        return (images, )

```
