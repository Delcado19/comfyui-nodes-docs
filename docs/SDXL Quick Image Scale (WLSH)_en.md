# Documentation
- Class name: WLSH_SDXL_Quick_Image_Scale
- Category: WLSH Nodes/upscaling
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'upscale' method of the WLSH_SDXL_Quick_Image_Scale node efficiently increases the resolution of an input image. It offers multiple upsampling methods to ensure the image is scaled according to the desired resolution and orientation. The node also provides flexible cropping for better composition, making it a versatile tool for image enhancement tasks.

# Input types
## Required
- original
    - The 'original' parameter is the input image to be upsampled. It is the key element of the operation, as the entire process revolves around enhancing this image. The quality and format of the original image directly affect the final upsampling result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_method
    - The 'upscale_method' parameter determines the algorithm used for upsampling. It significantly impacts the final image quality and the performance of the upsampling process. Users can choose from 'nearest-exact', 'bilinear', or 'area' methods based on their specific needs.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area']
    - Python dtype: str
- resolution
    - The 'resolution' parameter specifies the target resolution for the upsampled image. It is crucial because it defines the size to which the original image will be scaled. The choice of resolution affects the level of detail and the final image size.
    - Comfy dtype: COMBO['1024x1024', '1152x896', '1216x832', '1344x768', '1536x640']
    - Python dtype: str
- direction
    - The 'direction' parameter defines the orientation of the upsampled image. It is important for ensuring the image displays correctly according to its intended use, whether horizontal or vertical viewing.
    - Comfy dtype: COMBO['landscape', 'portrait']
    - Python dtype: str
- crop
    - The 'crop' parameter allows optional cropping of the upsampled image. It can be set to 'disabled' for no cropping or 'center' to crop from the center. This feature can improve the composition of the final image.
    - Comfy dtype: COMBO['disabled', 'center']
    - Python dtype: str

# Output types
- upscaled_image
    - The 'upscaled_image' output is the result of the upsampling process. It represents the original image enhanced to the specified resolution and orientation. The quality and appearance of this output directly reflect the input parameters and the node's capabilities.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
