# Documentation
- Class name: WAS_Mask_Batch
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Batch node is designed to efficiently process and batch multiple mask inputs. It ensures all input masks conform to a uniform size and stacks them into a single batch for further processing. The node plays a key role in preparing data with consistent mask dimensions required for downstream tasks.

# Input types
## Optional
- masks_a
- The 'masks_a' parameter is an optional input that allows users to provide a set of masks for processing. It is essential to the node’s operation because it directly affects the data that will be batched and processed.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]
- masks_b
- The 'masks_b' parameter functions like 'masks_a', offering another optional set of masks to include in the batch processing.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]
- masks_c
- The 'masks_c' parameter is another optional input for additional masks, further enhancing the node’s flexibility in handling diverse mask inputs.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]
- masks_d
- The 'masks_d' parameter supplies the node with an extra set of masks for processing, ensuring the node can accommodate a wide range of mask inputs.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]

# Output types
- masks
- The 'masks' output is a batched tensor containing all processed input masks. It is important because it represents the node’s primary output, ready for subsequent operations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
