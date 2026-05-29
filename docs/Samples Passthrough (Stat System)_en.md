# Documentation
- Class name: WAS_Samples_Passthrough_Stat_System
- Category: WAS Suite/Debug
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `stat_system` method of the WAS_Samples_Passthrough_Stat_System class is intended to provide a statistical overview of the system's current state. It captures and logs key system metrics, such as RAM and VRAM usage, as well as hard disk space utilization. This method is essential for monitoring system health and performance, offering insight into resource consumption without delving into the specifics of the underlying data collection process.

# Input types
## Required
- samples
    - The “samples” parameter is essential for executing the `stat_system` method, as it represents the latent space samples on which the system operates. It is through these samples that the system's resource utilization is evaluated, making this parameter an integral part of the node's functionality.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Output types
- samples
    - The “samples” output parameter represents the raw latent space samples passed through the system. It serves as confirmation that the input has been processed without alteration, ensuring data integrity for further use or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
