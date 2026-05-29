
# Documentation
- Class name: AddAlpha
- Category: Bmad/image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AddAlpha node is designed to add an alpha channel to an RGB image, thereby enabling image transparency operations. It supports multiple alpha channel creation methods, including direct assignment or inversion, providing flexibility for handling image transparency.

# Input types
## Required
- rgb_image
    - The RGB image to which the alpha channel will be added. This is the base image that will be modified to include transparency information.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- alpha
    - An optional alpha channel to be added to the RGB image. If provided, it specifies the transparency level of the image. The method parameter determines how this alpha channel is applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - Determines how the alpha channel is applied to the RGB image. You can choose to directly use the provided alpha channel ('default') or invert it, offering flexibility for transparency operations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resulting image with the alpha channel added, making transparency operations possible.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
