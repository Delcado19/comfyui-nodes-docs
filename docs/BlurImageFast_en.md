
# Documentation
- Class name: BlurImageFast
- Category: image/filters
- Output node: False

BlurImageFast node provides a fast and efficient way to apply Gaussian blur to images. It blurs images by specifying blur radii in x and y directions, thereby achieving customizable blur effects.

# Input types
## Required
- images
    - The images parameter represents the images to be blurred. It is crucial for defining the input images to which the Gaussian blur effect will be applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- radius_x
    - The radius_x parameter specifies the horizontal radius of the Gaussian blur. It determines the blur extent along the x-axis of the image.
    - Comfy dtype: INT
    - Python dtype: int
- radius_y
    - The radius_y parameter specifies the vertical radius of the Gaussian blur. It determines the blur extent along the y-axis of the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a blurred version of the input image, achieved by applying Gaussian blur according to the radius_x and radius_y parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BlurImageFast:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "radius_x": ("INT", {
                    "default": 1,
                    "min": 0,
                    "max": 1023,
                    "step": 1
                }),
                "radius_y": ("INT", {
                    "default": 1,
                    "min": 0,
                    "max": 1023,
                    "step": 1
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "blur_image"

    CATEGORY = "image/filters"

    def blur_image(self, images, radius_x, radius_y):
        
        if radius_x + radius_y == 0:
            return (images,)
        
        dx = radius_x * 2 + 1
        dy = radius_y * 2 + 1
        
        dup = copy.deepcopy(images.cpu().numpy())
        
        for index, image in enumerate(dup):
            dup[index] = cv2.GaussianBlur(image, (dx, dy), 0)
        
        return (torch.from_numpy(dup),)

```
