# Documentation
- Class name: WAS_Logical_OR
- Category: Logical Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Logical_OR node performs a logical OR operation on two boolean inputs. In decision making, it is fundamental when the presence of either condition is sufficient to trigger an action or outcome.

# Input types
## Required
- boolean_a
- The first boolean input of the logical OR operation. It plays a key role in determining the function's result, as it is one of the conditions that will cause the overall output to be true when it is true.
    - Comfy dtype: bool
    - Python dtype: bool
- boolean_b
- The second boolean input of the logical OR operation. It is equally important as the first input, representing another condition that can cause the output to be true when satisfied.
    - Comfy dtype: bool
    - Python dtype: bool

# Output types
- result
- The result of the logical OR operation between the two inputs. It indicates whether at least one condition is met, summarizing the essence of OR logic.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Logical_OR(WAS_Logical_Comparisons):

    def do(self, boolean_a, boolean_b):
        return (boolean_a or boolean_b,)
```