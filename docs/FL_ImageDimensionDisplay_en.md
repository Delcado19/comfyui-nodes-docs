
# Documentation
- Class name: FL_ImageDimensionDisplay
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FL_ImageDimensionDisplay node is designed to compute and display image dimensions, supporting single images and batched images in various formats. It abstracts the complexity of handling different image representations, providing an intuitive way to obtain image dimensions.

# Input types
## Required
- image
    - Image input is critical for determining the dimensions of the provided image. It supports tensor and PIL image formats, adjusting its processing based on the input type to accurately return image dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, Image.Image]

# Output types
- string
    - Outputs the provided image dimensions as a string, formatted to include width and height.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FL_ImageDimensionDisplay:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE", {}),
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "display_dimensions"
    CATEGORY = "🏵️Fill Nodes"

    def display_dimensions(self, image):
        # Check the number of dimensions in the image tensor to correctly unpack the dimensions
        if isinstance(image, torch.Tensor):
            if image.dim() == 4:  # Batch dimension is present
                _, height, width, _, = image.shape
            elif image.dim() == 3:  # No batch dimension, single image
                _, height, width = image.shape
            else:
                return ("Unsupported tensor format",)
        elif isinstance(image, Image.Image):
            width, height = image.size
        else:
            return ("Unsupported image format",)

        # Correctly assign width and height
        dimensions = f"Width: {width}, Height: {height}"

        # Display dimensions in the UI. This might need to be adapted.
        print(dimensions)

        # Return the dimensions as a string.
        return (dimensions,)

```
