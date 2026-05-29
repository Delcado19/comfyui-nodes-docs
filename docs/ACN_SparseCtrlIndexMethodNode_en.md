# Documentation
- Class name: SparseIndexMethodNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

This node is used to retrieve sparse control networks by providing a series of unique indices. It ensures that the indices are valid integers and are used to reference specific elements in a larger dataset or structure.

# Input types
## Required
- indexes
    - The "indexes" parameter is a comma-separated string of integers used to uniquely identify elements in the dataset. It is critical to the node's operation, as it directly affects which elements are selected for processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- method
    - The output 'method' is an instance of SparseIndexMethod, customized based on the provided indices. It represents the core functionality of the SparseIndexMethodNode, enabling the selection and processing of specific elements in a sparse control network.
    - Comfy dtype: SPARSE_METHOD
    - Python dtype: SparseIndexMethod

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
