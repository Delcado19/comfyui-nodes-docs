# Documentation
- Class name: UpscaleTileCalculator
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The UpscaleTileCalculator node efficiently calculates and manages tiling in image upscaling operations. It provides a method to determine the optimal tile size based on image resolution and specified tile resolution, ensuring the upscaled image retains its integrity and quality.

# Input types
## Required
- image
- Image parameters are crucial for the node's operation because they represent the input image to be processed. They form the foundation that influences node execution and tile calculation results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tile_resolution
- The tile_resolution parameter defines the desired resolution for each image tile. It plays a key role in determining tile size, thereby affecting the efficiency and quality of the upscaling process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- The upscaled image is the node's primary output, representing the result of the upscaling operation. It marks the node's functional success in enhancing image quality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tile_width
- The tile_width parameter indicates the width calculated for each tile after upscaling. It is important because it provides spatial dimension information used in the operation.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
- The tile_height parameter specifies the height calculated for each tile after upscaling. Together with tile_width, it determines the overall tile structure, essential for understanding the node's output.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
