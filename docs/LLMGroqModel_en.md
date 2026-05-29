
# Documentation
- Class name: `LLMGroqModel`
- Category: `SALT/Language Toolkit/Loaders`
- Output node: `False`

The LLMGroqModel node is designed to interface with the Groq platform for loading and managing language models. It encapsulates the functionality to initialize language models and their corresponding embedding models, providing a streamlined process for integrating Groq's AI capabilities into various applications.

# Input types
## Required
- **`model`**
    - Specifies the name of the language model to load. This parameter is critical for determining which specific model on the Groq platform will be used during operations.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`groq_api_key`**
    - The API key used for authentication on the Groq platform. This key securely accesses Groq's services and is essential for the node's operation.
    - Comfy dtype: `STRING`
    - Python dtype: `str`
- **`embedding_model`**
    - Defines the name of the embedding model used alongside the language model. This parameter is important for tasks requiring semantic understanding of text, such as similarity search or text classification.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
## Optional
- **`openai_api_key`**
    - An optional API key for OpenAI services, used when the embedding model is based on OpenAI technology.
    - Comfy dtype: `STRING`
    - Python dtype: `str`

# Output types
- **`llm_model`**
    - Returns the initialized language model, including its configuration and state, ready for direct use in various applications.
    - Comfy dtype: `LLM_MODEL`
    - Python dtype: `Dict[str, Any]`
- **`embed_model_only`**
    - Provides the initialized embedding model separately, including its name, for tasks requiring semantic text analysis.
    - Comfy dtype: `LLM_EMBED_MODEL`
    - Python dtype: `Dict[str, Any]`


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMGroq:
    """
    @Documentation: https://docs.llamaindex.ai/en/stable/api_reference/llms/groq/
    """
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model": (["llama3-8b-8192", "llama3-70b-8192", "mixtral-8x7b-32768", "gemma-7b-it"],),
                "groq_api_key": ("STRING", {
                    "multiline": False,
                    "dynamicPrompts": False,
                    "default": os.environ.get("GROQ_API_KEY", "")
                }),
                "embedding_model": (
                    sorted([x.value for x in OpenAIEmbeddingModelType]),
                    {"default": "text-embedding-ada-002"},
                ),
            },
            "optional": {
                "openai_api_key": ("STRING", {
                    "multiline": False,
                    "dynamicPrompts": False,
                    "default": os.environ.get("OPENAI_API_KEY", "")
                }),
            }
        }

    RETURN_TYPES = ("LLM_MODEL", "LLM_EMBED_MODEL")
    RETURN_NAMES = ("llm_model", "embed_model_only")

    FUNCTION = "load_model"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Loaders"

    def load_model(self, model: str, groq_api_key: str, embedding_model:str, openai_api_key:str = None) -> Dict[str, Any]:
        llm = Groq(model=model, api_key=groq_api_key)
        embed_model = OpenAIEmbedding(model_name=embedding_model, api_key=openai_api_key,)
        return ({"llm": llm, "llm_name": model, "embed_model": embed_model, "embed_name": embedding_model}, {"embed_model": embed_model, "embed_name": embedding_model})

```
