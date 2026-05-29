# Documentation
- Class name: MaskedFill
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

This node performs image inpainting by filling missing or masked regions in an image using different algorithms that match the surrounding context, seamlessly blending the filled areas with the original image.

# Input types
## Required
- image
    - The image parameter is required as it provides the foundational input for the inpainting process. It is the primary data the node operates on to achieve the desired inpainting effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask parameter defines the regions of the image that require inpainting. It serves as a guide for the node to determine where image content needs to be filled or modified.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- fill
    - The fill parameter determines the inpainting method to use, which has a significant impact on the quality and style of the filled content. It is essential for achieving the desired visual result.
    - Comfy dtype: COMBO[('neutral', 'telea', 'navier-stokes')]
    - Python dtype: str
## Optional
- falloff
    - The falloff parameter affects the smoothness of the inpainting transition by controlling the radius of erosion and blur operations, determining how the filled area blends with the original image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image is the result of the inpainting process, where the masked regions have been filled with content matching the surrounding context, providing a seamless and visually coherent final image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Acly/comfyui-inpaint-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
