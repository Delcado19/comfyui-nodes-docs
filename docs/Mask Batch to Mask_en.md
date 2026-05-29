# Documentation
- Class name: WAS_Mask_Batch_to_Single_Mask
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The ‘mask_batch_to_mask’ method processes a batch of mask tensors and extracts a single mask tensor based on a specified batch number. It is essential when a particular mask must be retrieved from a collection, enabling the transition from batch to single-instance operations.

# Input types
## Required
- masks
    - The ‘masks’ parameter is the set of mask tensors the node will process. It is crucial because it forms the basis of the node’s operation, determining which masks are considered for extraction.
    - Comfy dtype: MASK
    - Python dtype: List[Tuple[torch.Tensor, ...]]
## Optional
- batch_number
    - The ‘batch_number’ parameter specifies which mask tensor to extract from the batch. It is important because it governs the selection process within the node, ensuring the correct mask is returned according to the batch index.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- single_mask
    - The ‘single_mask’ output represents the single mask tensor extracted from the batch. It is important because it is the primary result of the node’s operation, providing the user with the specific mask they requested.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
