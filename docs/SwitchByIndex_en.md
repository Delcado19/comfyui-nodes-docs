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
```
class SwitchByIndex:

    @classmethod
    def INPUT_TYPES(cls):
        return {'optional': {'A': (any_type,), 'B': (any_type,)}, 'required': {'index': ('INT', {'default': -1, 'min': -1, 'max': 1000, 'step': 1, 'display': 'number'}), 'flat': (['off', 'on'],)}}
    RETURN_TYPES = (any_type, 'INT')
    RETURN_NAMES = ('C', 'count')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True, False)

    def run(self, A=[], B=[], index=-1, flat='on'):
        flat = flat[0]
        C = []
        index = index[0]
        for a in A:
            C.append(a)
        for b in B:
            C.append(b)
        if flat == 'on':
            C = flatten_list(C)
        if index > -1:
            try:
                C = [C[index]]
            except Exception as e:
                C = []
        return (C, len(C))
```