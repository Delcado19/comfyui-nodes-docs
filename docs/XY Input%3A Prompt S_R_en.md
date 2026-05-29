
# Documentation
- Class name: XY Input: Prompt S_R
- Category: Efficiency Nodes/XY Inputs
- Output node: False

XY Input: The Prompt S/R node aims to improve prompt processing efficiency by implementing search and replace functionality within prompts. It dynamically adjusts prompt content based on specified search and replace criteria, thereby optimizing text generation or improvement. The node flexibly modifies text input, offering users more precise and customized prompt processing solutions.

# Input types
## Required
- target_prompt
- Specify whether the prompt to be modified is positive or negative, directly affecting the type of modification applied to the text. This choice determines the node’s operational goal and effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- search_txt
- The text string to search for within the prompt, serving as the basis for the replace operation. This input determines which parts of the prompt will be identified and potentially replaced.
    - Comfy dtype: STRING
    - Python dtype: str
- replace_count
- The number of times the search text should be replaced, affecting the scope of modification. This parameter controls the frequency of the replace operation, thereby influencing the final output.
    - Comfy dtype: INT
    - Python dtype: int
- replace_i
- Dynamic input representing the replacement text for each occurrence of the search text, allowing different modifications for multiple instances. This flexibility lets users apply multiple replacement strategies within the same prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- X or Y
- The output is the modified prompt text, reflecting the specified positive or negative changes based on input criteria. This output contains the results of all applied search and replace operations, providing an optimized prompt for subsequent processing.
    - Comfy dtype: XY
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_PromptSR:

    @classmethod
    def INPUT_TYPES(cls):
        inputs = {
            "required": {
                "target_prompt": (["positive", "negative"],),
                "search_txt": ("STRING", {"default": "", "multiline": False}),
                "replace_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM-1}),
            }
        }

        # Dynamically add replace_X inputs
        for i in range(1, XYPLOT_LIM):
            replace_key = f"replace_{i}"
            inputs["required"][replace_key] = ("STRING", {"default": "", "multiline": False})

        return inputs

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, target_prompt, search_txt, replace_count, **kwargs):
        if search_txt == "":
            return (None,)

        if target_prompt == "positive":
            xy_type = "Positive Prompt S/R"
        elif target_prompt == "negative":
            xy_type = "Negative Prompt S/R"

        # Create base entry
        xy_values = [(search_txt, None)]

        if replace_count > 0:
            # Append additional entries based on replace_count
            xy_values.extend([(search_txt, kwargs.get(f"replace_{i+1}")) for i in range(replace_count)])

        return ((xy_type, xy_values),)

```
