# Documentation
- Class name: imageToMask
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The imageToMask node extracts a single color channel from an input image and converts it to a grayscale representation for further image processing tasks.

# Input types
## Required
- image
    - The input image is critical to the node's operation, as it is the source from which the desired color channel is extracted.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- channel
    - The channel parameter determines which color channel is extracted from the image, affecting the final result of the grayscale conversion.
    - Comfy dtype: COMBO['red', 'green', 'blue']
    - Python dtype: str

# Output types
- MASK
    - The output is a tensor representing the grayscale image derived from the selected color channel, which is essential for subsequent image analysis processes.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
