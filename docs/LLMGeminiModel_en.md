
# Documentation
- Class name: LLMGeminiModel
- Category: SALT/Language Toolkit/Loaders
- Output node: False

The LLMGeminiModel node loads and manages language models from the Gemini series, providing the ability to initialize them with specific configurations and API keys. It abstracts the complexity of setting up and using Gemini language models for various natural language processing tasks.

# Input types
## Required
- model_name
    - Specify the name of the Gemini model to load. This choice determines the capabilities and characteristics of the language model to be used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- api_key
    - The API key required to access Gemini models. It is essential for authentication and authorization when using the model.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - A dictionary containing the loaded language model, its name, and the associated embedding model and its name. This output facilitates further processing and usage of the model in various tasks.
    - Comfy dtype: LLM_MODEL
    - Python dtype: Dict[str, Union[Gemini, str, HuggingFaceEmbedding]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMGemini:
    """
    @Documentation: https://docs.llamaindex.ai/en/stable/api_reference/llms/gemini/
    @Source: 
    """
    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model_name": ([
                    "models/gemini-pro",
                    "models/gemini-1.5-pro-latest",
                    "models/gemini-pro-vision",
                    "models/gemini-1.0-pro",					
                    "models/gemini-ultra",
                ],),
                "api_key": ("STRING", {
                    "multiline": False, 
                    "dynamicPrompts": False, 
                    "default": ""
                }),
            },
        }

    RETURN_TYPES = ("LLM_MODEL", )
    RETURN_NAMES = ("model", )

    FUNCTION = "load_model"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Loaders"

    def load_model(self, model_name:str, api_key:str) -> Dict[str, Any]:
        llm = Gemini(model_name=model_name, api_key=api_key)
        embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
        return ({"llm":llm, "llm_name": model_name, "embed_model": embed_model, "embed_name": "bge-small-en-v1.5"},)

```
