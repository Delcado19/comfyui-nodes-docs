# Documentation
- Class name: BatchSelector
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Get a specified image or mask from a batch of images or masks.

# Input types
## Required
- select
    - Select the index value of the output image or mask in the batch, where 0 is the first one. You can input multiple values separated by any non-digit characters, including but not limited to commas, periods, semicolons, spaces, or letters, even Chinese characters. Note: If the value exceeds the batch size, the last image will be output. If there is no corresponding input, an empty 64x64 image or a 64x64 black mask will be output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- images
    - Input image batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- masks
    - Input mask batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
