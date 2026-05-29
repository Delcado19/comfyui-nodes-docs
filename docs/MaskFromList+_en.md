
# Documentation
- Class name: `MaskFromList+`
- Category: `essentials`
- Output node: `False`

The MaskFromList node is used to create a mask from a list of values, allowing the mask size to be specified via width and height parameters. This feature is essential for generating custom masks that can be adjusted to specific dimensions, facilitating various image processing tasks such as segmentation and conditional settings.

# Input types
## Required
- values
- The values parameter is a list of floats representing the mask intensity values. These values are crucial for defining the mask appearance, with each value corresponding to the intensity of a pixel in the mask.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- width
- The width parameter specifies the width of the mask to be generated. It determines the horizontal size of the mask and plays a key role in shaping the mask's size and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The height parameter defines the height of the mask to be generated. It determines the vertical size of the mask, affecting the mask's size and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
- The output mask parameter is the mask generated based on the provided values and dimensions. It represents a custom mask created with the specified width and height, suitable for various image processing applications.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class MaskFromList:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "values": ("FLOAT", { "min": 0.0, "max": 1.0, "step": 0.01, }),
                "width": ("INT", { "default": 32, "min": 1, "max": MAX_RESOLUTION, "step": 8, }),
                "height": ("INT", { "default": 32, "min": 1, "max": MAX_RESOLUTION, "step": 8, }),
            }
        }

    RETURN_TYPES = ("MASK",)
    FUNCTION = "execute"
    CATEGORY = "essentials"

    def execute(self, values, width, height):
        if not isinstance(values, list):
            values = [values]

        values = torch.tensor(values).float()
        values = torch.clamp(values, 0.0, 1.0)
        #values = (values - values.min()) / values.max()

        return (values.unsqueeze(1).unsqueeze(2).repeat(1, width, height), )

```
