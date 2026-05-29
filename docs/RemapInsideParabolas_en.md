
# Documentation
- Class name: RemapInsideParabolas
- Category: Bmad/CV/Transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The RemapInsideParabolas node is designed to perform a remapping operation based on the geometry of two parabolas in an image. It adjusts image pixels according to the specified parabolas, aiming to transform or correct the perspective or distortion of the image in a manner consistent with these curves.

# Input types
## Required
- dst_mask_with_i_parabolas
    - Specify the target mask containing the parabolas. This mask is crucial for determining the geometry of the transformation and guiding the remapping process.
    - Comfy dtype: MASK
    - Python dtype: numpy.ndarray

# Output types
- remap
    - The output is a transformed version of the input image, adjusted according to the geometry of the specified parabolas.
    - Comfy dtype: REMAP
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemapInsideParabolas(RemapBase):
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "dst_mask_with_2_parabolas": ("MASK",),
        }
        }

    def send_remap(self, dst_mask_with_2_parabolas):
        from .utils.remaps import remap_inside_parabolas_simple
        return ({
                    "func": remap_inside_parabolas_simple,
                    "xargs": [tensor2opencv(dst_mask_with_2_parabolas, 1)],
                    "dims": RemapBase.get_dims(dst_mask_with_2_parabolas)
                },)

```
