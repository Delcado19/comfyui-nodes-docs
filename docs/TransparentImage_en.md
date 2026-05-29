# Documentation
- Class name: TransparentImage
- Category: ♾️Mixlab/Image
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The TransparentImage node handles and manipulates images with transparency, providing functions to create and manage images with masks. It can invert colors, save processed images, and handle various image formats. The node plays a key role in enhancing visual content by applying masks to images, enabling innovative visual effects and modifications.

# Input types
## Required
- images
    - The `images` parameter is essential for the node's operation because it is the input image to be processed. It is a critical element that directly affects the node's output, determining the visual content that will be transformed and manipulated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The `masks` parameter defines the masks to be applied to the input image. It is a necessary component of the node's functionality because it determines which areas of the image will be affected by the mask processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- invert
    - The `invert` parameter allows color inversion in the processed image. This optional feature can significantly alter the visual result, providing a way to create contrast effects within the image.
    - Comfy dtype: COMBO['yes', 'no']
    - Python dtype: str
- save
    - The `save` parameter decides whether the processed image will be saved to disk. This is a key decision point for the node because it impacts the persistence of visual changes made to the image.
    - Comfy dtype: COMBO['yes', 'no']
    - Python dtype: str
- filename_prefix
    - The `filename_prefix` parameter specifies the prefix for saved image files. It offers a more efficient method to organize and identify output files, enhancing manageability of the saved visual content.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- file_path
    - The `file_path` output provides the path to the saved image file. It is important because it allows users to locate and access the processed image for further use or distribution.
    - Comfy dtype: STRING
    - Python dtype: str
- IMAGE
    - The `IMAGE` output represents the processed image in RGB format. It is the direct result of the node's operation and is crucial for visualizing the modifications made to the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- RGBA
    - The `RGBA` output contains the processed image with transparency information. This is important for applications that need to retain the original image's alpha channel for further editing or compositing.
    - Comfy dtype: RGBA
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
