# Documentation
- Class name: WAS_Mask_Add
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Add node is designed to perform the addition of two mask images. It excels at combining mask data to create composite masks, which is critical in image processing workflows that require layered masks. The node ensures resulting mask values remain within valid ranges, facilitating seamless integration of mask layers.

# Input types
## Required
- masks_a
    - The parameter 'masks_a' represents the first set of mask images to be added. It plays a key role in determining the initial state of the composite mask, influencing the final result of the mask processing workflow.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- masks_b
    - The parameter 'masks_b' is the second set of mask images integrated with 'masks_a'. It is essential for creating a comprehensive mask that incorporates desired features from both sets of masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MASKS
    - The output 'MASKS' is the result of the addition operation performed by the node. It is a composite mask containing the combined features of the input masks, ready for downstream image processing tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
