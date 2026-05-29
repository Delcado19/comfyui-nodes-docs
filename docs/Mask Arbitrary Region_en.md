# Documentation
- Class name: WAS_Mask_Arbitrary_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The arbitrary_region method of the WAS_Mask_Arbitrary_Region node is designed to process input masks and generate tensors representing regions of interest based on provided size and threshold parameters. This method is particularly suitable for applications that require identifying and extracting specific regions in images, such as image editing, analysis, or machine learning tasks involving region focus.

# Input types
## Required
- masks
    - The input mask parameter is critical for the arbitrary_region method, as it defines the source from which regions of interest will be extracted. The quality and characteristics of the input mask directly affect the outcome of the region identification process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- size
    - The size parameter determines the dimensions of regions to be considered as regions of interest. It is a key factor in this method, as it directly impacts the scale of extracted regions.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - The threshold parameter is used to set the sensitivity level for identifying regions of interest within the input mask. It plays an important role in the accuracy of region extraction.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The MASKS output parameter represents the tensor containing extracted regions of interest from the input mask. It is a significant output, as it provides the final result of the arbitrary_region method for further processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
