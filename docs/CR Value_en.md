# Documentation
- Class name: CR_Value
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_Value node is designed to provide a versatile interface for converting input values into different data types. It emphasizes flexibility and utility in data operations, allowing users to extract numerical and textual representations from a single input, thereby enhancing the node's adaptability in various workflows.

# Input types
## Required
- value
    - The 'value' parameter is crucial, as it serves as the primary input for the node's conversion process. It is the source for deriving floating-point and integer representations, making it a fundamental element in node operations.
    - Comfy dtype: FLOAT
    - Python dtype: Union[float, str]

# Output types
- FLOAT
    - The 'FLOAT' output provides the floating-point representation of the input value, which is useful for numerical calculations and analyses requiring precise decimal values.
    - Comfy dtype: FLOAT
    - Python dtype: float
- INT
    - The 'INT' output provides the integer form of the input value, suitable for cases where only integers are needed, thus simplifying calculations and reducing complexity.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The 'show_help' output provides a URL link to the node documentation, which is useful for users seeking additional guidance or information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_Value:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'value': ('FLOAT', {'default': 1.0})}}
    RETURN_TYPES = ('FLOAT', 'INT', 'STRING')
    RETURN_NAMES = ('FLOAT', 'INT', 'show_help')
    CATEGORY = icons.get('Comfyroll/Utils/Other')
    FUNCTION = 'get_value'

    def get_value(self, value):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-value'
        return (float(value), int(value), show_help)
```