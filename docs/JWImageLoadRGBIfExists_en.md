
# Documentation
- Class name: JWImageLoadRGBIfExists
- Category: jamesWalker55
- Output node: False

This node aims to load an RGB image from the specified path if it exists; otherwise, it returns the default image provided as input. It ensures conditional execution based on file existence, enabling flexible image processing in workflows where the presence of an image file cannot be guaranteed.

# Input types
## Required
- default
    - The default image to return when the specified path does not contain an image file. This provides a fallback, ensuring that node operation can proceed even if the target file does not exist.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- path
    - Specifies the file path of the image to load. If the file does not exist, the node will use the provided default image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - Outputs the loaded RGB image if the specified file exists; otherwise, outputs the default image. This output facilitates subsequent image processing or analysis steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
@register_node("JWImageLoadRGBIfExists", "Image Load RGB If Exists")
class _:
    CATEGORY = "jamesWalker55"
    INPUT_TYPES = lambda: {
        "required": {
            "default": ("IMAGE",),
            "path": ("STRING", {"default": "./image.png"}),
        }
    }
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    def execute(self, path: str, default: torch.Tensor):
        assert isinstance(path, str)
        assert isinstance(default, torch.Tensor)

        if not os.path.exists(path):
            return (default,)

        img = load_image(path)
        return (img,)

    @classmethod
    def IS_CHANGED(cls, path: str, default: torch.Tensor):
        if os.path.exists(path):
            mtime = os.path.getmtime(path)
        else:
            mtime = None
        return (mtime, default.__hash__())

```
