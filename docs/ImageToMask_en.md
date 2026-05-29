# Documentation
- Class name: ImageToMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageToMask node extracts a specific color channel from an input image to create a mask for various image processing tasks. It plays a key role in segmenting and isolating specific features in an image, enabling more targeted analysis and manipulation.

# Input types
## Required
- image
    - The image parameter is the primary input of the ImageToMask node. It is the source from which the color channel is extracted to form the mask. This parameter is critical because it determines the content and quality of the resulting mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- channel
    - The channel parameter specifies which color channel to extract from the image. It is a critical input because it determines the specific aspect of the image that will be represented in the mask. The choice of channel can significantly affect subsequent processing and analysis of the image.
    - Comfy dtype: COMBO['red', 'green', 'blue', 'alpha']
    - Python dtype: str

# Output types
- mask
    - The mask output is a single-channel representation of the selected color channel from the input image. It serves as the basis for further image manipulation and analysis, providing a focused view of the selected channel information.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
