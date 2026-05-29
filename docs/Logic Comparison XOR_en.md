# Documentation
- Class name: WAS_Logical_XOR
- Category: Logical Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Logical_XOR node performs a logical exclusive-or operation on two Boolean inputs. It is fundamental in logic circuits and decision processes, providing a simple yet powerful mechanism for binary difference.

# Input types
## Required
- boolean_a
    - The first Boolean input for the XOR operation. It plays a key role in determining the result of the logical comparison, as the node’s function depends on evaluating both inputs.
    - Comfy dtype: bool
    - Python dtype: bool
- boolean_b
    - The second Boolean input for the XOR operation. It is equally important in the logical evaluation as the first input, contributing to the final Boolean result of the node.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- result
    - The output of the logical exclusive-or operation, a single Boolean value representing the mutual exclusivity or non-relation of the two inputs.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Logical_XOR(WAS_Logical_Comparisons):

    def do(self, boolean_a, boolean_b):
        return (boolean_a != boolean_b,)
```