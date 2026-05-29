# Documentation
- Class name: WAS_Prompt_Styles_Selector
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Prompt_Styles_Selector node is designed to manage and retrieve styles for text prompts. It plays a key role in loading predefined styles, which are essential for generating contextually relevant and stylistically consistent text output.

# Input types
## Required
- style
    - The 'style' parameter is crucial for determining which style configuration to load. It influences the node's operation by specifying the particular style to apply to the text prompt from the available styles.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- positive_string
    - The 'positive_string' output provides the positive prompt associated with the selected style, which is essential for guiding the text generation process in the desired direction.
    - Comfy dtype: str
    - Python dtype: str
- negative_string
    - The 'negative_string' output provides the negative prompt corresponding to the selected style, used to refine text generation by suppressing unwanted elements.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Prompt_Styles_Selector:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        style_list = []
        if os.path.exists(STYLES_PATH):
            with open(STYLES_PATH, 'r') as f:
                if len(f.readlines()) != 0:
                    f.seek(0)
                    data = f.read()
                    styles = json.loads(data)
                    for style in styles.keys():
                        style_list.append(style)
        if not style_list:
            style_list.append('None')
        return {'required': {'style': (style_list,)}}
    RETURN_TYPES = (TEXT_TYPE, TEXT_TYPE)
    RETURN_NAMES = ('positive_string', 'negative_string')
    FUNCTION = 'load_style'
    CATEGORY = 'WAS Suite/Text'

    def load_style(self, style):
        styles = {}
        if os.path.exists(STYLES_PATH):
            with open(STYLES_PATH, 'r') as data:
                styles = json.load(data)
        else:
            cstr(f'The styles file does not exist at `{STYLES_PATH}`. Unable to load styles! Have you imported your AUTOMATIC1111 WebUI styles?').error.print()
        if styles and style != None or style != 'None':
            prompt = styles[style]['prompt']
            negative_prompt = styles[style]['negative_prompt']
        else:
            prompt = ''
            negative_prompt = ''
        return (prompt, negative_prompt)
```