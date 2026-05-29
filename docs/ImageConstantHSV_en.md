
# Documentation
- Class name: `ImageConstantHSV`
- Category: `image/filters`
- Output node: `False`

The ImageConstantHSV node generates a solid-color image based on specified HSV (Hue, Saturation, Value) color values. It allows creating uniform color images with adjustable color properties, enabling the generation of images with precise hues.

# Input types
## Required
- **`width`**
    - Specifies the width of the generated image. It determines the horizontal size of the output image.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`height`**
    - Specifies the height of the generated image. It determines the vertical dimension of the output image.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`batch_size`**
    - Determines the number of images generated in a single batch. This allows generating multiple images with the same color properties simultaneously.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`hue`**
    - Sets the Hue component in the HSV color model, defining the basic tone of the color.
    - Comfy dtype: `FLOAT`
    - Python dtype: `float`
- **`saturation`**
    - Sets the Saturation component in the HSV color model, controlling the intensity of the color.
    - Comfy dtype: `FLOAT`
    - Python dtype: `float`
- **`value`**
    - Sets the Value component in the HSV color model, determining the brightness of the color.
    - Comfy dtype: `FLOAT`
    - Python dtype: `float`

# Output types
- **`image`**
    - A solid-color image generated based on the specified HSV values.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageConstantHSV:
    def __init__(self, device="cpu"):
        self.device = device

    @classmethod
    def INPUT_TYPES(s):
        return {"required": { "width": ("INT", {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 1}),
                              "height": ("INT", {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 1}),
                              "batch_size": ("INT", {"default": 1, "min": 1, "max": 4096}),
                              "hue": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                              "saturation": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                              "value": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                              }}
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "generate"

    CATEGORY = "image/filters"

    def generate(self, width, height, batch_size, hue, saturation, value):
        red, green, blue = hsv_to_rgb(hue, saturation, value)
        
        r = torch.full([batch_size, height, width, 1], red)
        g = torch.full([batch_size, height, width, 1], green)
        b = torch.full([batch_size, height, width, 1], blue)
        return (torch.cat((r, g, b), dim=-1), )

```
