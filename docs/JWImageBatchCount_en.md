
# Documentation
- Class name: JWImageBatchCount
- Category: jamesWalker55
- Output node: False

The JWImageBatchCount node calculates the total number of images in a given image batch, providing a simple way to determine the batch size.

# Input types
## Required
- images
    - A tensor containing a batch of images. This is the key input for determining the total number of images in the batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- int
    - The total number of images present in the input batch.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
@register_node("JWImageLoadRGB", "Image Load RGB")
class _:
    CATEGORY = "jamesWalker55"
    INPUT_TYPES = lambda: {
        "required": {
            "path": ("STRING", {"default": "./image.png"}),
        }
    }
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    def execute(self, path: str):
        assert isinstance(path, str)

        img = load_image(path)
        return (img,)

```
