# Documentation
- Class name: WAS_Dictionary_To_Console
- Category: WAS Suite/Debug
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Dictionary_To_Console node facilitates debugging by outputting dictionary contents to the console. It enhances data visibility through formatted printing, making it easier to inspect and analyze the structure and values of dictionaries.

# Input types
## Required
- dictionary
    - The dictionary parameter is essential for the node's operation, as it is the data structure that will be printed to the console. It is required and plays a central role in the node's functionality, determining the information displayed for debugging purposes.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]
## Optional
- label
    - The label parameter provides a descriptive title for the output, enhancing the readability of the console output. While not required, it adds clarity when debugging multiple dictionary outputs simultaneously.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- dictionary
    - The node's output is the original dictionary passed in. This allows further processing or debugging if needed, ensuring the data remains available for subsequent operations in the workflow.
    - Comfy dtype: DICT
    - Python dtype: Dict[Any, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
