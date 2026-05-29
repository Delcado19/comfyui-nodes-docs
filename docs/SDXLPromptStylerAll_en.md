# Documentation
- Class name: SDXLPromptStylerAll
- Category: Style Prompts
- Output node: False
- Repo Ref: https://github.com/wolfden/ComfyUi_PromptStylers

This node aims to enhance the presentation of prompts by applying various style templates, ensuring the prompts are engaging and contextually appropriate.

# Input types
## Required
- text_positive
    - Positive text input is crucial as it sets a positive tone for the prompt. It is the foundational content that will be styled and presented to the user.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input complements the positive text by providing a contrasting perspective. This is essential for creating a balanced and comprehensive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style parameter is critical as it determines the aesthetic and structural formatting applied to the prompt, significantly influencing user perception and engagement.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- log_prompt
    - The logging option allows recording details of prompt generation, which is useful for debugging and improving the node's functionality over time.
    - Comfy dtype: COMBO
    - Python dtype: str
- auto_select_style
    - When enabled, it automates the style selection process, ensuring diverse styles are applied to the prompt, enhancing overall variety and appeal.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- auto_refresh
    - Activating this parameter triggers a node refresh and generates a new prompt, ensuring content remains fresh and engaging for the user.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- positive_prompt_text_g
    - The output provides positively styled prompt text, already formatted to effectively engage and guide the user.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_g
    - The output provides negatively styled prompt text, offering a contrasting perspective to balance the overall message.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SDXLPromptStylerAll:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        p = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(p, 'sdxl_styles_all.json')
        cls.json_data = read_json_file(file_path)
        styles = read_sdxl_styles(cls.json_data)
        return {'required': {'text_positive': ('STRING', {'default': '', 'multiline': True}), 'text_negative': ('STRING', {'default': '', 'multiline': True}), 'style': (styles,), 'log_prompt': (['No', 'Yes'], {'default': 'No'})}, 'optional': {'auto_select_style': ('BOOLEAN', {'default': False}), 'auto_refresh': ('BOOLEAN', {'default': False})}}

    @classmethod
    def IS_CHANGED(cls, text, autorefresh):
        if auto_refresh == 'True':
            return float('NaN')

    def get_prompt(self, text: str, autorefresh: str) -> tuple[str]:
        prompt = self.generate_prompt(text)
        print(f'Prompt: {prompt}')
        return (prompt,)

    @abstractmethod
    def generate_prompt(self, text: str) -> str:
        ...
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('positive_prompt_text_g', 'negative_prompt_text_g')
    FUNCTION = 'prompt_styler'
    CATEGORY = 'Style Prompts'

    def prompt_styler(self, text_positive, text_negative, style, log_prompt, auto_select_style=False, auto_refresh=False):
        if auto_select_style or auto_refresh:
            style = random.choice([template['name'] for template in self.json_data])
        (positive_prompt, negative_prompt) = read_sdxl_templates_replace_and_combine(self.json_data, style, text_positive, text_negative)
        if log_prompt == 'Yes':
            print(f'style: {style}')
            print(f'text_positive: {text_positive}')
            print(f'text_negative: {text_negative}')
            print(f'positive_prompt: {positive_prompt}')
            print(f'negative_prompt: {negative_prompt}')
        current_time = int(time.time())
        dummy_change = current_time
        return (positive_prompt, negative_prompt, dummy_change)
        dummy_change = current_time
        return (positive_prompt, negative_prompt, dummy_change)
```