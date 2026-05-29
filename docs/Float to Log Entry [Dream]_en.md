
# Documentation
- Class name: Float to Log Entry [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: False

The Float to Log Entry node converts a floating-point number into a log entry, facilitating tracking and recording of numeric data within the system. It encapsulates the process of turning a float value into a structured log format, making it easier to record and review numeric changes or states.

# Input types
## Required
- value
    - Represents the floating-point number to be logged. Its inclusion is essential for defining the numeric data that will be converted into a log entry.
    - Comfy dtype: FLOAT
    - Python dtype: float
- label
    - An optional label to prefix the logged value, providing context or categorization for the recorded numeric data.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- log_entry
    - The output is a structured log entry that encapsulates the provided floating-point value, optionally prefixed with a label, presented in a format suitable for logging and tracking.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamFloatToLog:
    NODE_NAME = "Float to Log Entry"
    ICON = "🗎"
    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = (LogEntry.ID,)
    RETURN_NAMES = ("log_entry",)
    FUNCTION = "convert"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("FLOAT", {"default": 0}),
                "label": ("STRING", {"default": ""}),
            },
        }

    def convert(self, label, value):
        return (LogEntry.new(label + ": " + str(value)),)

```
