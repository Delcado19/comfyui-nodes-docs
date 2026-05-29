# Documentation
- Class name: Blur
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Blur node applies Gaussian blur to an image, enhancing its smoothness and reducing noise. It achieves this by convolving the image with a Gaussian kernel generated based on the provided blur radius and σ value. This node is particularly useful for post-processing tasks when image sharpness is not critical or a soft effect is desired.

# Input types
## Required
- image
    - The Image parameter is the input image that the Blur node will process. It is fundamental to the node's operation, as the entire transformation revolves around this input. The quality and resolution of the image directly affect the appearance of the output after the blur effect is applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- blur_radius
    - The Blur Radius parameter determines the degree of blur effect applied to the image. Larger values result in more pronounced blurring, while smaller values produce a more subtle effect. It plays a key role in controlling the visual outcome of the node's operation.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - The σ parameter defines the standard deviation of the Gaussian kernel used for blurring. It controls the sharpness of the transition between blurred and non-blurred areas in the image. Higher σ values result in a wider blur, while lower values produce a more localized effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- blurred_image
    - The Blurred Image output is the result of applying Gaussian blur to the input image. It represents the primary result of the Blur node and is essential for subsequent image processing steps or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
