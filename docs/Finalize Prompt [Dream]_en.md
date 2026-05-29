
# Documentation
- Class name: Finalize Prompt [Dream]
- Category: ✨ Dream/☯ conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Finalize Prompt node completes the prompt construction process. It applies adjustments and limits to ensure all prompt components stay within specified ranges. This node refines and polishes the prompt text for direct use in content generation.

# Input types
## Required
- partial_prompt
    - The initial or intermediate state of the prompt being finalized. This is critical for determining the basic content and structure of the final prompt.
    - Comfy dtype: PARTIAL_PROMPT
    - Python dtype: PartialPrompt
- adjustment
    - Specifies the adjustment method applied to prompt components, such as scaling by absolute maximum or sum, or keeping the original state. This affects the final weight distribution in the prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clamp
    - The maximum allowed weight for any single prompt component, ensuring no single part dominates excessively.
    - Comfy dtype: FLOAT
    - Python dtype: float
- adjustment_reference
    - A reference value used to balance prompt component weights during scaling adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The final prompt with positive weights, usable for generating content matching desired attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The final prompt with negative weights, indicating content to avoid or minimize during generation.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamPromptFinalizer:
    NODE_NAME = "Finalize Prompt"
    ICON = "🗫"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "partial_prompt": (PartialPrompt.ID,),
                "adjustment": (["raw", "by_abs_max", "by_abs_sum"],),
                "clamp": ("FLOAT", {"default": 2.0, "min": 0.1, "step": 0.1}),
                "adjustment_reference": ("FLOAT", {"default": 1.0, "min": 0.1}),
            },
        }

    CATEGORY = NodeCategories.CONDITIONING
    RETURN_TYPES = ("STRING", "STRING")
    RETURN_NAMES = ("positive", "negative")
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def result(self, partial_prompt: PartialPrompt, adjustment, adjustment_reference, clamp):
        if adjustment == "raw" or partial_prompt.is_empty():
            return partial_prompt.finalize(clamp)
        elif adjustment == "by_abs_sum":
            f = adjustment_reference / partial_prompt.abs_sum()
            return partial_prompt.scaled_by(f).finalize(clamp)
        else:
            f = adjustment_reference / partial_prompt.abs_max()
            return partial_prompt.scaled_by(f).finalize(clamp)

```
