# Documentation
- Class name: APISR_Zho
- Category: 🔎APISR
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR.git

This node aims to enhance image resolution using a specified model, focusing on improving the clarity and details of the input image. It adjusts the image to meet the model's requirements and applies the enhancement process, resulting in a super-resolution image.

# Input types
## Required
- pipe
    - The 'pipe' parameter represents the model used for image super-resolution. It is crucial because it defines the underlying architecture and learned outcomes that will be applied to enhance the image.
    - Comfy dtype: APISRMODEL
    - Python dtype: torch.nn.Module
- image
    - The 'image' parameter is the input image to be processed by the node. Its quality and size directly affect the output result of the super-resolution.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- dtype
    - The 'dtype' parameter specifies the data type of the model weights and the input image tensor. It affects the precision of the computation and can influence the quality of the super-resolved image.
    - Comfy dtype: COMBO[float32, float16]
    - Python dtype: str
## Optional
- crop_for_4x
    - The 'crop_for_4x' parameter determines whether the input image should be cropped to dimensions that are multiples of 4, in order to optimize the processing for specific models.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- super_resolved_img
    - The 'super_resolved_img' parameter is the output of the node, representing the enhanced image with improved resolution. It is the result of applying the model's super-resolution capabilities to the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
