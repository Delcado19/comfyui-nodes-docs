
# Documentation
- Class name: SaltMaskGradientRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/DimaChaichan/LAiChanRYFork

The SaltMaskGradientRegion node is primarily used to apply a gradient filter to mask regions, enhancing edges and transition areas within the mask to highlight areas of change. This node is designed to process mask inputs and apply morphological gradient operations to emphasize contours and transition parts within the mask region.

# Input types
## Required
- masks
    - The masks input represents the mask region to which the gradient filter will be applied. This input is critical for defining the region of interest that requires edge enhancement and transition highlighting.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
## Optional
- kernel_size
    - The kernel_size parameter specifies the kernel size used in the morphological gradient operation. It affects the degree of edge enhancement and transition highlighting within the mask region.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output MASKS is the result of applying the gradient filter to the input mask region, characterized by enhanced edges and transition areas.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/DimaChaichan/LAiChanRYFork)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
