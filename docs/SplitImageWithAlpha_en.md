# Documentation
- Class name: SplitImageWithAlpha
- Category: mask/compositing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SplitImageWithAlpha node is designed to separate the color information of an image from its alpha channel. It performs a basic function in image processing by splitting the input image into two parts: a color image and an alpha mask. This node is essential for tasks that require transparency manipulation, such as compositing images or creating masks for visual effects.

# Input types
## Required
- image
- The 'image' parameter is the input tensor containing image data. It is crucial because it is the primary source of information the node processes. The node relies on this input to extract the color and alpha components, which are then used in subsequent image operations.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- color_image
- The 'color_image' output contains the color information extracted from the input image. It is important because it represents the visual content without a transparency layer, which can be used directly for display or further processing.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- alpha_mask
- The 'alpha_mask' output is the alpha channel of the input image, representing transparency information. It is inverted compared to the original alpha so that higher values indicate greater opacity, suitable for common compositing operations.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
