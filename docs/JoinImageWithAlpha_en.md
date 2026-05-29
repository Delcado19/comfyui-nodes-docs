# Documentation
- Class name: JoinImageWithAlpha
- Category: mask/compositing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The JoinImageWithAlpha node is designed to seamlessly integrate an alpha mask with an image, enhancing the visual composition by blending the two elements. It resizes the alpha mask to match the dimensions of the input image, then combines them to produce a single output image with an alpha channel, allowing for more sophisticated masking and compositing techniques.

# Input types
## Required
- image
    - The image parameter is the primary input of the node, representing the base visual content that will be combined with the alpha mask. It is essential to the node's operation as it determines the underlying structure of the final output image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- alpha
    - The alpha parameter defines the mask to be applied to the image. It is crucial because it controls the transparency and visibility of different areas in the final composite image, allowing precise control over the blending process.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- output_image
    - The output_image is the result of the node's operation, a combined image with an alpha channel that reflects the integration of the input image and the alpha mask. This output is important as it enables further processing or rendering with advanced masking capabilities.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
