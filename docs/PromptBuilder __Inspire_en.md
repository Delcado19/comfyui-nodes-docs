
# Documentation
- Class name: PromptBuilder __Inspire
- Category: InspirePack/Prompt
- Output node: False

The PromptBuilder node facilitates the creation of customized prompts by allowing users to select from multiple categories and presets, and input their own text. This node aims to simplify the process of generating tailored prompts for various applications, thereby enhancing creativity and efficiency in prompt generation.

# Input types
## Required
- category
    - The 'category' parameter allows users to select a prompt category from a predefined list, including custom placeholders. This selection influences the thematic direction of the generated prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- preset
    - The 'preset' parameter enables users to choose a specific preset within the selected category, further refining the content and style of the prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- text
    - The 'text' parameter allows users to input custom text, providing a direct way to influence the content of the generated prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - Returns the custom prompt text as a string, reflecting the user's category, preset, and text inputs.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class PromptBuilder:
    @classmethod
    def INPUT_TYPES(s):
        global prompt_builder_preset

        presets = ["#PRESET"]
        return {"required": {
                        "category": (list(prompt_builder_preset.keys()) + ["#PLACEHOLDER"], ),
                        "preset": (presets, ),
                        "text": ("STRING", {"multiline": True}),
                     },
                }

    RETURN_TYPES = ("STRING", )
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Prompt"

    def doit(self, **kwargs):
        return (kwargs['text'],)

```
