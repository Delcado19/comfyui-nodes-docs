
# Documentation
- Class name: ImageBatchToList
- Category: Bmad/image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The main function of the ImageBatchToList node is to convert a batch of images into a list format. This conversion is useful when each image in the batch needs to be processed or manipulated individually. By breaking the batch into a list of separate images, the node provides greater flexibility for subsequent image processing tasks.

# Input types
## Required
- images
    - This input parameter represents the image batch to be converted into a list. It is the core of the node’s operation, allowing the node to iterate over each image in the batch and perform the conversion. This input is essential for the node’s functionality because it supplies the raw data to be processed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is a list of images, where each image from the batch is separated into an individual element in the list. This format conversion makes it easier to operate on single images and offers more possibilities for subsequent image processing workflows.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageBatchToList:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"images": ("IMAGE",)}}

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "to_list"
    CATEGORY = "Bmad/image"
    OUTPUT_IS_LIST = (True,)

    def to_list(self, images):
        image_list = [images[i][None, ...] for i in range(images.shape[0])]
        return (image_list,)

```
