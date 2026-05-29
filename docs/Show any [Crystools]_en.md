
# Documentation
- Class name: Show any [Crystools]
- Category: crystools 🪛/Debugger
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed for debugging purposes, allowing any value to be visualized on the console or display interface. It supports a wide range of data types, making it very versatile (multi-functional) when inspecting values during development.

# Input types
## Optional
- any_value
    - The value to display. It can be any data type, which gives this node high versatility (multi-functionality) during debugging.
    - Comfy dtype: *
    - Python dtype: Any
- console
    - Determines whether to print the value to the console. It enhances debugging by allowing direct observation of the value.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- display
    - Controls whether to display the value on the UI, facilitating user interaction and data visualization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prefix
    - An optional prefix added before the value when printing to the console, helping to distinguish different debug outputs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui
    - Provides a UI element to display the value, enhancing the debugging experience by visualizing data directly on the interface.
    - Comfy dtype: UI


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CConsoleAny:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
            },
            "optional": {
                "any_value": (any,),
                "console": BOOLEAN_FALSE,
                "display": BOOLEAN,
                KEYS.PREFIX.value: STRING,
            },
            "hidden": {
                # "unique_id": "UNIQUE_ID",
                # "extra_pnginfo": "EXTRA_PNGINFO",
            },
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.DEBUGGER.value
    INPUT_IS_LIST = True

    RETURN_TYPES = ()
    OUTPUT_NODE = True

    FUNCTION = "execute"

    def execute(self, any_value=None, console=False, display=True, prefix=None):
        console = console[0]
        display = display[0]
        prefix = prefix[0]
        text = ""
        textToDisplay = TEXTS.INACTIVE_MSG.value

        if any_value is not None:
            try:
                if type(any_value) == list:
                    for item in any_value:
                        try:
                            text += str(item)
                        except Exception as e:
                            text += "source exists, but could not be serialized.\n"
                            logger.warn(e)
                else:
                    logger.warn("any_value is not a list")

            except Exception:
                try:
                    text = json.dumps(any_value)[1:-1]
                except Exception:
                    text = 'source exists, but could not be serialized.'

        logger.debug(f"Show any to console is running...")

        if console:
            if prefix is not None and prefix != "":
                print(f"{prefix}: {text}")
            else:
                print(text)

        if display:
            textToDisplay = text

        value = [console, display, prefix, textToDisplay]
        # setWidgetValues(value, unique_id, extra_pnginfo)

        return {"ui": {"text": value}}

```
