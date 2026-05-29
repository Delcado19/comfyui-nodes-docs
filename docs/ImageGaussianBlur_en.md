
# Documentation
- Class name: ImageGaussianBlur
- Category: Art Venture/Utils
- Output node: False

The ImageGaussianBlur node applies a Gaussian blur filter to a set of images, effectively smoothing the images with the specified radius. This operation is commonly used in image processing to reduce noise and detail, or to create visual effects.

# Input types
## Required
- images
    - A collection of images that require blurring. This input is crucial for defining the set of images to undergo the Gaussian blur transformation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- radius
    - The radius for the Gaussian blur. A larger radius produces a more pronounced blur effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The blurred images, returned as a single tensor by concatenating the individually blurred images along the batch dimension.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilImageGaussianBlur:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "radius": ("INT", {"default": 1, "min": 1, "max": 100}),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "image_gaussian_blur"

    def image_gaussian_blur(self, images, radius):
        blured_images = []
        for image in images:
            img = tensor2pil(image)
            img = img.filter(ImageFilter.GaussianBlur(radius=radius))
            blured_images.append(pil2tensor(img))

        return (torch.cat(blured_images, dim=0),)

```
