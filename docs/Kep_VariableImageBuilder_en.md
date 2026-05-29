
# Documentation
- Class name: Kep_VariableImageBuilder
- Category: List Stuff
- Output node: False

The VariableImageBuilder node is used to generate a batch of images with specified RGBA color values and dimensions. It allows the creation of uniformly colored images that can be used for various purposes such as placeholders, backgrounds, or testing.

# Input types
## Required
- r
    - Specifies the red component of the image RGBA color. It affects the overall color of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- g
    - Specifies the green component of the image RGBA color. It affects the overall color of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - Specifies the blue component of the image RGBA color. It affects the overall color of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- a
    - Specifies the alpha component of the image RGBA color. It determines the opacity of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Determines the width of the generated image. It defines the horizontal dimension of the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Determines the height of the generated image. It defines the vertical dimension of the image.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Specifies the number of images to generate in a batch. It controls the total output quantity of images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- Image
    - The output is a batch of images with the specified RGBA color values and dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: Tuple[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class VariableImageBuilder:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(s) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {
                "r": ("INT", {"defaultInput": True, "min": 0, "max": 255}),
                "g": ("INT", {"defaultInput": True, "min": 0, "max": 255}),
                "b": ("INT", {"defaultInput": True, "min": 0, "max": 255}),
                "a": ("INT", {"defaultInput": True, "min": 0, "max": 255}),
                "width": ("INT", {"defaultInput": False, "default": 512}),
                "height": ("INT", {"defaultInput": False, "default": 512}),
                "batch_size": ("INT", {"default": 1, "min": 1}),
            },
        }

    RELOAD_INST = True
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("Image",)
    OUTPUT_IS_LIST = (False,)
    FUNCTION = "generate_images"

    CATEGORY = "List Stuff"

    def generate_images(
            self,
            r: int,
            g: int,
            b: int,
            a: int,
            width: int,
            height: int,
            batch_size: int,
    ) -> Tuple[Tensor]:
        batch_tensors: List[Tensor] = []
        for _ in range(batch_size):
            image = Image.new("RGB", (width, height), color=(r, g, b, a))
            batch_tensors.append(pil2tensor(image))
        return (torch.cat(batch_tensors),)

```
