# Documentation
- Class name: RemoveBackendData
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to manage and clear data stored in the backend cache, ensuring efficient memory usage and data organization within the system.

# Input types
## Required
- key
    - The 'key' parameter is critical for identifying specific data in the backend cache. It determines which data is targeted for deletion, with the wildcard '*' used to clear the entire cache.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- signal_opt
    - The 'signal_opt' parameter is an optional input that can provide additional instructions or signals to the node, enhancing its adaptability and flexibility across various scenarios.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- signal
    - The 'signal' output represents the result of the data deletion operation, which may be a status indication or a response to the 'signal_opt' input, ensuring effective communication between the node and the system.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
