
# Documentation
- Class name: RemapReverseBarrelDistortion
- Category: Bmad/CV/Transform
- Output node: False
- Repo Ref: https://github.com/Suzie1/ComfyUI_Bmad_Nodes

The RemapReverseBarrelDistortion node applies an inverse barrel distortion effect to images. It uses parameters to adjust the distortion effect, correcting images with barrel distortion caused by imperfect lenses. This correction effectively eliminates image deformation due to wide-angle lenses or other optical elements, restoring the image to a more natural and accurate state.

# Input types
## Required
- a
    - Coefficient 'a' affects the primary distortion effect, playing a crucial role in the inverse barrel distortion correction process. Its value directly changes the curvature of the image, affecting the strength of the applied correction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - Coefficient 'b' modifies the distortion effect together with 'a' and 'c', helping to fine-tune the inverse barrel distortion. It adjusts mid-range distortion, balancing correction between the center and edges.
    - Comfy dtype: FLOAT
    - Python dtype: float
- c
    - Coefficient 'c' works together with 'a' and 'b' to adjust the distortion effect, essential for achieving the desired inverse barrel distortion correction. It primarily affects edge distortion, fine-tuning the degree of correction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_inverse_variant
    - This boolean parameter determines whether to use the inverse variant of the distortion formula, affecting the overall distortion correction. Choosing the inverse variant changes the correction method, potentially leading to different visual effects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- d
    - An optional coefficient that further refines the distortion effect, providing additional control for inverse barrel distortion correction. When specified, it offers a higher degree of customization to the correction process.
    - Comfy dtype: FLOAT
    - Python dtype: float | None

# Output types
- remap
    - The output is a remapped image with inverse barrel distortion applied, correcting the original distortion. This processed image should display straighter lines and more accurate geometry, especially in the edge regions of the image.
    - Comfy dtype: REMAP
    - Python dtype: ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemapReverseBarrelDistortion(RemapBase):
    @classmethod
    def INPUT_TYPES(s):
        return RemapBarrelDistortion.BARREL_DIST_TYPES()

    def send_remap(self, a, b, c, use_inverse_variant, d=None):
        from .utils.remaps import remap_reverse_barrel_distortion
        return ({
                    "func": remap_reverse_barrel_distortion,
                    "xargs": [a, b, c, d, use_inverse_variant]
                },)

```
