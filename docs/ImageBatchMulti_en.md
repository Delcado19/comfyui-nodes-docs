
# Documentation
- Class name: ImageBatchMulti
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageBatchMulti node facilitates creating image batches by combining multiple input images into a single batch. It allows dynamic adjustment of the number of input images, supporting flexible and scalable batch image processing.

# Input types
## Required
- inputcount
    - Specifies the number of images to include in the batch, allowing dynamic adjustment of the batch size.
    - Comfy dtype: INT
    - Python dtype: int
- image_i
    - Represents any images to include in the batch, from 'image_1' to 'image_{inputcount}'. Each 'image_i' is dynamically added based on 'inputcount', collectively forming the combined image batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- images
    - The combined image batch aggregated from individual input images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageBatchMulti:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "inputcount": ("INT", {"default": 2, "min": 2, "max": 1000, "step": 1}),
                "image_1": ("IMAGE", ),
                "image_2": ("IMAGE", ),
            },
    }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)
    FUNCTION = "combine"
    CATEGORY = "KJNodes/image"
    DESCRIPTION = """
Creates an image batch from multiple images.  
You can set how many inputs the node has,  
with the **inputcount** and clicking update.
"""

    def combine(self, inputcount, **kwargs):
        from nodes import ImageBatch
        image_batch_node = ImageBatch()
        image = kwargs["image_1"]
        for c in range(1, inputcount):
            new_image = kwargs[f"image_{c + 1}"]
            image, = image_batch_node.batch(new_image, image)
        return (image,)

```
