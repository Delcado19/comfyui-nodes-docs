
# Documentation
- Class name: GetImageRangeFromBatch
- Category: KJNodes/image
- Output node: False

The GetImageRangeFromBatch node is designed to extract a specific range of images from a given image batch, based on a starting index and the desired number of frames. It enables convenient selective processing or viewing of subsets within large image collections.

# Input types
## Required
- images
    - The image collection from which the range will be selected. This parameter is critical for defining the subset of images to process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- start_index
    - The index at which to begin selecting images. This parameter determines the starting point of the image range to extract.
    - Comfy dtype: INT
    - Python dtype: int
- num_frames
    - The number of images to include in the selected range, starting from start_index. This defines the size of the output batch.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The selected range of images from the input batch, returned as a new image batch.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GetImageRangeFromBatch:
    
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "imagesfrombatch"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Creates a new batch using images from the input,  
batch, starting from start_index.
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                 "images": ("IMAGE",),
                 "start_index": ("INT", {"default": 0,"min": -1, "max": 4096, "step": 1}),
                 "num_frames": ("INT", {"default": 1,"min": 1, "max": 4096, "step": 1}),
        },
    } 
    
    def imagesfrombatch(self, images, start_index, num_frames):
        if start_index == -1:
            start_index = len(images) - num_frames
        if start_index < 0 or start_index >= len(images):
            raise ValueError("GetImageRangeFromBatch: Start index is out of range")
        end_index = start_index + num_frames
        if end_index > len(images):
            raise ValueError("GetImageRangeFromBatch: End index is out of range")
        chosen_images = images[start_index:end_index]
        return (chosen_images, )

```
