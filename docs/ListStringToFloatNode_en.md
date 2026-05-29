
# Documentation
- Class name: ListStringToFloatNode
- Category: Custom
- Output node: False

ListStringToFloatNode converts a list of strings into floats by applying a specific operation (such as summation) to each element. It can handle both direct float values and string-wrapped float lists, providing a versatile tool for processing numeric data in string input formats.

# Input types
## Required
- input_data
    - Represents the input string, which can be either a direct float value or a string representation of a list of floats. This input is critical for the node's operation as it determines the type of conversion and calculation to be performed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output_float
    - The result after converting and calculating the input data, provided as a single float value.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ListStringToFloatNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": { "input_data": ("STRING", {"default": "[]"}) },
        }

    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("output_float",)
    FUNCTION = "process_input"
    CATEGORY = "Custom"

    def process_input(self, input_data):
        # Attempt to evaluate the string input as a list
        try:
            # Convert string to list if it's not a list
            if isinstance(input_data, str):
                input_data = ast.literal_eval(input_data)
            
            # Example operation: calculate the sum of elements if it's a list
            if isinstance(input_data, list):
                result = sum(input_data)
            else:
                result = float(input_data)
        except:
            # Handle errors or unexpected input types
            result = 0.0

        return (result,)

```
