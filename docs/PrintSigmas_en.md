
# Documentation
- Class name: PrintSigmas
- Category: utils
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PrintSigmas node is a utility node used in the computation graph. Its primary function is to print and return the value of sigma parameters. This node aids in debugging and monitoring the flow of sigma values through the graph, providing a simple and effective way to output these values for inspection.

# Input types
## Required
- sigmas
    - The sigmas parameter represents the sigma values to be printed and returned. It plays a key role in the node's operation, serving as data that is both output for user inspection and passed through the node for further use.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor

# Output types
- sigmas
    - Returns the same sigma values as the input, allowing further processing or inspection in other parts of the computation graph.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
