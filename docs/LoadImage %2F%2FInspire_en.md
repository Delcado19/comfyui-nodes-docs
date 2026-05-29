# Documentation
- Class name: LoadImageInspire
- Category: InspirePack/image
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node loads and preprocesses images, converting them to a format suitable for further analysis and manipulation. It converts raw image data into a structured array to prepare for downstream tasks like feature extraction or image classification.

# Input types
## Required
- image
    - Image parameters are critical as they specify the source image to be processed. Their selection affects the quality and applicability of the resulting image data.
    - Comfy dtype: COMBO[sorted(files) + ['#DATA']]
    - Python dtype: PIL.Image
## Optional
- image_data
    - This parameter contains encoded image data, which is essential for the node's primary function—image loading and conversion.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output image is a converted and structured representation of the input, ready for further analysis or processing within the system.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- mask
    - The mask output provides a binary representation that can be used for various image-related operations, enhancing the node's versatility.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
