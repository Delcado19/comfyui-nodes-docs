
# Documentation
- Class name: ImageEffectsSepia
- Category: image/effects
- Output node: False

The ImageEffectsSepia node applies a vintage sepia tone effect to images, converting the color scheme of the image to mimic the appearance of old photographs from the late 19th and early 20th centuries. This effect is achieved by adjusting the RGB values of the input image, creating a warm brown tone that evokes nostalgia and a timeless feeling.

# Input types
## Required
- images
    - The images parameter represents the input images to which the vintage sepia tone effect will be applied. It is crucial for defining the visual content to be transformed, directly affecting the execution of the node and the appearance of the output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is a modified version of the input image with the vintage sepia tone applied, presenting a nostalgic and timeless appearance.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageEffectsSepia:
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
        tensor = images.clone().detach()

        sepia_mask = torch.tensor([[0.393, 0.349, 0.272],
                                   [0.769, 0.686, 0.534],
                                   [0.189, 0.168, 0.131]])

        tensor[:, :, :, 0:3] = torch.stack([
            torch.matmul(tensor[i, :, :, 0:3], sepia_mask) for i in range(len(tensor))
        ])

        return (tensor,)

```
