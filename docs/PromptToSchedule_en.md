# Documentation
- Class name: PromptToSchedule
- Category: promptcontrol
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

The 'parse' method of the PromptToSchedule node is designed to parse and convert text prompts into a structured schedule format. This method is critical for managing and organizing prompts into a coherent schedule that can be further processed or executed within the system. It abstracts the complexity of parsing, focusing on converting raw text into a usable format.

# Input types
## Required
- text
    - The 'text' parameter is essential for the 'parse' method, as it represents the raw text input that needs to be parsed into a structured schedule. It is the primary input that determines the operation of the node and the result of the parsing process.
    - Comfy dtype: STRING
    - Python dtype: str
- settings
    - The 'settings' parameter is an optional configuration provided to the 'parse' method, used to customize the parsing behavior. It allows fine-tuning the parsing process according to specific requirements or constraints.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Output types
- PROMPT_SCHEDULE
    - The output of the 'parse' method is 'PROMPT_SCHEDULE', which is a structured representation of the input text. This output is important as it lays the foundation for any subsequent operations or analysis that depend on the parsed schedule.
    - Comfy dtype: PROMPT_SCHEDULE
    - Python dtype: PromptSchedule

# Usage tips
- Infra type: CPU

# Source code
```
class PromptToSchedule:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True})}}
    RETURN_TYPES = ('PROMPT_SCHEDULE',)
    CATEGORY = 'promptcontrol'
    FUNCTION = 'parse'

    def parse(self, text, settings=None):
        schedules = parse_prompt_schedules(text)
        return (schedules,)
```