# Documentation
- Class name: SplitSigmas
- Category: sampling/custom_sampling/sigmas
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SplitSigmas node is designed to divide a given set of sigma values into two distinct subsets based on a specified step index. This operation is essential for custom sampling techniques that require splitting sigma values at specific iterations for further processing. The node's functionality does not depend on a specific method; rather, it focuses on conceptual data partitioning, providing a foundational step for more complex sampling workflows.

# Input types
## Required
- sigmas
    - The 'sigmas' parameter represents a set of values critical to the sampling process. It is important because it determines the initial conditions of the sampling algorithm, influencing the quality and characteristics of the generated samples. This parameter plays a central role in the node's operation, as it is the primary input for the sigma value split.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
## Optional
- step
    - The 'step' parameter defines the index at which the sigma values are split. It is important because it determines the split point of the sigma values, thereby affecting the structure of the output. This parameter is optional, providing a degree of flexibility when processing sigma values.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sigmas1
    - The output 'sigmas1' contains the first portion of sigma values up to the specified step. It is a key component of the node's output, as it represents the initial segment of sigma values that may be used for specific sampling techniques or further analysis.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- sigmas2
    - The output 'sigmas2' contains the remaining sigma values after the specified step. This output is important as it represents the continuation of the sigma sequence, which can be used in subsequent sampling iterations or for other computational purposes.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
