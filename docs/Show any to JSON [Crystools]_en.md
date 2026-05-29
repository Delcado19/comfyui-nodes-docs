
# Documentation
- Class name: Show any to JSON [Crystools]
- Category: crystools 🪛/Debugger
- Output node: True
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

This node converts any given value to a JSON string (if possible) and displays it. It focuses on handling lists that contain dictionaries or other lists, aiming to serialize them into readable JSON format for debugging or inspection.

# Input types
## Optional
- any_value
    - The 'any_value' parameter accepts any data type, including lists, dictionaries, or basic types. It attempts to serialize the data structure into JSON format, aiding visualization or debugging.
    - Comfy dtype: *
    - Python dtype: any

# Output types
- string
    - Returns the serialized JSON string; if serialization fails, returns an error message.
    - Comfy dtype: STRING
    - Python dtype: str
- ui
    - The 'ui' output parameter provides a UI element that displays the serialized JSON string, or shows an error message if serialization fails.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CConsoleAnyToJson:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
            },
            "optional": {
                "any_value": (any,),
            },
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.DEBUGGER.value
    INPUT_IS_LIST = True

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("string",)
    OUTPUT_NODE = True

    FUNCTION = "execute"

    def execute(self, any_value=None):
        text = TEXTS.INACTIVE_MSG.value

        if any_value is not None and isinstance(any_value, list):
            item = any_value[0]

            if isinstance(item, dict):
                try:
                    text = json.dumps(item, indent=CONFIG["indent"])
                except Exception as e:
                    text = "The input is a dict, but could not be serialized.\n"
                    logger.warn(e)

            elif isinstance(item, list):
                try:
                    text = json.dumps(item, indent=CONFIG["indent"])
                except Exception as e:
                    text = "The input is a list, but could not be serialized.\n"
                    logger.warn(e)

            else:
                text = str(item)

        logger.debug(f"Show any-json to console is running...")

        return {"ui": {"text": [text]}, "result": (text,)}

```
