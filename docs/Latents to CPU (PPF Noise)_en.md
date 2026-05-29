# Documentation
- Class name: PPFNLatentToCPU
- Category: Power Noise Suite/Latent/Util
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node facilitates transferring latent data to the CPU environment, ensuring direct access for efficient CPU computation. It is critical for managing compute resources and internal data flow within the system.

# Input types
## Required
- latents
    - The latents parameter is crucial because it holds the data that needs to be moved to the CPU. It directly impacts the node's operation and subsequent processing that depends on CPU-based computation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latents
    - The output latents represent data now available on the CPU, ready for use in various compute tasks that require CPU processing power.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
