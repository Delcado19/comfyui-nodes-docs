# Documentation
- Class name: EsheepImageSplit
- Category: tests
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node aims to split images into grid-like tiles based on specified columns and rows, facilitating the processing of large images in a more manageable way. By decomposing images into smaller parts, it enhances workflows, enabling more focused analysis and manipulation.

# Input types
## Required
- images
    - The image parameter is critical as it provides the source data for the node's operation. It is the primary input, determining subsequent processing and output tile generation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- columns
    - The number of columns determines how the image is horizontally divided, directly affecting the arrangement and quantity of generated tiles. It is an important parameter controlling the granularity of image segmentation.
    - Comfy dtype: INT
    - Python dtype: int
- lines
    - Similar to the column count, the number of rows determines the vertical division of the image, influencing the shape and quantity of tiles. Together with the column parameter, it defines the grid structure.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output is a collection of tiles generated from splitting the input image. It represents the primary result of the node's operation, encapsulating the processed data in a format that can be further utilized in downstream tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/esheep/esheep_custom_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
