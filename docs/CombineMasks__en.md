# Documentation
- Class name: CombineMasks
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-CLIPSeg

CombineMasks is a node designed to integrate multiple mask tensors into a comprehensive mask, enhancing the representation of underlying data. The node not only merges masks but also generates visual representations such as heatmaps and binary overlays, providing more detailed analysis of mask content.

# Input types
## Required
- input_image
    - The input image parameter is critical as it serves as the base layer for the mask combination process. It provides the spatial context required for the node to correctly overlay and visualize masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_1
    - The first mask is an indispensable component of the combination process, representing the initial segmentation information layer that will be enhanced with subsequent masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_2
    - The second mask adds an additional segmentation layer, contributing to the complexity and detail of the combined mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- mask_3
    - The optional third mask further refines the segmentation by introducing finer-grained details, enhancing the overall mask representation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- Combined Mask
    - The combined mask is the primary output of the node, representing the result of all input masks fused into a single, unified representation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- Heatmap Mask
    - The heatmap mask visualizes the combined segmentation, providing a colored representation that enhances interpretability and analysis of segmentation results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- BW Mask
    - The binary mask provides a simplified black-and-white view, emphasizing core elements and offering a clear, straightforward analysis tool.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-CLIPSeg)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
