# Documentation
- Class name: SeargeConditioningMuxer5
- Category: Searge/_deprecated_/FlowControl
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node acts as a conditional multiplexer, selecting a specific conditioning input based on the selector value. It facilitates data routing through the network, ensuring the appropriate conditioning signal is passed to subsequent operations.

# Input types
## Required
- input0
    - The first conditioning input, a critical component of the node's operation. It represents one of the potential data streams that the input selector can choose.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- input1
    - The second conditioning input, another important part of the node's functionality. When the input selector is set to 1, this will be the selected data stream.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- input2
    - The third conditioning input, which helps the node route different data streams based on the selector value.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- input3
    - The fourth conditioning input, part of the node's diverse selection mechanism. When the input selector is 3, it becomes the active input.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- input4
    - The fifth conditioning input, completing the node's selection set. When the input selector value is 4, it will be the selected input.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- input_selector
    - The selector parameter determines which conditioning input passes through the node. It is essential for determining the output based on the set value range.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The node's output is the conditioning input selected by the input selector. It represents the result of the node's operation — the appropriate conditioning signal for downstream processes.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeConditioningMuxer5:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'input0': ('CONDITIONING',), 'input1': ('CONDITIONING',), 'input2': ('CONDITIONING',), 'input3': ('CONDITIONING',), 'input4': ('CONDITIONING',), 'input_selector': ('INT', {'default': 0, 'min': 0, 'max': 4})}}
    RETURN_TYPES = ('CONDITIONING',)
    RETURN_NAMES = ('output',)
    FUNCTION = 'mux'
    CATEGORY = 'Searge/_deprecated_/FlowControl'

    def mux(self, input0, input1, input2, input3, input4, input_selector):
        if input_selector == 1:
            return (input1,)
        elif input_selector == 2:
            return (input2,)
        elif input_selector == 3:
            return (input3,)
        elif input_selector == 4:
            return (input4,)
        else:
            return (input0,)
```