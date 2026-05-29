
# Documentation
- Class name: DistanceTransform
- Category: Bmad/CV/Thresholding
- Output node: False

The DistanceTransform node applies a distance transform to a binary image. It converts the binary image to a grayscale image, where each pixel's intensity is proportional to its distance to the nearest foreground pixel. The node supports various distance types and mask sizes to customize the transform effect as needed.

# Input types
## Required
- binary_image
- A binary image requiring a distance transform. It serves as the input for computing distances to the nearest foreground pixel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- distance_type
- Specify the distance calculation type to use, allowing customization of the transform effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mask_size
- Determine the mask size used in the distance transform, affecting the granularity of distance computation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
- The resulting image after the distance transform. This is a grayscale image where each pixel's intensity reflects its distance to the nearest foreground pixel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DistanceTransform:
    distance_types_map = {
        "DIST_L2": cv.DIST_L2,
        "DIST_L1": cv.DIST_L1,
        "DIST_C": cv.DIST_C,
    }
    distance_types = list(distance_types_map.keys())

    mask_sizes_map = {
        "DIST_MASK_3": cv.DIST_MASK_3,
        "DIST_MASK_5": cv.DIST_MASK_5,
        "DIST_MASK_PRECISE": cv.DIST_MASK_PRECISE
    }
    mask_sizes = list(mask_sizes_map.keys())

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "binary_image": ("IMAGE",),
                "distance_type": (s.distance_types, {"default": s.distance_types[0]}),
                "mask_size": (s.mask_sizes, {"default": s.mask_sizes[0]}),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "apply"
    CATEGORY = "Bmad/CV/Thresholding"

    def apply(self, binary_image, distance_type, mask_size):
        binary_image = tensor2opencv(binary_image, 1)
        distance_transform = cv.distanceTransform(
            binary_image,
            self.distance_types_map[distance_type],
            self.mask_sizes_map[mask_size])
        distance_transform = opencv2tensor(distance_transform)
        return (distance_transform,)

```
