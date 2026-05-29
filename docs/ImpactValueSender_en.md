# Documentation
- Class name: ImpactValueSender
- Category: ImpactPack/Logic
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The “ImpactValueSender” node is designed to transmit impact values to a specified server. It is a key component in the data flow, ensuring that impact values are effectively communicated for further processing or analysis.

# Input types
## Required
- value
    - The “value” parameter is crucial for the operation of the node, as it represents the impact value to be sent. It plays a central role in the node's function, determining the data that will be transmitted.
    - Comfy dtype: any_typ
    - Python dtype: Any
## Optional
- link_id
    - The “link_id” parameter is an optional identifier for the connection. It helps to distinguish different data flows or connections, enhancing the node's ability to manage and organize the transmission process.
    - Comfy dtype: INT
    - Python dtype: int
- signal_opt
    - The “signal_opt” parameter is an optional input that can be used to modify the behavior of the node. It provides additional control over the transmission process, allowing customization according to specific needs.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Output types
- signal
    - The “signal” output represents the result of the transmission process. It is a key indicator of the node's successful operation and can be used for further processing or as feedback in the system.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
