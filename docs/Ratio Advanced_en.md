# Documentation
- Class name: RatioAdvanced
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The RatioAdvanced node is designed to perform advanced ratio calculations and transformations. It can handle preset ratios, custom input dimensions, and various scaling operations to determine optimal sizes for different stages of the image processing pipeline. The node emphasizes flexibility and precision in ratio handling, ensuring output sizes meet specific standards or constraints.

# Input types
## Required
- preset
    - The preset parameter allows the user to select a predefined ratio configuration. This choice can significantly simplify the process of applying a known set of ratios to an image, ensuring consistency and reducing manual calculations.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_axis
    - The swap_axis parameter enables swapping of width and height values when necessary. This is useful for adjusting the orientation of an image without changing its inherent aspect ratio.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- custom_latent_w
    - When a custom ratio is selected, the custom_latent_w parameter specifies the width of the latent image. This allows fine-tuning of the image size for specific processing stages, which is crucial for achieving desired visual effects or meeting output requirements.
    - Comfy dtype: INT
    - Python dtype: int
- custom_latent_h
    - The custom_latent_h parameter, used together with custom_latent_w, sets the height of the latent image when applying a custom ratio. This parameter provides control over the vertical dimension of the image, allowing precise adjustments to meet specific processing goals.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent_w
    - The latent_w output represents the width of the latent image based on the input parameters and the node's ratio calculations. This value is crucial for determining the horizontal dimension of the image at a specific stage in the processing pipeline.
    - Comfy dtype: INT
    - Python dtype: int
- latent_h
    - The latent_h output corresponds to the calculated height of the latent image. Together with latent_w, it defines the overall size of the latent stage image, which is essential for further processing and analysis.
    - Comfy dtype: INT
    - Python dtype: int
- cte_w
    - The cte_w output represents the image width after considering the constant time evolution (CTE) ratio. This parameter is important for maintaining temporal consistency of the image across different processing steps.
    - Comfy dtype: INT
    - Python dtype: int
- cte_h
    - The cte_h output is the height of the image when CTE ratio is applied. It works together with cte_w to ensure that the image is appropriately scaled while maintaining its aspect ratio and temporal integrity.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
