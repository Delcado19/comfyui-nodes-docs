
# Documentation
- Class name: ZipPrompt __Inspire
- Category: InspirePack/Prompt
- Output node: False

The ZipPrompt node combines positive and negative text prompts, along with an optional name, into a single compressed prompt. This feature is essential for organizing and structuring prompt data, aiding further processing or storage, especially within the context of InspirePack prompt management.

# Input types
## Required
- positive
- Positive prompt text, required multiline string input. This text represents the desired attributes or features to emphasize in the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
- Negative prompt text, required multiline string input. This text outlines the attributes or features to minimize or avoid in the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- name_opt
- Optional single-line string input providing a name for the compressed prompt, aiding its identification and organization.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- zipped_prompt
- Output is a tuple containing the positive, negative, and optional name inputs, effectively compressing them into a structured prompt.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: Tuple[str, str, str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ZipPrompt:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "positive": ("STRING", {"forceInput": True, "multiline": True}),
                    "negative": ("STRING", {"forceInput": True, "multiline": True}),
                    },
                "optional": {
                    "name_opt": ("STRING", {"forceInput": True, "multiline": False})
                    }
                }

    RETURN_TYPES = ("ZIPPED_PROMPT",)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Prompt"

    def doit(self, positive, negative, name_opt=""):
        return ((positive, negative, name_opt), )

```
