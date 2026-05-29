# Documentation
- Class name: Sharpen
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Sharpen node is designed to enhance image details by applying a sharpening filter. It uses a Gaussian kernel to generate a sharpening mask that highlights edges and details in the image. This node's functionality is critical in post-processing tasks where image clarity and definition are paramount.

# Input types
## Required
- image
    - The input image is the primary data processed by the Sharpen node. It serves as the foundation for applying the sharpening effect, and its quality directly impacts the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- sharpen_radius
    - The sharpen_radius parameter determines the extent of the sharpening effect. A larger radius results in a more pronounced sharpening effect, while a smaller radius provides a subtler enhancement.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - The sigma parameter controls the standard deviation of the Gaussian kernel used for sharpening. It affects the smoothness of the sharpening transition and the spread of the kernel's influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha
    - The alpha parameter adjusts the intensity of the sharpening effect. A higher alpha value produces a stronger sharpening effect, while a lower value yields a milder effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sharpened_image
    - The sharpened_image output is the result of applying the sharpening process to the input image. It showcases enhanced details and edges, providing a clearer and more defined visual representation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
