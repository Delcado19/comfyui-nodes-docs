---
tags:
- AlphaChannel
- Image

# AlphaChanelRemove
## Documentation Overview
### Class Name: `AlphaChanelRemove`
### Category: `image/alpha`
### Output Node: `False`

The `AlphaChanelRemove` node is designed to process images and remove their alpha channel. This operation simplifies image data, suitable for contexts where transparency is not required, effectively reducing image dimensions for further processing or display.
## Input Types
### Required
- **`images`**
    - The `images` input represents the collection of images from which the alpha channel will be removed. This operation is essential for preparing images in environments that do not support or require transparency.
    - Comfy data type: `IMAGE`
    - Python data type: `torch.Tensor`

## Output Types
- **`image`**
    - Comfy data type: `IMAGE`
    - The output is a modified version of the input images with the alpha channel removed, reducing each image's channels from four to three.
    - Python data type: `torch.Tensor`

## Usage Tips
- Hardware Type: `GPU`
- Common Nodes: Unknown

## Source Code
```python
class AlphaChanelRemove:
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
        return (images[:, :, :, 0:3],)
```