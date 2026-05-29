# Documentation
- Class name: ImageClamp
- Category: clamp
- Output node: False

The ImageClamp node serves as a transition or checkpoint in a data processing pipeline, used to pass raw image data without modification. It ensures image data conforms to expected formats or standards without altering content.

## Input types
### Required
- **image**
    - The 'image' input type represents image data that passes through the node unmodified. It serves as a mechanism to ensure data conforms to expected formats or standards within the pipeline.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Output types
- **image**
    - Comfy dtype: IMAGE
    - The output is unmodified image data, ensuring it conforms to expected formats or standards within the data processing pipeline.
    - Python dtype: torch.Tensor

## Usage tips
- Infra type: CPU
- Common nodes: unknown


## Source code
```python
class ImageClamp:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "clamp"

    def node(self, image):
        return (image,)
```