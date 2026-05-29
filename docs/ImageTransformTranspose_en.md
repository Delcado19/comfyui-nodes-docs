
# Documentation
- Class name: ImageTransformTranspose
- Category: image/transform
- Output node: False

The ImageTransformTranspose node abstracts complex image manipulation tasks, allowing various geometric transformations to be applied to a batch of images. This facilitates easy integration into image processing pipelines, enhancing the flexibility and efficiency of image operations.

# Input types
## Required
- images
    - The images parameter represents the batch of images to be transformed and is a key input data for the node operation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- method
    - The method parameter determines the type of geometric transformation to apply, affecting the node's processing and transformation results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The images after geometric transformation reflect the applied transformation effects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTransformTranspose:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "method": (["flip_horizontally", "flip_vertically", "rotate_90", "rotate_180", "rotate_270", "transpose", "transverse"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/transform"

    def node(self, images, method):
        def transpose_tensor(tensor):
            if method == "flip_horizontally":
                transpose = Image.FLIP_LEFT_RIGHT
            elif method == "flip_vertically":
                transpose = Image.FLIP_TOP_BOTTOM
            elif method == "rotate_90":
                transpose = Image.ROTATE_90
            elif method == "rotate_180":
                transpose = Image.ROTATE_180
            elif method == "rotate_270":
                transpose = Image.ROTATE_270
            elif method == "transpose":
                transpose = Image.TRANSPOSE
            elif method == "transverse":
                transpose = Image.TRANSVERSE
            else:
                raise ValueError()

            return tensor.tensor_to_image().transpose(transpose).image_to_tensor()

        return (torch.stack([
            transpose_tensor(images[i]) for i in range(len(images))
        ]),)

```
