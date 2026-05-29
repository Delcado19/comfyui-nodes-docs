
# Documentation
- Class name: AspectRatioSelector
- Category: Art Venture/Utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AspectRatioSelector node is designed to select and adjust the aspect ratio of images based on predefined options. It simplifies the process of resizing images to specific dimensions, ensuring the output meets the desired aspect ratio. This node is particularly useful in image processing and layout design, enabling rapid standardized image resizing.

# Input types
## Required
- aspect_ratio
    - Specify the desired image aspect ratio from a predefined list of common ratios. This selection determines the dimensions to which the image will be resized, directly affecting the final appearance and layout of the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- ratio
    - Returns the selected aspect ratio as a string, representing the proportional relationship between the image width and height. This output can be used for subsequent image processing or layout calculations.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The calculated width of the image after adjustment according to the selected aspect ratio. This value reflects the new width of the image while maintaining the chosen aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The calculated height of the image after adjustment according to the selected aspect ratio. This value reflects the new height of the image while maintaining the chosen aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilAspectRatioSelector(UtilSDXLAspectRatioSelector):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "aspect_ratio": (
                    [
                        "1:1",
                        "2:3",
                        "3:4",
                        "9:16",
                        "3:2",
                        "4:3",
                        "16:9",
                    ],
                ),
            }
        }

    def get_aspect_ratio(self, aspect_ratio):
        ratio, width, height = super().get_aspect_ratio(aspect_ratio)

        scale_ratio = 768 / max(width, height)

        width = int(scale_ratio * width / 8) * 8
        height = int(scale_ratio * height / 8) * 8

        return (ratio, width, height)

```
