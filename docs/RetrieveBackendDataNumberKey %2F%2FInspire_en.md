# Documentation
- Class name: RetrieveBackendDataNumberKey
- Category: Data Retrieval
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node aims to extract numeric data from the backend service based on the provided key, facilitating the acquisition of specific information without complex data processing.

# Input types
## Required
- key
    - ‘key’ parameter is crucial because it uniquely identifies the data required from the backend. It serves as a reference for the node to locate and retrieve the correct value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- data
    - The output ‘data’ represents the numeric value obtained from the backend corresponding to the input ‘key’. It is the direct result of node execution and is valuable for further data analysis or processing.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]

# Usage tips
- Infra type: CPU

# Source code
```
class RetrieveBackendDataNumberKey(RetrieveBackendData):

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'key': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
```