# Documentation
- Class name: LoadLatent
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to retrieve and process latent data from a specified directory, ensuring the data is properly scaled and formatted for further use in the system.

# Input types
## Required
- latent
    - The 'latent' parameter is critical, as it specifies the latent file to load, which contains the data required for the node's operation.
    - Comfy dtype: COMBO[string]
    - Python dtype: List[str]

# Output types
- samples
    - The 'samples' output provides the processed latent data, already scaled and ready for use in the system.
    - Comfy dtype: dict
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
