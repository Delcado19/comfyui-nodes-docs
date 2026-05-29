
# Documentation
- Class name: SaltMaskDilateRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/saltai-mlops/ComfyUI/blob/main/custom_nodes/salt_filters/salt_filters.py

The SaltMaskDilateRegion node applies a dilation filter to mask regions, effectively expanding the regions of interest within the mask based on a specified number of iterations. This node is designed to process and modify mask regions to highlight or amplify specific features within the mask.

# Input types
## Required
- masks
    - Input mask to be dilated. This parameter is critical for defining the region in the image that will undergo dilation, directly affecting the node's output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- iterations
    - Specifies the number of times the dilation operation is applied to the mask. This parameter controls the degree of dilation, affecting the size and visibility of features within the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output mask after dilation processing. These masks present the modified regions where the regions of interest have been expanded, demonstrating the effect of the dilation process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/saltai-mlops/ComfyUI/blob/main/custom_nodes/salt_filters/salt_filters.py)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
