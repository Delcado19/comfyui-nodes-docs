# Documentation
- Class name: WAS_Mask_Floor_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The floor_region method processes a given mask to identify the lowest-intensity region within it. It operates by converting the mask to a NumPy array, applying a threshold to isolate non-black pixels, and determining the minimum value among those pixels. The method handles both single masks and batches of masks, returning a tensor representing the processed region.

# Input types
## Required
- masks
    - The input mask parameter is critical for the floor_region method, as it defines the mask or batch of masks to be processed. The node's execution depends on this input to identify and operate on regions within the masks based on their intensity values.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The output parameter MASKS represents the result of the floor_region method processing. It is a tensor containing the lowest-intensity regions identified in the input masks, demonstrating the node's capability to isolate and highlight specific regions based on their intensity values.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
