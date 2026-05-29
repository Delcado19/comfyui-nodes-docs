
# Documentation
- Class name: Build Prompt [Dream]
- Category: ✨ Dream/☯ conditioning
- Output node: False

The Build Prompt node constructs and weights text prompts for generation tasks, allowing dynamic adjustment of prompt importance via weights.

# Input types
## Required
- added_prompt
- Specify the text to add to the prompt, using a weight parameter to adjust its importance dynamically.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
- Determine the weight of the added prompt text, affecting its importance in the resulting prompt combination.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional
- partial_prompt
- An optional initial prompt structure can be modified by adding text with specified weights. If none is provided, a new prompt structure initializes.
    - Comfy dtype: PARTIAL_PROMPT
    - Python dtype: PartialPrompt

# Output types
- partial_prompt
- The modified or newly created prompt structure contains the added text with the specified weights.
    - Comfy dtype: PARTIAL_PROMPT
    - Python dtype: PartialPrompt


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamWeightedPromptBuilder:
    NODE_NAME = "Build Prompt"
    ICON = "⚖"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "optional": {
                "partial_prompt": (PartialPrompt.ID,)
            },
            "required": {
                "added_prompt": ("STRING", {"default": "", "multiline": True}),
                "weight": ("FLOAT", {"default": 1.0}),
            },
        }

    CATEGORY = NodeCategories.CONDITIONING
    RETURN_TYPES = (PartialPrompt.ID,)
    RETURN_NAMES = ("partial_prompt",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def result(self, added_prompt, weight, **args):
        input = args.get("partial_prompt", PartialPrompt())
        p = input.add(added_prompt, weight)
        return (p,)

```
