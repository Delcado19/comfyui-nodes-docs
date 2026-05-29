---
tags:
- AlphaChannel
- Image

# AlphaChanelRestore
## Documentation Overview
### Class Name: `AlphaChanelRestore`
### Category: `image/alpha`
### Output Node: `False`

The `AlphaChanelRestore` node is designed to process images, ensuring that all images have an alpha channel. This operation fixes images by adding or restoring missing alpha channels, which is crucial for workflows that need to maintain image data consistency, especially when dealing with image processing pipelines that require images to have the same number of channels.
## Input Types
### Required
- **`images`**
    - The `images` input represents a batch of images to be processed. It is essential for determining which images lack an alpha channel and subsequently adding one to ensure that all images in the batch have four channels.
    - Comfy data type: `IMAGE`
    - Python data type: `torch.Tensor`

## Output Types
- **`image`**
    - Comfy data type: `IMAGE`
    - The output is a batch of images with an alpha channel added when necessary, ensuring that all images have four channels.
    - Python data type: `torch.Tensor`

## Usage Tips
- Hardware Type: `GPU`
- Common Nodes: Unknown

## Source Code
```python
class AlphaChanelRestore:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/alpha"

    def node(self, images):
        batch, height, width, channels = images.shape

        if channels == 4:
            return (images,) 

        tensor = images.clone().detach()

        tensor[:, :, :, 3] = torch.ones((batch, height, width))

        return (tensor,)
```