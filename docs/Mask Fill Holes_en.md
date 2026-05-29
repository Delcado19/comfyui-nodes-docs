# Documentation
- Class name: WAS_Mask_Fill_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Fill_Region node processes image masks and fills specified regions, which is critical for applications involving image segmentation or region-based operations. It leverages the WAS_Tools_Class to perform the actual fill, ensuring the filled region is properly integrated into the mask. This node is particularly useful when creating seamless textures or composite images where continuity of regions matters.

# Input types
## Required
- masks
    - The 'masks' parameter is a key input to the node, defining the binary masks to be processed. It is essential to the node's execution, as it directly affects the regions to be filled. This parameter expects an array of masks, where each mask corresponds to a region to be filled.
    - Comfy dtype: np.ndarray
    - Python dtype: numpy.ndarray

# Output types
- MASKS
    - The 'MASKS' output parameter represents the result of the node's operation, an array of filled regions within the masks. This output is important as it provides processed masks that can be used for further analysis or rendering in various applications.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
