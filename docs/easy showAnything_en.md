# Documentation
- Class name: showAnything
- Category: EasyUse/Logic
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The showAnything node class serves as a versatile interface for recording and processing diverse input data, facilitating the management and visualization of various types of information within a workflow.

# Input types
## Optional
- anything
    - The 'anything' parameter is a key element that enables the node to adapt to various input data, ensuring flexibility and adaptability in diverse processing scenarios.
    - Comfy dtype: COMBO[*]
    - Python dtype: Union[str, int, float, list, dict, None]
- unique_id
    - The 'unique_id' parameter is essential for associating input values with specific workflow nodes, allowing targeted data manipulation and tracking within the workflow structure.
    - Comfy dtype: str
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter contains additional information that may be necessary for node operations, influencing the node's processing and output based on the workflow context.
    - Comfy dtype: list
    - Python dtype: List[Dict[str, Any]]

# Output types
- ui
    - The 'ui' output parameter is a structured representation of the node results, focused on providing clear, concise visual processing data within the user interface.
    - Comfy dtype: dict
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class showAnything:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'anything': (AlwaysEqualProxy('*'), {})}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    INPUT_IS_LIST = True
    OUTPUT_NODE = True
    FUNCTION = 'log_input'
    CATEGORY = 'EasyUse/Logic'

    def log_input(self, unique_id=None, extra_pnginfo=None, **kwargs):
        values = []
        if 'anything' in kwargs:
            for val in kwargs['anything']:
                try:
                    if type(val) is str:
                        values.append(val)
                    else:
                        val = json.dumps(val)
                        values.append(str(val))
                except Exception:
                    values.append(str(val))
                    pass
        if unique_id and extra_pnginfo and ('workflow' in extra_pnginfo[0]):
            workflow = extra_pnginfo[0]['workflow']
            node = next((x for x in workflow['nodes'] if str(x['id']) == unique_id[0]), None)
            if node:
                node['widgets_values'] = [values]
        return {'ui': {'text': values}}
```