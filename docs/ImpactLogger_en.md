# Documentation
- Class name: ImpactLogger
- Category: ImpactPack/Debug
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImpactLogger node is designed to provide logging functionality for capturing and outputting information about data being processed. It is particularly useful for debugging purposes, allowing developers to inspect the shape and content of data at various stages of the workflow.

# Input types
## Required
- data
    - The 'data' parameter is essential to the logging process, as it represents the core data that the ImpactLogger node is designed to record. It is through this parameter that the node captures and prints the shape and content of the data for debugging.
    - Comfy dtype: any_typ
    - Python dtype: Any
## Optional
- prompt
    - The 'prompt' parameter serves as an optional descriptor that can provide additional context or a specific identifier for the data being logged. This can be particularly useful when tracking multiple data points or when log output is used for further analysis.
    - Comfy dtype: str
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows inclusion of extra information that may be relevant to the logging process. This could include metadata or any other auxiliary details not directly related to the core 'data' being recorded but still significant to the debugging process.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- output
    - The 'output' of the ImpactLogger node is an empty dictionary, indicating that the node's primary function is to log information rather than produce significant output to be passed to subsequent nodes.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactLogger:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'data': (any_typ, '')}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    CATEGORY = 'ImpactPack/Debug'
    OUTPUT_NODE = True
    RETURN_TYPES = ()
    FUNCTION = 'doit'

    def doit(self, data, prompt, extra_pnginfo):
        shape = ''
        if hasattr(data, 'shape'):
            shape = f'{data.shape} / '
        print(f'[IMPACT LOGGER]: {shape}{data}')
        print(f'         PROMPT: {prompt}')
        return {}
```