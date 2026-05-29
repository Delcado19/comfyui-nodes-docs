# Documentation
- Class name: SeargeTextInputV2
- Category: UI_PROMPTING
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node enables the system to collect text input from users, supporting interactive communication within the system. It is designed to ask questions of users and capture their responses, serving as a fundamental component for user participation and data collection.

# Input types
## Required
- prompt
    - Prompt parameters are critical because they define the question or statement presented to the user, guiding their input. They are the primary means of communication between the node and the user, affecting the nature and quality of the responses collected.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt_text
    - Output represents the user's response to the prompt, providing valuable information for further processing or analysis. It directly reflects user input, marking a successful interaction.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeTextInputV2:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt': ('STRING', {'default': '', 'multiline': True})}}
    RETURN_TYPES = ('SRG_PROMPT_TEXT',)
    RETURN_NAMES = ('prompt_text',)
    FUNCTION = 'get_value'
    CATEGORY = UI.CATEGORY_UI_PROMPTING

    def get_value(self, prompt):
        return (prompt,)
```