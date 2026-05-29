---
tags:
- AlphaChannel
- Image

# AlphaChanelAsMask
## Documentation Overview
### Class Name: `AlphaChanelAsMask`
### Category: `image/alpha`
### Output Node: `False`

`AlphaChanelAsMask` node is used to process images to extract or invert their alpha channel, effectively converting the alpha channel into a mask. This operation allows customization of image transparency manipulation via the method parameter, supporting both standard and inverted alpha channel extraction.
## Input Types
### Required
- **`images`**
    - The `images` parameter represents the input images whose transparency characteristics are to be extracted or modified. It determines the transparent portions of the image to be extracted or operated on.
    - Comfy dtype：`IMAGE`
    - Python dtype：`torch.Tensor`
- **`method`**
    - The `method` parameter specifies the alpha channel processing mode, allowing for standard alpha channel extraction or its inversion. This choice affects how the resulting mask represents transparency.
    - Comfy dtype：`COMBO[STRING]`
    - Python dtype：`str`
## Output Types
- **`mask`**
    - Comfy dtype：`MASK`
    - The output is a mask extracted from the alpha channel of the input image, which can represent either the direct alpha channel or its inversion, depending on the selected processing method.
    - Python dtype：`torch.Tensor`

## Usage Tips
- Hardware Type: `GPU`
- Common Nodes: Unknown

## Source Code
```python
class AlphaChanelAsMask:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "method": (["default", "invert"],),
            },
        }

    RETURN_TYPES = ("MASK",)
    FUNCTION = "node"
    CATEGORY = "image/alpha"

    def node(self, images, method):
        if images[0, 0, 0].shape[0] != 4:
            raise ValueError("Alpha chanel not exist.")

        if method == "default":
            return (1.0 - images[0, :, :, 3],)
        elif method == "invert":
            return (images[0, :, :, 3],)
        else:
            raise ValueError("Unexpected method.")
```