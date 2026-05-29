# Documentation
- Class name: FlipSigmas
- Category: sampling/custom_sampling/sigmas
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FlipSigmas node is designed to manipulate the sigma values used in the sampling process. It can reverse the order of sigmas, ensuring that the sampling process follows a specific sequence. In custom sampling strategies, this node has a significant impact on the outcome, where the order of sigmas is crucial for the results.

# Input types
## Required
- sigmas
    - The 'sigmas' parameter is a tensor that contains the sigma values used in the sampling process. It is crucial for defining the order and scale of noise reduction during sampling. The node's operation on this parameter directly affects the quality and characteristics of the generated samples.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- SIGMAS
    - The output 'SIGMAS' is a tensor that represents the flipped sigma values. This output is very important because it determines the modified sequence of subsequent sampling steps, which may lead to different outcomes of the generated samples.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
