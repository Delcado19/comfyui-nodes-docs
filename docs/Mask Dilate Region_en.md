# Documentation
- Class name: WAS_Mask_Dilate_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The dilate_region method performs morphological dilation on an input mask, expanding the boundaries of the mask region. This process is essential for applications that require enhancing mask edges or creating buffer zones within mask regions. By applying a specified number of iterations, the method allows control over the extent of dilation, providing a versatile tool for various image processing tasks involving mask manipulation.

# Input types
## Required
- masks
    - The input mask parameter is critical for the dilate_region method, as it defines the region to be dilated. This is a key component that directly affects the outcome of the dilation process. The mask should be provided in a format that the method can interpret and process, typically as a tensor or numpy array.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- iterations
    - The iterations parameter determines how many times the dilation operation is applied to the input mask. It is an optional parameter that allows users to control the degree of dilation, with more iterations resulting in a more pronounced effect. This parameter is important for fine-tuning the dilation to suit specific application requirements.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The MASKS output parameter represents the result of the dilation process. It contains the dilated mask expanded from the original input mask after the specified number of iterations. This output is important as it is the primary result of the dilate_region method, used for further image processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
