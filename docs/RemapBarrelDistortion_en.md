
# Documentation
- Class name: RemapBarrelDistortion
- Category: Bmad/CV/Transform
- Output node: False
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

The RemapBarrelDistortion node is used to adjust images, which can be used to correct barrel distortion or introduce barrel distortion effects. It allows manipulation of image geometry to correct distortions typically caused by camera lenses or to create specific visual effects.

# Input types
## Required
- a
    - Coefficient 'a' affects the degree of distortion applied to the image, playing a crucial role in the process of correcting or introducing barrel distortion.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - Coefficient 'b' works together with other coefficients to fine-tune the distortion effect, affecting the curvature of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- c
    - Coefficient 'c' is another parameter for adjusting the distortion effect, contributing to the overall shape and intensity of the image transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_inverse_variant
    - This boolean parameter determines whether to use an alternative formula to calculate distortion, affecting the final appearance of the remapped image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- d
    - Optional coefficient 'd' can be used to further adjust the distortion effect, providing additional control over the image transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- remap
    - The output is a transformation map used to apply barrel distortion effects to the image, which can be used to correct or introduce distortion.
    - Comfy dtype: REMAP
    - Python dtype: Tuple[np.ndarray, np.ndarray, NoneType]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemapBarrelDistortion(RemapBase):
    @staticmethod
    def BARREL_DIST_TYPES():
        return {
            "required":
                {
                    "a": ("FLOAT", {"default": 0, "min": -10, "max": 10, "step": 0.00001}),
                    "b": ("FLOAT", {"default": 0, "min": -10, "max": 10, "step": 0.00001}),
                    "c": ("FLOAT", {"default": 0, "min": -10, "max": 10, "step": 0.00001}),
                    "use_inverse_variant": ("BOOLEAN", {"default": True})
                },
            "optional": {
                "d": ("FLOAT", {"forceInput": True})
            }
        }

    @classmethod
    def INPUT_TYPES(s):
        return RemapBarrelDistortion.BARREL_DIST_TYPES()
        # inputs = RemapBarrelDistortion.BARREL_DIST_F_TYPES()
        # inputs["required"]["use_inverse_variant"] = ("BOOLEAN", {"default": True})
        # return inputs

    def send_remap(self, a, b, c, use_inverse_variant, d=None):
        from .utils.remaps import remap_barrel_distortion
        return ({
                    "func": remap_barrel_distortion,
                    "xargs": [a, b, c, d, use_inverse_variant]
                },)

```
