# Documentation
- Class name: WAS_Image_Bounds
- Category: WAS Suite/Image/Bound
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `image_bounds` method of the WAS_Image_Bounds node aims to calculate the bounds of an image, providing basic spatial information for various image processing tasks. It ensures that the image is properly formatted before determining its bounds, allowing subsequent operations to be performed accurately.

# Input types
## Required
- image
    - 'image' parameter is crucial for the node's operation because it is the data source that the node will process to determine the bounds. It is the foundation on which the node's functionality is built; without it, the node cannot perform its intended task.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, PIL.Image.Image]

# Output types
- image_bounds
    - 'image_bounds' output provides the spatial coordinates that define the bounds of the input image. This information is crucial for tasks that require spatial awareness, such as cropping, resizing, or positioning elements within the image.
    - Comfy dtype: COMBO[Tuple[int, int, int, int]]
    - Python dtype: List[Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
