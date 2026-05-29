
# Documentation
- Class name: SaltMaskArbitaryRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltMaskArbitaryRegion node is used to filter arbitrary regions in a given mask based on specified size and threshold parameters. This node allows custom mask regions and is suitable for various applications such as image segmentation or object isolation. By adjusting the size and threshold parameters, users can precisely control the range and intensity of filtered regions, enabling flexible mask processing and optimization.

# Input types
## Required
- masks
    - The input mask is the object of the arbitrary region filtering operation. This parameter is critical for defining the region to be processed.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- size
    - Specifies the size parameter for arbitrary region filtering, directly affecting the scale of filtered regions in the mask. Adjusting this parameter controls the granularity of processing.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - Determines the threshold for arbitrary region filtering, affecting which parts of the mask are included in the processing range. This parameter can be used to adjust filtering sensitivity.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output is the modified mask filtered according to the specified size and threshold parameters. This processed mask can be used for subsequent image processing or analysis tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
