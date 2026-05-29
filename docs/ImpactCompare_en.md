# Documentation
- Class name: ImpactCompare
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImpactCompare node evaluates and compares two inputs 'a' and 'b' based on a specified comparison operator. It serves as a basic logical tool, allowing users to perform various relational checks and return a boolean result corresponding to the comparison made.

# Input types
## Required
- cmp
    - The 'cmp' parameter defines the type of comparison between inputs 'a' and 'b'. It is crucial as it determines the logic applied to the comparison and directly influences the result of the node's execution.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The 'a' parameter represents the first operand in the comparison. Its value and data type can significantly affect the node's execution and the boolean result returned by the node.
    - Comfy dtype: any
    - Python dtype: Any
- b
    - The 'b' parameter is the second operand in the comparison. It works with 'a' to determine the final boolean result based on the specified comparison operator.
    - Comfy dtype: any
    - Python dtype: Any

# Output types
- result
    - The 'result' output reflects the outcome of the comparison between 'a' and 'b' as a boolean value. It is important as it is the direct output of the node's logical operation and is used to inform subsequent processes or decisions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactCompare:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'cmp': (['a = b', 'a <> b', 'a > b', 'a < b', 'a >= b', 'a <= b', 'tt', 'ff'],), 'a': (any_typ,), 'b': (any_typ,)}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic'
    RETURN_TYPES = ('BOOLEAN',)

    def doit(self, cmp, a, b):
        if cmp == 'a = b':
            return (a == b,)
        elif cmp == 'a <> b':
            return (a != b,)
        elif cmp == 'a > b':
            return (a > b,)
        elif cmp == 'a < b':
            return (a < b,)
        elif cmp == 'a >= b':
            return (a >= b,)
        elif cmp == 'a <= b':
            return (a <= b,)
        elif cmp == 'tt':
            return (True,)
        else:
            return (False,)
```