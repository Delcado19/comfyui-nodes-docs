
# Documentation
- Class name: ttN textDebug
- Category: ttN/text
- Output node: True

The ttN textDebug node is designed for debugging purposes, allowing developers to inspect and display text-based input data in the development environment. It is a tool for validating text input content and structure, helping identify and resolve issues in text processing workflows.

# Input types
## Required
- print_to_console
    - Determines whether to print text to the console, providing a direct way to view text output for debugging purposes.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
- console_title
    - Specifies the title displayed in the console during debugging, serving as an identifier for the debugging session.
    - Comfy dtype: STRING
    - Python dtype: str
- execute
    - Controls when the debugging operation should be executed, enabling conditional debugging based on changes or continuous monitoring.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
    - The text content to be debugged, providing the actual data that will be inspected and potentially displayed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - Input text used for debugging, which may have been modified or annotated according to the debugging process.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ttN_textDebug:
    version = '1.0.'
    def __init__(self):
        self.num = 0

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "print_to_console": ([False, True],),
                    "console_title": ("STRING", {"default": ""}),
                    "execute": (["Always", "On Change"],),
                    "text": ("STRING", {"default": '', "multiline": True, "forceInput": True, "dynamicPrompts": True}),
                    },
                "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "my_unique_id": "UNIQUE_ID",
                           "ttNnodeVersion": ttN_textDebug.version},
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("text",)
    FUNCTION = "write"
    OUTPUT_NODE = True

    CATEGORY = "ttN/text"

    def write(self, print_to_console, console_title, execute, text, prompt, extra_pnginfo, my_unique_id):
        if execute == "Always":
            def IS_CHANGED(self):
                self.num += 1 if self.num == 0 else -1
                return self.num
            setattr(self.__class__, 'IS_CHANGED', IS_CHANGED)

        if execute == "On Change":
            if hasattr(self.__class__, 'IS_CHANGED'):
                delattr(self.__class__, 'IS_CHANGED')

        if print_to_console == True:
            if console_title != "":
                ttNl(text).t(f'textDebug[{my_unique_id}] - {CC.VIOLET}{console_title}').p()
            else:
                input_node = prompt[my_unique_id]["inputs"]["text"]

                input_from = None
                for node in extra_pnginfo["workflow"]["nodes"]:
                    if node['id'] == int(input_node[0]):
                        input_from = node['outputs'][input_node[1]].get('label')
                    
                        if input_from == None:
                            input_from = node['outputs'][input_node[1]].get('name')

                ttNl(text).t(f'textDebug[{my_unique_id}] - {CC.VIOLET}{input_from}').p()

        return {"ui": {"text": text},
                "result": (text,)}

```
