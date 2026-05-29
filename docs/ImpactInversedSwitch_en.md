# Documentation
- Class name: GeneralInversedSwitch
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The GeneralInversedSwitch node aims to selectively process input data based on a selection parameter. It operates by iterating over a range determined by the 'select' input and adding the 'input' data to a result list conditionally. The node's function is to return the original input when the iteration count matches the 'select' value; otherwise, it adds 'None'. This node is particularly useful in scenarios requiring conditional data display or filtering without altering the original data structure.

# Input types
## Required
- select
    - The parameter 'select' determines the number of iterations in the node's operation. It is crucial because it dictates when the 'input' data is included in the node's output. The importance of 'select' lies in its ability to control the flow of data through the node, enabling conditional processing based on the iteration index.
    - Comfy dtype: INT
    - Python dtype: int
- input
    - The parameter 'input' represents the data that the node may process and, under certain conditions, include in its output. Its importance lies in being the subject of the node's conditional logic, where the node decides to append 'input' or 'None' based on the value of 'select'.
    - Comfy dtype: any_typ
    - Python dtype: Any
## Optional
- unique_id
    - The parameter 'unique_id' serves as an identifier for the node's operation. Although it does not directly affect the node's main functionality, it may be used for tracking or associating the node's output with specific instances or identifiers in a broader system.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- result
    - The output 'result' is a list that contains either the original 'input' data or 'None', depending on the value of the 'select' parameter and the iteration index. This output is important because it encapsulates the node's decision process, reflecting the node's purpose of conditional data inclusion.
    - Comfy dtype: COMBO[any_typ]
    - Python dtype: List[Any]

# Usage tips
- Infra type: CPU

# Source code
```
class GeneralInversedSwitch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'select': ('INT', {'default': 1, 'min': 1, 'max': 999999, 'step': 1}), 'input': (any_typ,)}, 'hidden': {'unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ByPassTypeTuple((any_typ,))
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, select, input, unique_id):
        res = []
        for i in range(0, select):
            if select == i + 1:
                res.append(input)
            else:
                res.append(None)
        return res
```