# Documentation
- Class name: pipeToBasicPipe
- Category: EasyUse/Pipe
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The 'pipeToBasicPipe' node is designed to convert complex pipeline configurations into a simplified 'basic_pipe' format. It acts as an intermediary, ensuring that the basic components of the pipeline are extracted and organized for easier further processing. This node plays a key role in reducing the complexity of pipeline management, thereby improving the overall efficiency of the system.

# Input types
## Required
- pipe
    - The 'pipe' parameter is essential for the node's operation, as it represents the complex pipeline configuration that needs to be simplified. It is the primary input, determining the node's execution and the structure of the generated 'basic_pipe'.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- my_unique_id
    - The 'my_unique_id' parameter, while optional, can be used to uniquely identify the transformation process. It adds traceability to the operation, which can be important for debugging or tracking in complex systems.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- basic_pipe
    - The 'basic_pipe' output contains a simplified representation of the original pipeline. It is a structured output that retains the core elements of the pipeline, making it easier to manipulate and integrate into subsequent processes.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, Any, Any, Any, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class pipeToBasicPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',)}, 'hidden': {'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('BASIC_PIPE',)
    RETURN_NAMES = ('basic_pipe',)
    FUNCTION = 'doit'
    CATEGORY = 'EasyUse/Pipe'

    def doit(self, pipe, my_unique_id=None):
        new_pipe = (pipe.get('model'), pipe.get('clip'), pipe.get('vae'), pipe.get('positive'), pipe.get('negative'))
        del pipe
        return (new_pipe,)
```