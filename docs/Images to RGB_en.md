# Documentation
- Class name: WAS_Images_To_RGB
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `image_to_rgb` method of the WAS_Images_To_RGB node aims to convert a series of images into their RGB representation. It operates by converting each image into a tensor, then converting it to RGB format, and finally stacking the resulting tensors if multiple images are provided. This process is crucial for preparing images for further processing or analysis within the WAS suite.

# Input types
## Required
- images
    - The 'image' parameter is critical for the operation of the node because it represents the collection of images that need to be converted to RGB format. The node processes each image one by one and ensures that the final output is a tensor representation suitable for downstream tasks.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Output types
- tensors
    - The 'tensors' output is a tensor or stack of tensors representing the RGB format of the input images. This output is important because it allows seamless integration with other nodes in the WAS suite that require RGB image data for further processing.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
