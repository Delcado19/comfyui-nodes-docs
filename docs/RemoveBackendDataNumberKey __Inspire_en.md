
# Documentation
- Class name: RemoveBackendDataNumberKey __Inspire
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

This node is designed to remove specific data entries from the backend cache based on a numeric key. It supports the selective clearing of cached data to enhance data management and optimization in the backend infrastructure.

# Input types
## Required
- key
    - Specify the numeric key associated with the data to be removed from the cache. This key is used to identify and delete the corresponding cache entry (if it exists).
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- signal_opt
    - An optional signal that can be passed through the node and returned, allowing additional control flow or data transfer without affecting the cache operation.
    - Comfy dtype: *
    - Python dtype: Optional[Any]

# Output types
- signal
    - Returns the optional signal passed to the node, facilitating operation chaining or passing control data through the node workflow.
    - Comfy dtype: *
    - Python dtype: Optional[Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
