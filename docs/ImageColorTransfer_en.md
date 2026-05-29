# Documentation
- Class name: ImageColorTransfer
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The ImageColorTransfer node recolors an image by transferring a palette from one image to another. It achieves this through a color transfer algorithm that manipulates the source image's color distribution to match the target, producing a visually coherent and stylized output.

# Input types
## Required
- source
    - The source parameter is the image whose colors will be replaced. It plays a critical role in the color transfer process, as it determines the original color palette that will be altered.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target
    - The target parameter represents the image whose color palette will be applied to the source. It is essential for defining the desired color scheme that the output image should reflect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- result
    - The result parameter is the output image after color transfer. It represents the final product of the node's operation, showcasing the source image with colors adapted from the target.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
