
# Documentation
- Class name: FL_CodeNode
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

FL_CodeNode allows dynamic execution of user-provided code within a predefined execution environment, enabling custom processing and manipulation of inputs to generate outputs. The node abstracts the complexity of safely and efficiently executing arbitrary code snippets, providing a flexible interface for user-defined logic.

# Input types
## Required
- code_input
    - The node's primary input, accepting a multi-line code string that the user wishes to execute. This code can interact with optional inputs and define the logic for output generation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- input_i
    - A series of optional input parameters (up to four), which can be used in user-provided code for custom logic and processing. These inputs are dynamically accepted, and their types can vary based on the user's code.
    - Comfy dtype: *
    - Python dtype: dict

# Output types
- output_0
    - The result output parameter from executing user-provided code.
    - Comfy dtype: *
    - Python dtype: object
- output_1
    - The result output parameter from executing user-provided code.
    - Comfy dtype: *
    - Python dtype: object
- output_2
    - The result output parameter from executing user-provided code.
    - Comfy dtype: *
    - Python dtype: object
- output_3
    - The result output parameter from executing user-provided code.
    - Comfy dtype: *
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FL_CodeNode:

    @classmethod
    def INPUT_TYPES(cls):
        required = {"code_input": ("STRING", {"multiline": True})}
        optional = {f"input_{i}": (AlwaysEqualProxy("*")) for i in range(4)}
        return {"required": required, "optional": optional}

    CATEGORY = "🏵️Fill Nodes"
    RETURN_TYPES = tuple(AlwaysEqualProxy("*") for _ in range(4))
    RETURN_NAMES = tuple(f"output_{i}" for i in range(4))

    FUNCTION = "execute"

    def execute(self, code_input, **kwargs):
        outputs = {i: None for i in range(4)}

        try:
            exec(code_input, {"inputs": kwargs, "outputs": outputs})
        except Exception as e:
            raise RuntimeError(f"Error executing user code: {e}")

        return tuple(outputs[i] for i in range(4))

```
