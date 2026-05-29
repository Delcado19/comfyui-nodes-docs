# Documentation
- Class name: WLSH_Empty_Latent_Image_By_Ratio
- Category: WLSH Nodes/latent
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'generate' method of the WLSH_Empty_Latent_Image_By_Ratio node creates an empty latent image based on a specified aspect ratio and orientation. It computes the latent image dimensions and initializes it to zero, serving as a starting point for further image processing tasks.

# Input types
## Required
- aspect
- The 'aspect' parameter defines the aspect ratio of the latent image to be generated. It is critical because it directly determines the output image size.
    - Comfy dtype: str
    - Python dtype: str
- direction
- The 'direction' parameter specifies whether the image should be horizontal or vertical, affecting the allocation of width and height.
    - Comfy dtype: str
    - Python dtype: str
- shortside
- The 'shortside' parameter determines the length of the image's shorter side and is used to calculate the full dimensions based on the aspect ratio.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- batch_size
- The 'batch_size' parameter indicates the number of images to generate in a single operation, improving efficiency when processing multiple images at once.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- latent
- The output 'latent' is a tensor representing an empty latent image with dimensions calculated from the input parameters.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- width
- The output 'width' provides the calculated width of the latent image after considering the aspect ratio and orientation.
    - Comfy dtype: int
    - Python dtype: int
- height
- The output 'height' provides the calculated height of the latent image after considering the aspect ratio and orientation.
    - Comfy dtype: int
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
