
# Documentation
- Class name: ControlNetPreprocessorSelector
- Category: ControlNet Preprocessors
- Output node: False

The ControlNetPreprocessorSelector node is designed to select a specific preprocessor for ControlNet operations, dynamically adjusting the preprocessing strategy based on user input.

# Input types
## Required
- preprocessor
    - Specifies the preprocessor to select for the operation, enabling the system to dynamically adapt to different preprocessing requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- preprocessor
    - Returns the selected preprocessor for easy application in subsequent ControlNet operations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ControlNetPreprocessorSelector:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "preprocessor": (PREPROCESSOR_OPTIONS,),
            }
        }

    RETURN_TYPES = (PREPROCESSOR_OPTIONS,)
    RETURN_NAMES = ("preprocessor",)
    FUNCTION = "get_preprocessor"

    CATEGORY = "ControlNet Preprocessors"

    def get_preprocessor(self, preprocessor: str):
        return (preprocessor,)

```
