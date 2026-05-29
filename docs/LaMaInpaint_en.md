
# Documentation
- Class name: LaMaInpaint
- Category: Art Venture/Inpainting
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LaMaInpaint node is specialized for object removal and image inpainting tasks. It uses deep learning models to fill reasonable textures and details into missing or unwanted areas in the image. The node processes an input image and its corresponding mask, generates an inpainted image, and seamlessly blends the repaired region with the original image content.

# Input types
## Required
- image
    - Input image tensor requiring inpainting. It represents the visual data with certain areas marked for removal or restoration.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Mask tensor indicating the areas to be inpainted. Pixels with non-zero values in the mask are considered as areas to be inpainted.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- device_mode
    - Specifies the device (CPU or GPU) to perform the inpainting operation, allowing flexible utilization of computing resources.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Output tensor containing the inpainted image, where the specified areas have been filled with generated content that matches the surrounding region.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
