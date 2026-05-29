# Documentation
- Class name: CR_GetParameterFromPrompt
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_GetParameterFromPrompt node aims to extract specific parameters from a given prompt string. It searches for the specified search string in the prompt and attempts to parse the subsequent value when found. This node is particularly suitable for handling configuration settings or parameters embedded in text strings, providing a flexible way to manage and retrieve information.

# Input types
## Required
- prompt
    - The prompt parameter is a string containing the text that the node will search and extract parameters from. It is essential for the node's operation as it defines the context and source of the data to be parsed.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- search_string
    - The search_string parameter defines the specific keyword or pattern the node will look for in the prompt. It plays a key role in identifying the parameter to extract, allowing targeted data retrieval.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The modified prompt, with the identified parameter and its value removed, allowing output of a clean text without the searched parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- text
    - The extracted value associated with the search string, which can be a string, number, or boolean, depending on the format found in the prompt.
    - Comfy dtype: STRING
    - Python dtype: Union[str, int, float, bool]
- float
    - If the extracted value is numeric, it is converted to a float for further numerical operations or analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- boolean
    - The boolean representation of the extracted value, providing a direct true or false interpretation based on what was found.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - A URL link to the node documentation or help page, providing users with additional information or guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_GetParameterFromPrompt:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'prompt': ('STRING', {'multiline': True, 'default': 'prompt', 'forceInput': True}), 'search_string': ('STRING', {'multiline': False, 'default': '!findme'})}}
    RETURN_TYPES = ('STRING', any_type, 'FLOAT', 'BOOLEAN', 'STRING')
    RETURN_NAMES = ('prompt', 'text', 'float', 'boolean', 'show_help')
    FUNCTION = 'get_string'
    CATEGORY = icons.get('Comfyroll/Utils/Other')

    def get_string(self, prompt, search_string):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-find-string-in-prompt'
        return_string = ''
        return_value = 0
        return_boolean = False
        return_prompt = prompt
        index = prompt.find(search_string)
        if index != -1:
            if prompt[index + len(search_string)] == '=':
                if prompt[index + len(search_string) + 1] == '"':
                    start_quote = index + len(search_string) + 2
                    end_quote = prompt.find('"', start_quote + 1)
                    if end_quote != -1:
                        return_string = prompt[start_quote:end_quote]
                        print(return_string)
                else:
                    space_index = prompt.find(' ', index + len(search_string))
                    if space_index != -1:
                        return_string = prompt[index + len(search_string):space_index]
                    else:
                        return_string = prompt[index + len(search_string):]
            else:
                return_string = search_string[1:]
        if return_string == '':
            return (return_prompt, return_string, return_value, return_boolean, show_help)
        if return_string.startswith('='):
            return_string = return_string[1:]
        return_boolean = return_string.lower() == 'true'
        try:
            return_value = int(return_string)
        except ValueError:
            try:
                return_value = float(return_string)
            except ValueError:
                return_value = 0
        remove_string = ' ' + search_string + '=' + return_string
        return_prompt = prompt.replace(remove_string, '')
        return (return_prompt, return_string, return_value, return_boolean, show_help)
```