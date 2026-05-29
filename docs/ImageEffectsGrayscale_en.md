
# Documentation
- Class name: ImageEffectsGrayscale
- Category: image/effects
- Output node: False

The ImageEffectsGrayscale node converts a batch of images to grayscale. It averages the color channels of each image to achieve grayscale conversion, applying uniform grayscale processing across the entire image batch.

# Input types
## Required
- images
    - This is the batch of images to be converted to grayscale. This input is essential to the grayscale conversion process, determining which images will undergo this transformation and directly affecting the node's execution result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - Outputs the batch of images after grayscale processing, with each image converted to grayscale mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageEffectsGrayscale:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/effects"

    def node(self, images):
        def apply(image):
            tensor = image.clone().detach()
            grayscale_tensor = torch.mean(tensor, dim=2, keepdim=True)

            return torch.cat([grayscale_tensor] * 3, dim=2)

        return (torch.stack([
            apply(images[i]) for i in range(len(images))
        ]),)

```
