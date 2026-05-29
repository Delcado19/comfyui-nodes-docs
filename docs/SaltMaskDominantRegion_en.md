
# Documentation
- Class name: SaltMaskDominantRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltMaskDominantRegion node focuses on identifying and separating the dominant region in a given set of masks based on a specified threshold. It can effectively highlight the most significant region in an image mask, making it suitable for tasks that require focusing on important mask areas.

# Input types
## Required
- masks
    - Input masks that require dominant region detection. These masks are essential for determining regions of interest in an image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- threshold
    - The threshold used to distinguish the dominant region in the masks. It plays a key role in defining what is considered the "dominant" region by setting a cutoff intensity value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output is a mask tensor that highlights the dominant region. This is important for applications that need to focus on or manipulate the primary region of the mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
