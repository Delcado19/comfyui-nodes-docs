# Documentation
- Class name: CR_Index
- Category: Comfyroll/Utils/Index
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_Index node manages and retrieves a specific index from a given dataset. It provides efficient indexing of large datasets, meeting various data operation and analysis needs. The node emphasizes simplicity and flexibility, ensuring users can easily integrate it into workflows for streamlined operation.

# Input types
## Required
- index
- The 'index' parameter is crucial for specifying the position within the dataset from which the node retrieves information. It directly affects the node's output by determining the exact data point to access. This parameter is essential for data selection and filtering within the workflow.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- print_to_console
- The 'print_to_console' parameter allows users to toggle console output. When set to 'Yes', it enables the node to print the current index value to the console, providing real-time feedback during execution. This feature is especially useful for debugging and monitoring the progress of data indexing operations.
    - Comfy dtype: COMBO['Yes', 'No']
    - Python dtype: str

# Output types
- INT
- The 'INT' output provides the index value retrieved from the dataset, which can be used in downstream processes. This output is important because it forms the basis for subsequent data operations and analysis, ensuring workflow integrity and continuity.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
- The 'show_help' output provides a URL link to the node documentation, allowing users to access additional information and guidance on how to use the node effectively. This is particularly beneficial for new users or when further clarification of node functionality is needed.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_Index:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'index': ('INT', {'default': 1, 'min': 0, 'max': 10000}), 'print_to_console': (['Yes', 'No'],)}}
    RETURN_TYPES = ('INT', 'STRING')
    RETURN_NAMES = ('INT', 'show_help')
    FUNCTION = 'index'
    CATEGORY = icons.get('Comfyroll/Utils/Index')

    def index(self, index, print_to_console):
        if print_to_console == 'Yes':
            print(f'[Info] CR Index:{index}')
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Index-Nodes#cr-index'
        return (index, show_help)
```