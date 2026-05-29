# Documentation
- Class name: WAS_Dictionary_Get
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Dictionary_Get node is designed to retrieve a specific entry from a dictionary based on a given key. It plays a crucial role in data extraction and manipulation processes, providing a streamlined way to access and use dictionary values in workflows.

# Input types
## Required
- dictionary
    - The dictionary parameter is essential for the node's operation as it is the source from which the key value is retrieved. It is a key component that directly influences the node's output.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]
- key
    - The key parameter is used to specify the specific entry in the dictionary that the node will access. Its presence is crucial for the node to function correctly and can determine the exact data required.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- default_value
    - The default_value parameter is provided as a fallback option in case the specified key does not exist in the dictionary. It ensures the node can handle this gracefully and continue the workflow without interruption.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- value
    - The value output parameter represents the data retrieved from the dictionary using the specified key. It is important because it is the direct result of the node's operation and can be used for further processing in the workflow.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
