
# Documentation
- Class name: String to Log Entry [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: True

The String to Log Entry node converts a given text string into a log entry, optionally adding a label as a prefix. This functionality is critical for logging and tracking within the system, enabling structured recording of text data.

# Input types
## Required
- text
    - The text parameter is the main content to be logged. It serves as the core information recorded in the log entry.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- label
    - The label parameter is an optional prefix for the text content. When provided, it can categorize or provide context for the log entry, enhancing its informational value.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- log_entry
    - The output log_entry is a structured representation of the input text, potentially with a label prefix, formatted as a log entry for recording or tracking purposes.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamStringToLog:
    NODE_NAME = "String to Log Entry"
    ICON = "🗎"
    OUTPUT_NODE = True
    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = (LogEntry.ID,)
    RETURN_NAMES = ("log_entry",)
    FUNCTION = "convert"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "text": ("STRING", {"default": ""}),
            },
            "optional": {
                "label": ("STRING", {"default": ""}),
            }
        }

    def convert(self, text, **values):
        label = values.get("label", "")
        if label:
            return (LogEntry.new(label + ": " + text),)
        else:
            return (LogEntry.new(text),)

```
