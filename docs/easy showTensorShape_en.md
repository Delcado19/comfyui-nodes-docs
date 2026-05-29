# Documentation
- Class name: showTensorShape
- Category: EasyUse/Logic
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class aims to provide a high-level overview of tensor shapes passing through it, helping understand data structures without involving specific method details. It is a critical tool for debugging and ensuring correct tensor dimensions in workflows.

# Input types
## Required
- tensor
    - The 'tensor' parameter is key, as it carries the data the node will analyze. It can be a tensor, list, or dictionary, and its shape is what the node will report. This is essential for the node's execution and subsequent data processing.
    - Comfy dtype: COMBO[Tensor, List, Dict]
    - Python dtype: Union[torch.Tensor, List, Dict]
## Optional
- unique_id
    - The 'unique_id' parameter, while not required, serves as an identifier for tensor shape information, allowing easier tracking and management of data within the system.
    - Comfy dtype: str
    - Python dtype: str
- extra_pnginfo
    - If the 'extra_pnginfo' parameter is provided, it adds additional context to the tensor shape information, potentially enhancing the node's utility in more complex data processing scenarios.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- ui
    - The 'ui' output is a dictionary containing a textual representation of the tensor shape, which is critical for visualizing data structures and ensuring subsequent steps in the workflow receive correct information.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class showTensorShape:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'tensor': (AlwaysEqualProxy('*'),)}, 'optional': {}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    RETURN_NAMES = ()
    OUTPUT_NODE = True
    FUNCTION = 'log_input'
    CATEGORY = 'EasyUse/Logic'

    def log_input(self, tensor, unique_id=None, extra_pnginfo=None):
        shapes = []

        def tensorShape(tensor):
            if isinstance(tensor, dict):
                for k in tensor:
                    tensorShape(tensor[k])
            elif isinstance(tensor, list):
                for i in range(len(tensor)):
                    tensorShape(tensor[i])
            elif hasattr(tensor, 'shape'):
                shapes.append(list(tensor.shape))
        tensorShape(tensor)
        return {'ui': {'text': shapes}}
```