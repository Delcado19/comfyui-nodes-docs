# Documentation
- Class name: SeparateMaskComponents
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

This node aims to decompose a single mask into its constituent contiguous components. It identifies unique segments within the mask by applying morphological operations. The node not only returns separated masks but also provides a mapping that can be used in downstream processes to relate individual components back to their original batch positions.

# Input types
## Required
- mask
    - The input mask is a critical parameter for this node, as it represents the initial data from which contiguous components are to be separated. The structure of the mask directly affects the node's operation and resulting segments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- mask
    - The output is a series of separated masks, each corresponding to a unique contiguous component identified in the input mask. These masks are essential for further analysis or processing in the batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_mappings
    - This output provides a mapping that associates each separated mask with its corresponding position in the original batch. It is an important tool for maintaining data relationship integrity throughout the processing pipeline.
    - Comfy dtype: INT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
