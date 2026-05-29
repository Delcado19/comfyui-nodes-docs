# Documentation
- Class name: SeargePromptAdapterV2
- Category: UI_PROMPTING
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node helps construct and retrieve prompt data by integrating primary prompts, secondary prompts, style prompts, and their negative counterparts, enabling the generation of diverse prompts for different scenarios.

# Input types
## Optional
- main_prompt
    - Primary prompts are key elements that set the main context or theme for prompt generation. They are crucial in guiding the direction and content of the output.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- secondary_prompt
    - Secondary prompts provide additional information or context to primary prompts, enriching the complexity and depth of the generated content.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- style_prompt
    - Style prompts are used to define the specific tone or manner in which the content should be presented, adding a creative layer to the output.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- negative_main_prompt
    - Negative primary prompts balance the primary prompts by introducing opposing viewpoints, enhancing the nuance and soundness of the generated content.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- negative_secondary_prompt
    - These prompts supplement negative primary prompts by providing a secondary opposing viewpoint, further diversifying content possibilities.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- negative_style_prompt
    - Negative style prompts introduce an alternative tone or presentation, ensuring the output includes a wider range of style choices.
    - Comfy dtype: SRG_PROMPT_TEXT
    - Python dtype: str
- data
    - Data is the basic input for node operations, which may contain previous prompt results or other relevant information that may affect the generation process.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Output types
- data
    - Output data stream contains structured prompt information, which can be used as input for subsequent processes or for analysis.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargePromptAdapterV2:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'data': ('SRG_DATA_STREAM',), 'main_prompt': ('SRG_PROMPT_TEXT',), 'secondary_prompt': ('SRG_PROMPT_TEXT',), 'style_prompt': ('SRG_PROMPT_TEXT',), 'negative_main_prompt': ('SRG_PROMPT_TEXT',), 'negative_secondary_prompt': ('SRG_PROMPT_TEXT',), 'negative_style_prompt': ('SRG_PROMPT_TEXT',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM', 'SRG_DATA_STREAM')
    RETURN_NAMES = ('data', UI.S_PROMPTS)
    FUNCTION = 'get_value'
    CATEGORY = UI.CATEGORY_UI_PROMPTING

    @staticmethod
    def create_dict(main_prompt=None, secondary_prompt=None, style_prompt=None, negative_main_prompt=None, negative_secondary_prompt=None, negative_style_prompt=None):
        return {UI.F_MAIN_PROMPT: main_prompt, UI.F_SECONDARY_PROMPT: secondary_prompt, UI.F_STYLE_PROMPT: style_prompt, UI.F_NEGATIVE_MAIN_PROMPT: negative_main_prompt, UI.F_NEGATIVE_SECONDARY_PROMPT: negative_secondary_prompt, UI.F_NEGATIVE_STYLE_PROMPT: negative_style_prompt}

    def get_value(self, main_prompt=None, secondary_prompt=None, style_prompt=None, negative_main_prompt=None, negative_secondary_prompt=None, negative_style_prompt=None, data=None):
        if data is None:
            data = {}
        data[UI.S_PROMPTS] = self.create_dict(main_prompt, secondary_prompt, style_prompt, negative_main_prompt, negative_secondary_prompt, negative_style_prompt)
        return (data, data[UI.S_PROMPTS])
```