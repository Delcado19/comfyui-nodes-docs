# Documentation
- Class name: WAS_Logical_AND
- Category: Logical Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Logical_AND node is designed to perform a logical AND operation. It evaluates two boolean inputs to determine if both conditions are true, returning a boolean result representing the logical AND of the inputs.

# Input types
## Required
- boolean_a
    - The first boolean input, used in the logical AND operation. It is critical because it represents one of the conditions that must be true for the final result to be true.
    - Comfy dtype: bool
    - Python dtype: bool
- boolean_b
    - The second boolean input, also used in the logical AND operation. Its value is equally important, as the node returns true only when both this input and the first are true.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- result
    - The result of the logical AND operation between the two boolean inputs. It is important because it provides the final outcome of the logical AND operation.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Logical_AND(WAS_Logical_Comparisons):

    def do(self, boolean_a, boolean_b):
        return (boolean_a and boolean_b,)
```