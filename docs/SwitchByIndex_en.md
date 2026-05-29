# Documentation
- Class name: SwitchByIndex
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

SwitchByIndex is a node designed to select elements from two input lists based on a specified index, allowing for combining and flattening data structures.

# Input types
## Required
- A
    - Parameter 'A' is the first input list, essential for the node's operation as it provides the primary data source.
    - Comfy dtype: ANY
    - Python dtype: List[Any]
- B
    - Parameter 'B' represents the second input list, complementing the 'A' list in the node's data processing.
    - Comfy dtype: ANY
    - Python dtype: List[Any]
- index
    - Parameter 'index' is critical for selecting specific elements from the combined list, affecting the node's output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- flat
    - Parameter 'flat' determines whether the output list should be flattened, affecting the structure of the final result.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- C
    - Output 'C' is a list containing elements from both input lists, potentially modified by the 'index' and 'flat' parameters.
    - Comfy dtype: ANY
    - Python dtype: List[Any]
- count
    - Output 'count' provides the total number of elements in the 'C' list, reflecting the node's data aggregation.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
