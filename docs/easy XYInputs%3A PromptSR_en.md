
# Documentation
- Class name: easy XYInputs: PromptSR
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PromptSR node is specifically designed for processing text prompts, adjusting or generating new prompts by specifying sentiment polarity (positive or negative). It leverages search text, replacement text, and conditions to dynamically create or modify prompts, aiming for a more targeted and nuanced approach to prompt engineering.

# Input types
## Required
- target_prompt
    - Determines the sentiment direction for prompt adjustment or generation, influencing output results toward positive or negative sentiment.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- search_txt
    - Text used for searching within prompts, enabling specific topics or content to be targeted for optimization or generation.
    - Comfy dtype: STRING
    - Python dtype: str
- replace_all_text
    - Boolean flag indicating whether all occurrences of the search text in the prompt should be replaced.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- replace_count
    - Specifies the number of replacements to perform, allowing controlled modifications to the prompt.
    - Comfy dtype: INT
    - Python dtype: int
- replace_i
    - Dynamic replacement text input, where 'i' can range from 1 to the value specified by 'replace_count', facilitating specific text replacements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- X or Y
    - Generates a prompt classified as 'X' or 'Y' based on the sentiment direction specified by the target prompt, with detailed modifications reflecting input conditions.
    - Comfy dtype: X_Y
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_PromptSR:

    @classmethod
    def INPUT_TYPES(cls):
        inputs = {
            "required": {
                "target_prompt": (["positive", "negative"],),
                "search_txt": ("STRING", {"default": "", "multiline": False}),
                "replace_all_text": ("BOOLEAN", {"default": False}),
                "replace_count": ("INT", {"default": 3, "min": 1, "max": 30 - 1}),
            }
        }

        # Dynamically add replace_X inputs
        for i in range(1, 30):
            replace_key = f"replace_{i}"
            inputs["required"][replace_key] = ("STRING", {"default": "", "multiline": False, "placeholder": replace_key})

        return inputs

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, target_prompt, search_txt, replace_all_text, replace_count, **kwargs):
        axis = None

        if target_prompt == "positive":
            axis = "advanced: Positive Prompt S/R"
        elif target_prompt == "negative":
            axis = "advanced: Negative Prompt S/R"

        # Create base entry
        values = [(search_txt, None, replace_all_text)]

        if replace_count > 0:
            # Append additional entries based on replace_count
            values.extend([(search_txt, kwargs.get(f"replace_{i+1}"), replace_all_text) for i in range(replace_count)])
        return ({"axis": axis, "values": values},) if values is not None else (None,)

```
