# Documentation
- Class name: SeargeLatentMuxer3
- Category: Searge/_deprecated_/FlowControl
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

SeargeLatentMuxer3 is a node for managing latent data streams. It controls data flow by selecting one of three provided latent inputs based on the value of the input selector. This node is essential for controlling data flow in complex networks requiring conditional routing.

# Input types
## Required
- input0
    - The first latent input that the node can select and route to the output. When the input selector does not indicate other inputs, it plays a critical role in the node's decision-making process.
    - Comfy dtype: "LATENT"
    - Python dtype: np.ndarray or a similar array type representing latent data
- input1
    - The node's second latent input option. When the input selector is set to 1, it becomes the output, directing data flow accordingly.
    - Comfy dtype: "LATENT"
    - Python dtype: np.ndarray or a similar array type representing latent data
- input2
    - The third latent input that can be selected by the node. When the input selector value is 2, it is chosen as the output, thereby determining the data flow path.
    - Comfy dtype: "LATENT"
    - Python dtype: np.ndarray or a similar array type representing latent data
- input_selector
    - This integer parameter determines which latent input is selected as the output. It is critical to the node's operation as it directly affects routing decisions.
    - Comfy dtype: "INT"
    - Python dtype: int

# Output types
- output
    - The node's output is the latent input selected based on the input selector value. This output carries the data that will continue through the network.
    - Comfy dtype: "LATENT"
    - Python dtype: np.ndarray or a similar array type representing the selected latent data

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeLatentMuxer3:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'input0': ('LATENT',), 'input1': ('LATENT',), 'input2': ('LATENT',), 'input_selector': ('INT', {'default': 0, 'min': 0, 'max': 2})}}
    RETURN_TYPES = ('LATENT',)
    RETURN_NAMES = ('output',)
    FUNCTION = 'mux'
    CATEGORY = 'Searge/_deprecated_/FlowControl'

    def mux(self, input0, input1, input2, input_selector):
        if input_selector == 1:
            return (input1,)
        elif input_selector == 2:
            return (input2,)
        else:
            return (input0,)
```