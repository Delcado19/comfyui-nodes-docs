# Documentation
- Class name: WLSH_Image_Scale_By_Factor
- Category: WLSH Nodes/upscaling
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'upscale' method of the WLSH_Image_Scale_By_Factor node is designed to increase the dimensions of the input image by a specified factor. It supports multiple upscaling methods to maintain or improve image quality during the scaling process. This node plays a critical role in image processing workflows that require image enlargement.

# Input types
## Required
- original
    - The 'original' parameter is the input image to be scaled. It is the core of the operation, as all node actions revolve around this image. The quality and content of the original image directly affect the scaled output result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_method
    - The 'upscale_method' parameter determines the algorithm used to scale the image. It is crucial for controlling the quality and characteristics of the upscaled image. Different methods may produce different results, and the choice of method can significantly affect the final appearance.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area']
    - Python dtype: str
- factor
    - The 'factor' parameter defines the scaling ratio by which the original image dimensions are multiplied. It is a key parameter because it determines the final size of the upscaled image. The choice of factor will directly affect the level of detail and overall size.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_image
    - The 'upscaled_image' output is the result of the upscaling process, reflecting the input image scaled by the specified factor. It is important because it represents the direct result of the node operation and is used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
