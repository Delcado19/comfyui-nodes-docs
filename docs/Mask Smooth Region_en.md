# Documentation
- Class name: WAS_Mask_Smooth_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Smooth_Region node is designed to process input masks and apply smoothing effects to their regions. This is particularly useful for generating seamless textures or preparing masks for further image processing tasks. The node uses Gaussian blur technology to smooth regions within the mask, with the degree of smoothing controlled by the 'sigma' parameter. The node's functionality is optimized for both individual masks and mask batches, ensuring flexibility and efficiency across various applications.

# Input types
## Required
- masks
    - The 'masks' parameter is the key input to the node, expecting a mask or a batch of masks. This input directly affects the node's operation, as it determines the regions to be smoothed. This parameter is essential for the node to produce the desired output, impacting the final texture quality and the seamless tiling of images.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- sigma
    - The 'sigma' parameter defines the degree of smoothing to be applied to the mask regions. It is a floating-point number used to adjust the standard deviation of the Gaussian blur, with higher values resulting in more pronounced smoothing. This parameter is optional but has a significant impact on the node's output, allowing users to control the appearance of the smoothed regions.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASKS
    - The 'MASKS' output provides the smoothed mask or batch of masks obtained by applying the Gaussian blur defined by the 'sigma' parameter. This output is important as it represents the processed data from the node, which can be used for subsequent operations or as the final output for texture generation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
