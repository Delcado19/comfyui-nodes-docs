# Documentation
- Class name: Loop
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

The Loop node class encapsulates the iterative processing procedure, enabling the execution of a series of operations or algorithms in a loop. It is designed to facilitate the control flow of repetitive tasks, allowing dynamic adjustments and integration of user-defined logic within the loop structure.

# Input types
## Required
- required
    - This parameter is crucial for defining the conditions for loop execution. It acts as a gatekeeper, ensuring that the loop runs only when specified requirements are met, thereby affecting the overall execution flow and operational results.
    - Comfy dtype: COMBO[None]
    - Python dtype: Dict[str, Any]

# Output types
- LOOP
    - The output of the Loop node is the node itself, encapsulating the results of the iterative process. It represents the culmination of the loop operation sequence, providing a structured and controlled way to output the final state of the loop execution.
    - Comfy dtype: NODE[Loop]
    - Python dtype: Loop

# Usage tips
- Infra type: CPU

# Source code
```
class Loop:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}}
    RETURN_TYPES = ('LOOP',)
    FUNCTION = 'run'
    CATEGORY = 'DragNUWA'

    def run(self):
        return (self,)
```