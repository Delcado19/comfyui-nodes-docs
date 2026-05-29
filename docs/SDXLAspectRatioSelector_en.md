
# Documentation
- Class name: SDXLAspectRatioSelector
- Category: Art Venture/Utils
- Output node: False

The SDXLAspectRatioSelector node is designed to select and adjust the aspect ratio of an image, ensuring the image meets specific dimensions while maintaining the original ratio. It provides a mechanism to scale the image to a set of predefined aspect ratios, suitable for various display or processing needs.

# Input types
## Required
- aspect_ratio
    - Specify the desired aspect ratio for the image from a list of predefined ratios. This selection determines the dimensions to which the image will be scaled, thus affecting its final appearance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- ratio
    - The selected aspect ratio, represented as a string, indicating the proportion between the width and height of the image.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The calculated width of the image after scaling based on the selected aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The calculated height of the image after scaling based on the selected aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilSDXLAspectRatioSelector:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "aspect_ratio": (
                    [
                        "1:1",
                        "2:3",
                        "3:4",
                        "5:8",
                        "9:16",
                        "9:19",
                        "9:21",
                        "3:2",
                        "4:3",
                        "8:5",
                        "16:9",
                        "19:9",
                        "21:9",
                    ],
                ),
            }
        }

    RETURN_TYPES = ("STRING", "INT", "INT")
    RETURN_NAMES = ("ratio", "width", "height")
    FUNCTION = "get_aspect_ratio"
    CATEGORY = "Art Venture/Utils"

    def get_aspect_ratio(self, aspect_ratio):
        width, height = 1024, 1024

        if aspect_ratio == "1:1":
            width, height = 1024, 1024
        elif aspect_ratio == "2:3":
            width, height = 832, 1216
        elif aspect_ratio == "3:4":
            width, height = 896, 1152
        elif aspect_ratio == "5:8":
            width, height = 768, 1216
        elif aspect_ratio == "9:16":
            width, height = 768, 1344
        elif aspect_ratio == "9:19":
            width, height = 704, 1472
        elif aspect_ratio == "9:21":
            width, height = 640, 1536
        elif aspect_ratio == "3:2":
            width, height = 1216, 832
        elif aspect_ratio == "4:3":
            width, height = 1152, 896
        elif aspect_ratio == "8:5":
            width, height = 1216, 768
        elif aspect_ratio == "16:9":
            width, height = 1344, 768
        elif aspect_ratio == "19:9":
            width, height = 1472, 704
        elif aspect_ratio == "21:9":
            width, height = 1536, 640

        return (aspect_ratio, width, height)

```
