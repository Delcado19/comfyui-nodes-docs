
# Documentation
- Class name: Int to Log Entry [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: False

The 'Int to Log Entry' node converts an integer value and an optional label into a log entry format. This functionality is essential for recording and tracking integer values in the system, providing a structured and readable log entry for interpretation and analysis.

# Input types
## Required
- value
    - The 'value' parameter represents the integer value to be logged. It is the core component of the log entry and the primary data point for constructing the log entry.
    - Comfy dtype: INT
    - Python dtype: int
- label
    - The 'label' parameter is an optional string that provides context or description for the integer value being logged. By adding a textual description to the value, it enhances the readability and interpretability of the log entry.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- log_entry
    - The output 'log_entry' is a structured representation of the input integer value and optional label, formatted for logging purposes. It encapsulates the data in a log entry format, making it suitable for tracking and analysis in logging systems.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamIntToLog:
    NODE_NAME = "Int to Log Entry"
    ICON = "🗎"
    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = (LogEntry.ID,)
    RETURN_NAMES = ("log_entry",)
    FUNCTION = "convert"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "value": ("INT", {"default": 0}),
                "label": ("STRING", {"default": ""}),
            },
        }

    def convert(self, label, value):
        return (LogEntry.new(label + ": " + str(value)),)

```
