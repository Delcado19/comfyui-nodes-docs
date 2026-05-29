# Documentation
- Class name: CR_PromptText
- Category: Comfyroll/Essential/Core
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_PromptText node aims to simplify the process of obtaining user input through a prompt dialog. It is a fundamental component in interactive applications and is critical for guiding application behavior. The main function of this node is to present a prompt to the user and return the input along with a URL for accessing additional help, enhancing the user experience by providing contextual assistance.

# Input types
## Required
- prompt
    - The parameter 'prompt' is essential for defining the query or statement displayed to the user. It sets the context for the user's input and is critical to the node's operation, as it directly influences the interaction with the user.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The output parameter 'prompt' represents the user's response to the initial query. It is important because it captures the user's input, which can then be further processed by the application.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The output parameter 'show_help' provides a URL linking to a wiki page where the user can find more information or help related to the prompt. This is particularly useful for guiding users through complex or unfamiliar tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_PromptText:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt': ('STRING', {'default': 'prompt', 'multiline': True})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('prompt', 'show_help')
    FUNCTION = 'get_value'
    CATEGORY = icons.get('Comfyroll/Essential/Core')

    def get_value(self, prompt):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Core-Nodes#cr-prompt-text'
        return (prompt, show_help)
```