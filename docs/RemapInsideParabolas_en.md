
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
