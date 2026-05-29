# Documentation
- Class name: GrowMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GrowMask node is designed to manipulate binary masks by expanding or eroding their boundaries. It provides advanced functionality for mask modification, which is essential for applications requiring precise control over the shape and size of masked regions.

# Input types
## Required
- mask
    - The 'mask' parameter is the binary mask to be expanded or eroded. It plays a central role in the node's operation, as it directly affects the output shape and quality of the mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- expand
    - The 'expand' parameter determines the amount of expansion or erosion applied to the mask. Positive values cause dilation, while negative values cause erosion. It significantly impacts the final mask's dimensions and details.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- tapered_corners
    - When set to True, the 'tapered_corners' parameter applies a specific erosion pattern to the corners of the mask. This is important for achieving visually appealing mask shapes with rounded corners.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- expanded_mask
    - The 'expanded_mask' output is the result of the mask expansion or erosion process. It is important as it represents the final state of the mask after the node's operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class GrowMask:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mask': ('MASK',), 'expand': ('INT', {'default': 0, 'min': -MAX_RESOLUTION, 'max': MAX_RESOLUTION, 'step': 1}), 'tapered_corners': ('BOOLEAN', {'default': True})}}
    CATEGORY = 'mask'
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'expand_mask'

    def expand_mask(self, mask, expand, tapered_corners):
        c = 0 if tapered_corners else 1
        kernel = np.array([[c, 1, c], [1, 1, 1], [c, 1, c]])
        mask = mask.reshape((-1, mask.shape[-2], mask.shape[-1]))
        out = []
        for m in mask:
            output = m.numpy()
            for _ in range(abs(expand)):
                if expand < 0:
                    output = scipy.ndimage.grey_erosion(output, footprint=kernel)
                else:
                    output = scipy.ndimage.grey_dilation(output, footprint=kernel)
            output = torch.from_numpy(output)
            out.append(output)
        return (torch.stack(out, dim=0),)
```