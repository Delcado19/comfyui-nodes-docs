
# Documentation
- Class name: RemapToOuterCylinder
- Category: Bmad/CV/Transform
- Output node: False

The RemapToOuterCylinder node is designed to transform an image into a form mapped onto the surface of a virtual outer cylinder. It adjusts the perspective of the image, simulating the visual effect of the image wrapping around the surface of a cylinder, while considering the field of view angle and whether to swap x and y coordinates.

# Input types
## Required
- fov
    - Specify the field of view angle (in degrees), this parameter affects the curvature and perspective of the remapped image.
    - Comfy dtype: INT
    - Python dtype: int
- swap_xy
    - Decide whether to swap x and y coordinates, which affects the orientation of the remapped image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- remap
    - Provide mapping of x and y coordinates to original image pixels, used to transform the image to the outer cylinder surface.
    - Comfy dtype: REMAP
    - Python dtype: Tuple[ndarray, ndarray, NoneType]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class OuterCylinderRemap(RemapBase):
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "fov": ("INT", {"default": 90, "min": 1, "max": 179}),
            "swap_xy": ("BOOLEAN", {"default": False}),
        }
        }

    def send_remap(self, fov, swap_xy):
        from .utils.remaps import remap_outer_cylinder
        return ({
                    "func": remap_outer_cylinder,
                    "xargs": [fov, swap_xy]
                },)

```
