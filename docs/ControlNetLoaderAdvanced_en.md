# Documentation
- Class name: ControlNetLoaderAdvanced
- Category: Adv-ControlNet 🛂🅐🅒🅝
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The `load_controlnet` method of the ControlNetLoaderAdvanced node is designed to efficiently load and manage control network configurations. It is a critical component of the system, enabling seamless integration of control networks into workflows. This method abstracts the complexity of loading and processing control networks, providing users with a simple, intuitive interface to access these networks.

# Input types
## Required
- control_net_name
    - The `control_net_name` parameter is essential for identifying the specific control network to load. It plays a key role in the node's execution, determining which control network configuration will be used in the system.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- timestep_keyframe
    - The optional `timestep_keyframe` parameter allows specifying timestep-related keyframes, which can influence how the control network is applied over temporal changes.
    - Comfy dtype: TimestepKeyframeGroup
    - Python dtype: TimestepKeyframeGroup

# Output types
- CONTROL_NET
    - The `CONTROL_NET` output represents the loaded control network, a core element of system operations. It encapsulates the network's structure and parameters, ready for various tasks and analyses.
    - Comfy dtype: Tensor
    - Python dtype: Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
