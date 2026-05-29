# Documentation
- Class name: JagsCombineMasks
- Category: Jags_vector/CLIPSEG
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

This node collaboratively integrates multiple mask tensors into a unified representation, facilitating the integration of segmented regions within a given image context. It aims to simplify the process of merging binary or categorical data into a consistent visual output, improving the practicality of mask-based image processing tasks.

# Input types
## Required
- input_image
    - The input image serves as the foundational layer for merging and visualizing masks, and its role is critical as it provides the spatial context required for accurate overlay and integration of masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_1
    - The primary mask is a key component in the fusion process, defining the initial segmentation and laying the groundwork for subsequent overlay of additional masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_2
    - The secondary mask refines the merged mask by introducing additional segmentation layers, improving the granularity and specificity of the final output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- mask_3
    - The optional third-level mask provides an additional dimension for mask combination, enabling more complex and nuanced segmentation when needed.
    - Comfy dtype: MASK
    - Python dtype: Optional[torch.Tensor]

# Output types
- Combined Mask
    - The resulting merged mask contains the collective segmentation information of the input masks, serving as a comprehensive representation of segmented elements within the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- Heatmap Mask
    - The heatmap mask visualizes the merged segmentation through color overlay, providing an intuitive and easily interpretable depiction of the segmentation results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- BW Mask
    - The binary mask provides a clear, high-contrast representation of the segmentation, highlighting the delineated regions with clarity and precision.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jags111/ComfyUI_Jags_VectorMagic)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
