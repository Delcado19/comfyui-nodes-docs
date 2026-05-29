# Documentation
- Class name: LatentAdd
- Category: latent/advanced
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The "LatentAdd" node is designed to perform element-wise addition on two sets of latent samples. It ensures that samples are appropriately reshaped to match dimensions before addition, allowing seamless combination of latent representations from different sources or scales.

# Input types
## Required
- samples1
    - The "samples1" parameter represents the first set of latent samples to be added. It plays a key role in the node's operation as it provides one of the operands for the addition. The quality and format of these samples directly affect the results produced by the node.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- samples2
    - The "samples2" parameter holds the second set of latent samples to be added to "samples1". Its compatibility with "samples1" in shape and type is critical for successful execution of the node's functionality.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- samples_out
    - The "samples_out" parameter is the result of the addition operation performed by the node. It contains the summed latent samples, which are significant as they represent the primary output of the node.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
