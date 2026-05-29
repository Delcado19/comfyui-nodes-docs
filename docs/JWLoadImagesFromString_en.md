
# Documentation
- Class name: JWLoadImagesFromString
- Category: jamesWalker55
- Output node: False

The JWLoadImagesFromString node is designed to load images directly from a string input, facilitating the conversion of text image data to a usable image format for subsequent processing or visualization.

# Input types
## Required
- paths
    - The paths parameter accepts a list of file paths as strings, used to indicate the locations of images to load. This input is crucial for identifying and accessing the user-specified images.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- ignore_missing_images
    - The ignore_missing_images parameter is a boolean flag that determines how to handle missing images specified in 'paths'. If set to True, missing images will be ignored without raising an error; otherwise, an error will be thrown for any missing image.
    - Comfy dtype: ['false', 'true']
    - Python dtype: bool

# Output types
- image
    - The output is a single image or a batch of images loaded from the specified file paths. This output is crucial for subsequent image processing or visualization tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
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
