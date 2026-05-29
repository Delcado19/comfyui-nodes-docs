
# Documentation
- Class name: LLMComplete
- Category: SALT/Language Toolkit/Querying
- Output node: False

The LLMComplete node is designed to generate text completions using a specified language model based on a given prompt. It abstracts the complexity of querying language models, allowing easy integration into larger systems requiring natural language processing capabilities.

# Input types
## Required
- llm_model
    - Specifies the language model used for generating text completions. This parameter is critical as it determines the linguistic and knowledge capabilities of the generated text.
    - Comfy dtype: LLM_MODEL
    - Python dtype: Dict[str, Any]
- prompt
    - The language model generates completions based on this input text prompt. This parameter is essential for guiding the model's output toward the desired context or question.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- completion
    - The text completion generated based on the input prompt and the specified language model.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LLMComplete:
    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "llm_model": ("LLM_MODEL", ),
                "prompt": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "The circumference of the Earth is"}),
            },
            "optional": {
                #"image_documents": ("DOCUMENT",)
            }
        }

    RETURN_TYPES = ("STRING", )
    RETURN_NAMES = ("completion", )

    FUNCTION = "complete"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Querying"

    def complete(self, llm_model:Dict[str, Any], prompt:str, documents:List[Any] = None) -> str:
        if not documents:
            response = llm_model['llm'].complete(prompt)
        else:
            documents_images = [doc for doc in documents if isinstance(doc, ImageDocument)]
            response = llm_model['llm'].complete(prompt, image_documents=documents_images)
        pprint(response, indent=4)
        return (response.text, )

```
