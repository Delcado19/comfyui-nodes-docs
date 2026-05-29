# Documentation
- Class name: ConvertAnything
- Category: EasyUse/Logic
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node can convert the given input to the specified output type, providing a versatile solution for data conversion tasks. It operates by interpreting the input and converting it to the desired category (such as string, integer, float, or boolean) based on the user's selection.

# Input types
## Required
- anything
    - The ‘anything’ parameter is crucial; it represents the input to be converted. Its role in node operation is to provide the data that will undergo the conversion process.
    - Comfy dtype: *
    - Python dtype: Union[str, int, float, bool, torch.Tensor, np.ndarray, Decimal, List, Tuple, Dict[Any, Any]]
- output_type
    - The ‘output_type’ parameter determines the expected result of the conversion process. It is crucial in guiding the node to produce the correct type of output.
    - Comfy dtype: COMBO[string,int,float,boolean]
    - Python dtype: Union[str, int, float, bool]

# Output types
- *
    - The output of this node is the converted data, reflecting the result after the input is converted to the specified type.
    - Comfy dtype: *
    - Python dtype: Union[str, int, float, bool, torch.Tensor, np.ndarray, Decimal, List, Tuple, Dict[Any, Any]]

# Usage tips
- Infra type: CPU

# Source code
```
class ConvertAnything:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'anything': (AlwaysEqualProxy('*'),), 'output_type': (['string', 'int', 'float', 'boolean'], {'default': 'string'})}}
    RETURN_TYPES = ((AlwaysEqualProxy('*'),),)
    RETURN_NAMES = ('*',)
    OUTPUT_NODE = True
    FUNCTION = 'convert'
    CATEGORY = 'EasyUse/Logic'

    def convert(self, *args, **kwargs):
        print(kwargs)
        anything = kwargs['anything']
        output_type = kwargs['output_type']
        params = None
        if output_type == 'string':
            params = str(anything)
        elif output_type == 'int':
            params = int(anything)
        elif output_type == 'float':
            params = float(anything)
        elif output_type == 'boolean':
            params = bool(anything)
        return (params,)
```