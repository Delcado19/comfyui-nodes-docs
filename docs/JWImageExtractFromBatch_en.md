
# Documentation
- Class name: JWImageExtractFromBatch
- Category: jamesWalker55
- Output node: False

This node extracts a single image from a batch of images based on a specified index, facilitating individual image processing or analysis.

# Input types
## Required
- images
    - This is the image batch from which a single image will be extracted. It is crucial for selecting a specific image for processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- index
    - This is the index of the image to extract from the image batch. It determines which image is selected for extraction.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - This is the single image extracted from the input batch at the specified index.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


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
