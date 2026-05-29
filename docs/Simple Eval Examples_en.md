
# Documentation
- Class name: Simple Eval Examples
- Category: Efficiency Nodes/Simple Eval
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Simple Eval Examples node provides a mechanism for loading and displaying sample inputs for simple evaluation tasks. It is designed to help users understand and test the evaluation functionality within the system, offering practical examples and references.

# Input types
## Required
- models_text
    - The models_text parameter defines the default text examples for simple evaluation tasks, which are loaded from a file. These text examples help illustrate how to use the evaluation functionality and the possible input types, providing users with intuitive references and guidance.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
    class TSC_EvalExamples:
        @classmethod
        def INPUT_TYPES(cls):
            filepath = os.path.join(my_dir, 'workflows', 'SimpleEval_Node_Examples.txt')
            with open(filepath, 'r') as file:
                examples = file.read()
            return {"required": {"models_text": ("STRING", {"default": examples, "multiline": True}), }, }

        RETURN_TYPES = ()
        CATEGORY = "Efficiency Nodes/Simple Eval"

```
