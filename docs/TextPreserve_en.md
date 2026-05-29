# Documentation
- Class name: TextPreserve
- Category: Mikey/Text
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The TextPreserve node is designed to process and retain original text while allowing dynamic content replacement. It does this by identifying placeholders in the input text and replacing them with random or designated values, ensuring the integrity of the original message is maintained throughout the conversion process.

# Input types
## Required
- text
    - ‘text’ parameter is the node’s primary input, containing the text to be processed. It is essential because it defines the content that will undergo preservation and replacement. This parameter supports multiple lines, allowing complex and extended text input.
    - Comfy dtype: STRING
    - Python dtype: str
- result_text
    - ‘result_text’ parameter stores the processed text after node execution. It is essential because it contains the final output of the text after all replacement and preservation operations are complete.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- unique_id
    - ‘unique_id’ parameter is used to uniquely identify the node within a workflow. It is optional but can be important for tracking and managing the node’s state and output in a larger system.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: Union[str, None]
- extra_pnginfo
    - ‘extra_pnginfo’ parameter provides additional information that can be used to enhance text processing. It is optional and may contain metadata or other relevant details that affect node operation.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Union[str, None]
- prompt
    - ‘prompt’ parameter provides dynamic hints that guide the text replacement process. It is optional but can significantly influence node behavior by introducing context-specific replacements.
    - Comfy dtype: PROMPT
    - Python dtype: Union[str, None]

# Output types
- text
    - ‘text’ output parameter represents the final processed text after all operations. It is the ultimate representation of the node’s functionality, containing the results of preservation and replacement.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class TextPreserve:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'default': 'Input Text Here', 'dynamicPrompts': False}), 'result_text': ('STRING', {'multiline': True, 'default': 'Result Text Here (will be replaced)'})}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO', 'prompt': 'PROMPT'}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('text',)
    FUNCTION = 'process'
    OUTPUT_NODE = True
    CATEGORY = 'Mikey/Text'

    def process(self, text, result_text, unique_id=None, extra_pnginfo=None, prompt=None):
        random.seed()
        preserve_text = text
        text = search_and_replace(text, extra_pnginfo, prompt)
        wc_re = re.compile('{([^}]+)}')

        def repl(m):
            return random.choice(m.group(1).split('|'))
        for m in wc_re.finditer(text):
            text = text.replace(m.group(0), repl(m))
        prompt.get(str(unique_id))['inputs']['text'] = preserve_text
        for (i, node_dict) in enumerate(extra_pnginfo['workflow']['nodes']):
            if node_dict['id'] == int(unique_id):
                node_dict['widgets_values'] = [preserve_text, text]
                extra_pnginfo['workflow']['nodes'][i] = node_dict
        prompt.get(str(unique_id))['inputs']['result_text'] = text
        return (text,)
```