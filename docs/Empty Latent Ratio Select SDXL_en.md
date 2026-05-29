# Documentation
- Class name: EmptyLatentRatioSelector
- Category: Mikey/Latent
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The EmptyLatentRatioSelector node is designed to generate latent representations for a given set of ratio sizes. It plays a critical role in the initial stage of latent space operations, providing a structured starting point for further processing. The node ensures that the latent space is properly initialized, laying the foundation for subsequent operations.

# Input types
## Required
- ratio_selected
    - The 'ratio_selected' parameter is essential for determining the specific ratio size used for latent generation. It defines the dimensions of the latent space and is a fundamental aspect of the node's operation, directly influencing the structure of the output.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- batch_size
    - The 'batch_size' parameter allows specifying the number of latent samples generated in a single operation. It is an optional parameter that can be adjusted based on available computational resources and the specific requirements of the task at hand.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The 'samples' output parameter represents the generated latent representations. It is a tensor containing the information of the latent space, which is critical for subsequent processing and analysis within the system.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
