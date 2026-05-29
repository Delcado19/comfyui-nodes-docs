
# Documentation
- Class name: Get resolution [Crystools]
- Category: crystools 🪛/Image
- Output node: True

This node determines the image resolution, offering a straightforward way to extract and use image dimensions. It abstracts away the complexity of image data structures, providing a simple interface to get width and height.

# Input types
## Required
- image
    - The image whose resolution is to be determined. It plays a vital role in node operation, serving as the main data source for extracting dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
    - Pixel width of the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Pixel height of the image.
    - Comfy dtype: INT
    - Python dtype: int
- ui
    - User interface element that displays the image resolution in text format.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CImageGetResolution:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
            },
            "hidden": {
                "unique_id": "UNIQUE_ID",
                "extra_pnginfo": "EXTRA_PNGINFO",
            },
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.IMAGE.value
    RETURN_TYPES = ("INT", "INT",)
    RETURN_NAMES = ("width", "height",)
    OUTPUT_NODE = True

    FUNCTION = "execute"

    def execute(self, image, extra_pnginfo=None, unique_id=None):
        res = getResolutionByTensor(image)
        text = [f"{res['x']}x{res['y']}"]
        setWidgetValues(text, unique_id, extra_pnginfo)
        logger.debug(f"Resolution: {text}")
        return {"ui": {"text": text}, "result": (res["x"], res["y"])}

```
