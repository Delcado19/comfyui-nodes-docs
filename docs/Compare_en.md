
# Documentation
- Class name: Compare
- Category: Logic
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Compare node is designed to evaluate the relationship between two inputs based on a specified comparison operation (such as equality, inequality, greater than, less than). It abstracts the comparison logic into a simple interface, enabling users to dynamically evaluate and handle conditions of their data or variables.

# Input types
## Required
- a
    - The first input to be compared. It plays a crucial role in determining the result of the comparison operation.
    - Comfy dtype: *
    - Python dtype: Any
- b
    - The second input to be compared with the first input. Its value is vital when evaluating the specified comparison condition.
    - Comfy dtype: *
    - Python dtype: Any
- comparison
    - Specifies the type of comparison to be performed between the two inputs (e.g., `'=='`, `'!='`, `'<'`, `'>'`, `'<='`, `'>='`). This determines the logic used for comparison, directly affecting the result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- B
    - The result of the comparison operation, indicating whether the specified condition between the two inputs holds.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Compare:
    """
    This nodes compares the two inputs and outputs the result of the comparison.
    """

    @classmethod
    def INPUT_TYPES(s):
        """
        Comparison node takes two inputs, a and b, and compares them.
        """
        s.compare_functions = list(COMPARE_FUNCTIONS.keys())
        return {
            "required": {
                "a": (AlwaysEqualProxy("*"), {"default": 0}),
                "b": (AlwaysEqualProxy("*"), {"default": 0}),
                "comparison": (s.compare_functions, {"default": "a == b"}),
            },
        }

    RETURN_TYPES = ("BOOLEAN",)

    RETURN_NAMES = "BOOLEAN"

    FUNCTION = "compare"

    CATEGORY = "Logic"

    def compare(self, a, b, comparison):
        """
        Compare two inputs and return the result of the comparison.

        Args:
            a (UNKNOWN): The first input.
            b (UNKNOWN): The second input.
            comparison (STRING): The comparison to perform. Can be one of "==", "!=", "<", ">", "<=", ">=".

        Returns:
            : The result of the comparison.
        """
        return (COMPARE_FUNCTIONS[comparison](a, b),)

```
