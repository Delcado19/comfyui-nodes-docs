
# Documentation
- Class name: RemapRange
- Category: image/filters
- Output node: False

The RemapRange node adjusts the brightness range of an image by remapping its black and white points. This process can enhance the visual contrast of the image or adjust the overall brightness level.

# Input types
## Required
- image
    - The input image to be processed. The brightness levels of this image will be adjusted according to the specified black and white points.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blackpoint
    - The lower bound of the brightness range to be remapped to black. Values below this point will be adjusted to black, affecting the image's contrast and brightness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- whitepoint
    - The upper bound of the brightness range to be remapped to white. Values above this point will be adjusted to white, affecting the image's contrast and brightness level.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image after black and white point remapping, with its brightness levels adjusted.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RemapRange:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "blackpoint": ("FLOAT", {
                    "default": 0.0,
                    "min": 0.0,
                    "max": 1.0,
                    "step": 0.01
                }),
                "whitepoint": ("FLOAT", {
                    "default": 1.0,
                    "min": 0.01,
                    "max": 1.0,
                    "step": 0.01
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "remap"

    CATEGORY = "image/filters"

    def remap(self, image: torch.Tensor, blackpoint: float, whitepoint: float):
        
        bp = min(blackpoint, whitepoint - 0.001)
        scale = 1 / (whitepoint - bp)
        
        i_dup = copy.deepcopy(image.cpu().numpy())
        i_dup = np.clip((i_dup - bp) * scale, 0.0, 1.0)
        
        return (torch.from_numpy(i_dup),)

```
