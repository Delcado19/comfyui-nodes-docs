# Documentation
- Class name: RemoveBackendDataNumberKey
- Category: DataProcessing
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to delete data entries associated with a specific numeric key from the backend cache, ensuring data integrity and optimizing storage space.

# Input types
## Required
- key
    - The 'key' parameter is essential for identifying the exact data entry to be removed from the cache. It serves as the unique identifier for the target data.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- signal_opt
    - The 'signal_opt' parameter provides flexibility during deletion, allowing additional options to be specified for the operation.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- signal_opt
    - The output of 'signal_opt' reflects any additional options or signals supplied as input, preserving the integrity of the operation context.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
