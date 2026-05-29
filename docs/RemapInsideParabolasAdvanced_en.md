
# Documentation
- Class name: RemapInsideParabolasAdvanced
- Category: Bmad/CV/Transform
- Output node: False

RemapInsideParabolasAdvanced node is used to remap an image based on the geometry of two parabolas in a given mask. It allows advanced adjustments to the remapping process, including adjustments along the curve direction and orthogonal direction, and an option to flip the orthogonal direction, providing high control over the remap output.

# Input types
## Required
- dst_mask_with_i_parabolas
- Specify the target mask containing two parabolas. This mask guides the remapping process and determines how pixels are repositioned.
    - Comfy dtype: MASK
    - Python dtype: numpy.ndarray
- curve_wise_adjust
- Adjust the remap intensity along the parabola curve direction, enabling finer control of curvature effects in the remapped image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ortho_wise_adjust
- Adjust the remap intensity orthogonal to the parabola curve direction, allowing control of the spread of remap effects perpendicular to the parabola curvature.
    - Comfy dtype: FLOAT
    - Python dtype: float
- flip_ortho
- Decide whether to flip the orthogonal adjustment direction, adding an extra layer of customization to the remap effect.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- remap
- Output is the remapped image based on the specified parabolas and adjustment parameters. It reflects pixel position changes as defined by the input parameters, providing a visually modified version of the original image.
    - Comfy dtype: REMAP
    - Python dtype: Dict[str, numpy.ndarray]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemapInsideParabolasAdvanced(RemapBase):
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "dst_mask_with_2_parabolas": ("MASK",),
            "curve_wise_adjust": ("FLOAT", {"default": 1, "min": .3, "max": 2, "step": .01}),
            "ortho_wise_adjust": ("FLOAT", {"default": 1, "min": 1, "max": 3, "step": .01}),
            "flip_ortho": ("BOOLEAN", {"default": False})
        }
        }

    def send_remap(self, dst_mask_with_2_parabolas, curve_wise_adjust, ortho_wise_adjust, flip_ortho):
        from .utils.remaps import remap_inside_parabolas_advanced
        return ({
                    "func": remap_inside_parabolas_advanced,
                    "xargs": [tensor2opencv(dst_mask_with_2_parabolas, 1),
                              curve_wise_adjust, ortho_wise_adjust, flip_ortho],
                    "dims": RemapBase.get_dims(dst_mask_with_2_parabolas)
                },)

```
