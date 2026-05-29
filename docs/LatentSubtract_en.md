# Documentation
- Class name: LatentSubtract
- Category: latent/advanced
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentSubtract node is designed to perform subtraction between two sets of latent samples. It takes two latent representations as input and outputs their difference, which is useful for various applications such as feature extraction or anomaly detection within the latent space.

# Input types
## Required
- samples1
    - The first set of latent samples for the subtraction operation. These samples are critical as they form the basis of the operation, and their quality directly affects the results produced by the node.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- samples2
    - The second set of latent samples to be subtracted from the first set. Alignment and compatibility of these samples with the first set is essential for the subtraction operation to be meaningful.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Output types
- samples_out
    - The output of the subtraction operation, a set of latent samples representing the differences between the input sets. This output can be used for further analysis or as input to nodes in subsequent processing pipelines.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
