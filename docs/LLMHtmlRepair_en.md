
# Documentation
- Class name: LLMHtmlRepair
- Category: SALT/Language Toolkit/Tools/HTML
- Output node: False
- Repo Ref: https://github.com/saltlang/salt-ComfyUI

The LLMHtmlRepair node uses a language model to analyze and fix malformed HTML content, ensuring the output is well-structured and valid HTML without any data loss.

# Input types
## Required
- llm_model
    - Specify the language model used for fixing HTML. It is crucial for understanding the input and generating the corrected HTML.
    - Comfy dtype: LLM_MODEL
    - Python dtype: Dict[str, Any]
- text_input
    - The malformed HTML content that needs fixing. It is the main input for the correction process.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- extra_directions
    - Optional additional instructions to guide the language model for a more specific fixing process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- html_output
    - The fixed HTML content, well-structured and valid, ensuring no data is missed.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LLMHtmlRepair:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "llm_model": ("LLM_MODEL",),
                "text_input": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "Malformed HTML..."}),
            },
            "optional": {
                "extra_directions": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "Extra directions for the LLM to follow..."}),
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("html_output",)

    FUNCTION = "repair_html"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Tools/HTML"

    def repair_html(self, llm_model, text_input, extra_directions=""):
        prompt = (
            f"{text_input}\n\n###\n\n"
            "Given the above malformed HTML, please inspect it and repair it so that it's valid HTML, without changing or losing any data if possible."
            f"{extra_directions}\n\n"
            "Please ensure the HTML output is well-structured, valid,, and does not omit any data."
        )
        
        response = llm_model['llm'].complete(prompt)
        
        return (response.text,)

```
