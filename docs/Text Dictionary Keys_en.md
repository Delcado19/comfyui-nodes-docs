# Documentation
- Class name: WAS_Dictionary_Keys
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Dictionary_Keys node extracts keys from a given dictionary. It serves as a basic component in a data processing workflow, identifying dictionary keys before further analysis or manipulation.

# Input types
## Required
- dictionary
- The parameter 'dictionary' is essential for the node's operation, as it is the source from which keys are extracted. This input directly influences the node's output by determining the set of identified keys.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]

# Output types
- keys
- The output parameter 'keys' represents the set of keys extracted from the input dictionary. It is important because it provides a foundation for any subsequent operation that needs to understand the dictionary structure without involving the associated values.
    - Comfy dtype: LIST
    - Python dtype: List[Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
