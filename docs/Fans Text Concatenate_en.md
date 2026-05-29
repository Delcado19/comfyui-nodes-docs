
# Documentation
- Class name: Fans Text Concatenate
- Category: utils
- Output node: False

The Fans Text Concatenate node is used to concatenate multiple text inputs into a single string, with the option to add line breaks between each text segment. It allows flexible text manipulation and aggregation, suitable for preparing text data for further processing or display.

# Input types
## Required
- linebreak_addition
    - Determines whether to add a line break between each concatenated text segment. A "true" value inserts a line break, while "false" concatenates the text directly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- prompt
    - The initial text that serves as the starting point of the concatenation process. It acts as the base to which other text is appended.
    - Comfy dtype: STRING
    - Python dtype: str
- text_a
    - The first text to concatenate after the prompt (if a prompt is provided).
    - Comfy dtype: STRING
    - Python dtype: str
- text_b
    - The second text to concatenate after the previous text.
    - Comfy dtype: STRING
    - Python dtype: str
- text_c
    - The third text to concatenate, continuing the text aggregation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- text_d
    - The fourth text in the concatenation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- text_e
    - The fifth text to concatenate, further extending the text string.
    - Comfy dtype: STRING
    - Python dtype: str
- text_f
    - The sixth text to add to the concatenated string.
    - Comfy dtype: STRING
    - Python dtype: str
- text_g
    - The seventh text in the concatenation order.
    - Comfy dtype: STRING
    - Python dtype: str
- text_h
    - The eighth text to concatenate, adding more content to the string.
    - Comfy dtype: STRING
    - Python dtype: str
- text_i
    - The ninth text in the sequence, further extending the concatenated string.
    - Comfy dtype: STRING
    - Python dtype: str
- text_j
    - The tenth and final text to concatenate, completing the text aggregation process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The final concatenated text string, composed of up to ten individual text inputs and optional line breaks.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FansTextConcatenate:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "linebreak_addition": (['false','true'], {"default":"false"} ),
            },
            "optional": {
                "prompt": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_a": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_b": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_c": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_d": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_e": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_f": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_g": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_h": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_i": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
                "text_j": (TEXT_TYPE, {"forceInput": (True if TEXT_TYPE == 'STRING' else False)}),
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "text_concatenate"
    CATEGORY = "utils"

    def text_concatenate(self, prompt=None, text_a=None, text_b=None, text_c=None, text_d=None, text_e=None, text_f=None, text_g=None, text_h=None, text_i=None, text_j=None, linebreak_addition='false'):
        return_text = ''
        
        if prompt:
            return_text = prompt + ("\n" if linebreak_addition == 'true' else '')
        if text_a:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_a
        if text_b:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_b
        if text_c:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_c
        if text_d:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_d
        if text_e:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_e
        if text_f:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_f
        if text_g:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_g
        if text_h:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_h
        if text_i:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_i
        if text_j:
            return_text = return_text + ("\n" if linebreak_addition == 'true' else '') + text_j
        return (return_text, )

```
