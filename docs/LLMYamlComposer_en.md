
# Documentation
- Class name: LLMYamlComposer
- Category: SALT/Language Toolkit/Tools/YAML
- Output node: False

The LLMYamlComposer node uses a specified model and any additional instructions to generate a YAML document from given text input. It abstracts YAML composition complexity, leveraging a language model to ensure correct and comprehensive output.

# Input types
## Required
- llm_model
    - Specifies the language model used to generate the YAML document. It plays a key role in interpreting the input text and classifiers to produce well‑structured YAML output.
    - Comfy dtype: LLM_MODEL
    - Python dtype: Dict[str, Any]
- text_input
    - The primary text input for generating the YAML document. This input forms the basis of the content that will be structured into YAML format.
    - Comfy dtype: STRING
    - Python dtype: str
- classifier_list
    - A comma‑separated list of classifiers that guide the language model in structuring the input text into a YAML document. These classifiers help categorize and organize the data more effectively.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_directions
    - Additional instructions that further guide the language model in generating the YAML document. This allows for more customized and specific YAML output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- yaml_output
    - The structured and formatted YAML document generated based on the input text, classifiers, and any additional instructions provided.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMYamlComposer:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "llm_model": ("LLM_MODEL",),
                "text_input": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "Data..."}),
                "classifier_list": ("STRING", {"multiline": False, "dynamicPrompts": False}),
            },
            "optional": {
                "extra_directions": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "Extra directions for the LLM to follow..."}),
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("yaml_output",)

    FUNCTION = "compose_yaml"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Tools/YAML"

    def compose_yaml(self, llm_model, text_input, classifier_list, extra_directions=""):
        classifier_list = [item.strip() for item in classifier_list.split(",") if item.strip()]
        prompt = (
            f"{text_input}\n\n###\n\n"
            "Given the above text, create a valid YAML document utilizing *all* of the data; "
            f"using the following classifiers: {classifier_list}.\n\n"
            f"{extra_directions}\n\n"
            "Please ensure the YAML output is properly formatted, and does not omit any data."
        )
        
        response = llm_model['llm'].complete(prompt)
        
        return (response.text,)

```
