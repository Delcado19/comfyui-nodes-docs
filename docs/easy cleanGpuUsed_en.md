# Documentation
- Class name: cleanGPUUsed
- Category: EasyUse/Logic
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node aims to optimize computational resources by managing GPU memory. Its main function is to release any unoccupied GPU memory to ensure subsequent operations can run efficiently without interruption due to insufficient memory.

# Input types
## Required
- anything
    - Although this parameter does not directly affect the execution of the node, it is a placeholder to ensure compatibility with various input types. It does not affect the node's main functionality.
    - Comfy dtype: COMBO[AlwaysEqualProxy(str)]
    - Python dtype: Union[str, AlwaysEqualProxy]
## Optional
- unique_id
    - Although this parameter is optional, it can be used to track the execution of the node. It can help with logging and debugging processes.
    - Comfy dtype: str
    - Python dtype: Optional[str]
- extra_pnginfo
    - This optional parameter can store additional information related to the node's execution. It is not critical to the node's operation but may be useful for further analysis.
    - Comfy dtype: str
    - Python dtype: Optional[str]

# Output types

# Usage tips
- Infra type: GPU

# Source code
```
class cleanGPUUsed:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'anything': (AlwaysEqualProxy('*'), {})}, 'optional': {}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    RETURN_NAMES = ()
    OUTPUT_NODE = True
    FUNCTION = 'empty_cache'
    CATEGORY = 'EasyUse/Logic'

    def empty_cache(self, anything, unique_id=None, extra_pnginfo=None):
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
        return ()
```