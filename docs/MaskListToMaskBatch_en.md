# Documentation
- Class name: MaskListToMaskBatch
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The MaskListToMaskBatch node is designed to combine a series of mask images into a single batch tensor. It processes each mask in the list, ensuring they are in a 3D format suitable for batch processing, handling both single and multiple masks effectively. This node plays a key role in preparing batch input data required by downstream machine learning models.

# Input types
## Required
- mask
    - The ‘mask’ parameter is the list of mask images processed by the node. It is critical to the node’s operation because it directly affects the output batch tensor. The node handles this list by converting each mask to a 3D format (if needed) and then concatenating them into a single tensor for batch processing.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Output types
- mask_batch
    - The output of the MaskListToMaskBatch node is a single tensor representing a batch of masks. This tensor is formatted to be compatible with machine‑learning models expecting batch input data, which is essential for subsequent model training or inference stages.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
