
# Documentation
- Class name: ImageConstant
- Category: image/filters
- Output node: False

The ImageConstant node is designed to generate images with a fixed color. It allows users to specify the color in RGB format, while setting the image dimensions and batch size, enabling the creation of multiple images with the same color specifications in a single operation.

# Input types
## Required
- width
    - Specifies the width of the generated image. It determines the horizontal size of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Determines the height of the generated image, affecting its vertical size.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Represents the number of images to generate in a single batch, allowing multiple images to be created simultaneously.
    - Comfy dtype: INT
    - Python dtype: int
- red
    - Sets the red component of the fixed color for the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- green
    - Defines the green component of the fixed color for the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blue
    - Specifies the blue component of the fixed color for the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - Outputs a single image or a batch of images with the specified RGB format fixed color.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageConstant:
    def __init__(self, device="cpu"):
        self.device = device

    @classmethod
    def INPUT_TYPES(s):
        return {"required": { "width": ("INT", {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 1}),
                              "height": ("INT", {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 1}),
                              "batch_size": ("INT", {"default": 1, "min": 1, "max": 4096}),
                              "red": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                              "green": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                              "blue": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                              }}
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "generate"

    CATEGORY = "image/filters"

    def generate(self, width, height, batch_size, red, green, blue):
        r = torch.full([batch_size, height, width, 1], red)
        g = torch.full([batch_size, height, width, 1], green)
        b = torch.full([batch_size, height, width, 1], blue)
        return (torch.cat((r, g, b), dim=-1), )

```
