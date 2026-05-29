# Documentation
- Class name: WAS_Images_To_Linear
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Images_To_Linear node is designed to convert image data into a linear format. It plays a critical role in image processing workflows, ensuring that image data is properly transformed for subsequent computational tasks. This node's functionality is essential when preparing images for analysis or performing operations within a linear algebra framework.

# Input types
## Required
- images
    - The "images" parameter is essential for the node's operation, as it serves as the input for the image-to-linear conversion process. It directly affects the node's execution by determining the source of the images to be converted.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]

# Output types
- linear_images
    - The "linear_images" output parameter represents the result of the image-to-linear conversion. It is important because it provides the prepared image data for further linear analysis or operations.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
