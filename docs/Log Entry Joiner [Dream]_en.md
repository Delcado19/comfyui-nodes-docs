
# Documentation
- Class name: Log Entry Joiner [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: False

Log Entry Joiner node is designed to merge multiple log entries into a single complete log entry. It integrates discrete log information, making log data easier to manage and interpret, forming a unified entity.

# Input types
## Optional
- entry_i
    - Represents log entries to be merged. Each "entry_i" allows sequential combination of log entries, improving final log completeness. Index "i" can be from 0 to 3, indicating the position of the log entry in the merge process.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry

# Output types
- log_entry
    - The merged unified log entry, aggregating information from the individual log entries provided as input.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamJoinLog:
    NODE_NAME = "Log Entry Joiner"
    ICON = "🗎"
    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = (LogEntry.ID,)
    RETURN_NAMES = ("log_entry",)
    FUNCTION = "convert"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "optional": {
                "entry_0": (LogEntry.ID,),
                "entry_1": (LogEntry.ID,),
                "entry_2": (LogEntry.ID,),
                "entry_3": (LogEntry.ID,),
            }
        }

    def convert(self, **values):
        entry = LogEntry([])
        for i in range(4):
            txt = values.get("entry_" + str(i), None)
            if txt:
                entry = entry.merge(txt)
        return (entry,)

```
