# Documentation
- Class name: CR_SeamlessChecker
- Category: Comfyroll/Graphics/Template
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SeamlessChecker node is used to check the seamless tiling effect of images. This node adjusts image sizes, generates a grid layout, and displays scaled versions of multiple images, allowing users to identify and evaluate the tiling quality. It is widely used in graphic design and image processing to ensure seamless visual results.

# Input types
## Required
- image
    - The image parameter is the main object processed by the node. It directly affects the node's execution and inspection results, serving as the source data for seamless tiling checks.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image 或 torch.Tensor
- rescale_factor
    - The scale factor parameter adjusts the image size and is crucial for evaluating the seamless tiling effect. Users can control the zoom level through this parameter to more precisely view tiling details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- grid_options
    - The grid options parameter defines the layout of images in the grid. It determines the number of images displayed when performing seamless tiling checks. This parameter is important for showing scaled versions of multiple images and assessing the tiling effect of the entire grid.
    - Comfy dtype: COMBO['2x2', '3x3', '4x4', '5x5', '6x6']
    - Python dtype: str

# Output types
- show_help
    - The help information provides usage guidelines and further resource links for the node, allowing users to understand and operate the node more effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
