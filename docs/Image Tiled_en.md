# Documentation
- Class name: WAS_Image_Tile_Batch
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `tile_image` method of the WAS_Image_Tile_Batch node is designed to divide a single image into a specified number of smaller tiles. It intelligently manages the division to maintain the aspect ratio and ensure equal distribution of tiles across the image. This functionality is particularly useful for applications that require detailed viewing of images or processing large images in a more manageable way.

# Input types
## Required
- image
    - The 'image' parameter is the primary input of the node, representing the image to be divided into tiles. Its role is critical, as the entire operation of the node revolves around processing this image. The quality and characteristics of the input image directly affect the output tiles.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- num_tiles
    - The 'num_tiles' parameter determines the total number of tiles into which the input image will be divided. It is an optional parameter with a default value of 6, allowing users to specify the granularity of the tiling process. This parameter significantly affects the size and number of output tiles.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGES
    - The 'IMAGES' output parameter represents the collection of tiles generated from the input image. Each tile is a portion of the original image, and the arrangement of the collection reflects the structure defined by the 'num_tiles' parameter. This output is important as it is the direct result of the node's processing.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
