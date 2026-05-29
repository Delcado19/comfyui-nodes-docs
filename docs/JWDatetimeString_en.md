
# Documentation
- Class name: JWDatetimeString
- Category: jamesWalker55
- Output node: False

This node generates a string representation of the current date and time, formatted according to the specified pattern. It simplifies the complexity of date-time formatting, providing a simple interface for obtaining a formatted date-time string.

# Input types
## Required
- format
    - Specifies the format for returning the current date and time. This allows customizing the output string according to the application's needs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The output is a string representing the current date and time, formatted according to the specified pattern.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
@register_node("JWDatetimeString", "Datetime String")
class _:
    CATEGORY = "jamesWalker55"
    INPUT_TYPES = lambda: {
        "required": {
            "format": ("STRING", {"default": "%Y-%m-%dT%H:%M:%S"}),
        }
    }
    RETURN_TYPES = ("STRING",)
    FUNCTION = "execute"

    def execute(self, format: str):
        now = datetime.now()
        return (now.strftime(format),)

    @classmethod
    def IS_CHANGED(cls, *args):
        # This value will be compared with previous 'IS_CHANGED' outputs
        # If inequal, then this node will be considered as modified
        # NaN is never equal to itself
        return float("NaN")

```
