
# Documentation
- Class name: AV_OpenAIApi
- Category: ArtVenture/LLM
- Output node: False

The AV_OpenAIApi node is designed to simplify the interaction process with the OpenAI API, allowing users to easily create and manage API calls for various language model tasks. This node provides a streamlined interface to access OpenAI's language models, abstracting away the complexity of direct API communication.

# Input types
## Required
- openai_api_key
    - The OpenAI API key is essential for authenticating to OpenAI services; it enables the node to perform API calls. Without a valid API key, the node cannot access OpenAI's services.
    - Comfy dtype: STRING
    - Python dtype: str
- endpoint
    - The API endpoint URL specifies the base address for OpenAI API calls. The default points to OpenAI's standard API endpoint. Users can modify this endpoint as needed, for example, to use a custom or proxy server.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- llm_api
    - Returns a configured instance for interacting with OpenAI's API. This instance encapsulates all the necessary details for making language model requests, simplifying subsequent API call processes.
    - Comfy dtype: LLM_API
    - Python dtype: Union[OpenAIApi, ClaudeApi]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class OpenAIApiNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "openai_api_key": ("STRING", {"multiline": False}),
                "endpoint": ("STRING", {"multiline": False, "default": "https://api.openai.com/v1"}),
            },
        }

    RETURN_TYPES = ("LLM_API",)
    FUNCTION = "create_api"
    CATEGORY = "ArtVenture/LLM"

    def create_api(self, openai_api_key, endpoint):
        if not openai_api_key or openai_api_key == "":
            openai_api_key = os.environ.get("OPENAI_API_KEY")
        if not openai_api_key:
            raise Exception("OpenAI API key is required.")

        return (OpenAIApi(api_key=openai_api_key, endpoint=endpoint),)

```
