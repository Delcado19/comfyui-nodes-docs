
# Documentation
- Class name: LLMOpenAIModelOpts
- Category: SALT/Language Toolkit/Loaders/Options
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMOpenAIModelOpts node provides a comprehensive interface for configuring options for various language models, including OpenAI's models. It allows users to fine-tune model parameters such as temperature, token limits, and API retry limits, as well as embedding model settings like batch size and dimensions. The node is designed to offer flexible settings for language model usage to meet the specific needs of text generation and embedding tasks.

# Input types
## Required
- llm_model
    - Unknown parameter, possibly specifying the language model to use.
    - Comfy dtype: LLM_MODEL
    - Python dtype: unknown

## Optional
- model_temperature
    - Specifies the temperature of the language model, affecting the randomness of the output. Lower values produce more deterministic output, while higher values increase creativity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model_max_tokens
    - Defines the maximum number of tokens the language model can generate in a single response, setting a limit on output length.
    - Comfy dtype: INT
    - Python dtype: int
- model_api_max_retries
    - Determines the maximum number of retries when an API call fails, ensuring robustness under poor network conditions.
    - Comfy dtype: INT
    - Python dtype: int
- model_api_timeout
    - Sets the timeout for API calls, ensuring the process does not hang indefinitely.
    - Comfy dtype: INT
    - Python dtype: int
- model_reuse_anyscale_client
    - Indicates whether to reuse the Anyscale client across multiple requests, optimizing resource utilization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- multimodal_max_new_tokens
    - Specifies the maximum new tokens for multimodal input, applicable to models that support multimodal data.
    - Comfy dtype: INT
    - Python dtype: int
- multimodal_image_detail
    - Determines the level of detail for images in multimodal input, with possible values of 'low', 'high', or 'auto', affecting how the model processes visual data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- embed_batch_size
    - Sets the batch size for processing embeddings, affecting performance and resource usage.
    - Comfy dtype: INT
    - Python dtype: int
- embed_dimensions
    - Specifies the dimensions of embeddings, affecting the granularity of vector representations.
    - Comfy dtype: INT
    - Python dtype: int
- embed_api_max_retries
    - Determines the maximum number of retries for embedding API calls, ensuring reliability under poor network conditions.
    - Comfy dtype: INT
    - Python dtype: int
- embed_api_timeout
    - Sets the timeout for embedding API calls, preventing indefinite hanging.
    - Comfy dtype: INT
    - Python dtype: int
- embed_reuse_anyscale_client
    - Indicates whether to reuse the Anyscale client for embedding operations, optimizing resource efficiency.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model_additional_kwargs
    - Allows passing additional keyword arguments to the model, providing extended customization.
    - Comfy dtype: STRING
    - Python dtype: Dict[str, Any]
- embed_additional_kwargs
    - Allows providing additional keyword arguments for embedding operations, offering further customization options.
    - Comfy dtype: STRING
    - Python dtype: Dict[str, Any]
- model_system_prompt
    - Defines a system-level prompt that can be used to guide the model's generation process, providing a way to influence the context or direction of the output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - Contains a dictionary of updated language model and embedding model objects, reflecting the applied configuration options.
    - Comfy dtype: LLM_MODEL
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMOpenAIModelOpts:
    """
    Sets various options for the model, and embedding.
    """
    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "llm_model": ("LLM_MODEL",),
            },
            "optional": {
                "model_temperature": ("FLOAT", {"min": 0, "max": 1.0, "default": DEFAULT_TEMPERATURE, "step": 0.001}),
                "model_max_tokens": ("INT", {"min": 8, "default": 4096}),
                "model_api_max_retries": ("INT", {"min": 1, "max": 12, "default": 3}),
                "model_api_timeout": ("INT", {"min": 8, "max": 120, "default": 60}),
                "model_reuse_anyscale_client": ("BOOLEAN", {"default": True}),
                
                "multimodal_max_new_tokens": ("INT", {"min": 8, "default": 300}),
                "multimodal_image_detail": (["low", "high", "auto"],),

                "embed_batch_size": ("INT", {"min": 8, "default": DEFAULT_EMBED_BATCH_SIZE}),
                "embed_dimensions": ("INT", {"min": 1, "default": DEFAULT_EMBEDDING_DIM}),
                "embed_api_max_retries": ("INT", {"min": 1, "max": 12, "default": 3}),
                "embed_api_timeout": ("INT", {"min": 8, "max": 120, "default": 60}),
                "embed_reuse_anyscale_client": ("BOOLEAN", {"default": True}),
                
                "model_additional_kwargs": ("STRING", {"multiline": True, "dynamicPrompts": False, "default": "", "placeholder": "Additional model kwargs JSON"}),
                "embed_additional_kwargs": ("STRING", {"multiline": True, "dynamicPrompts": False, "default": "", "placeholder": "Additional embed kwargs JSON"}),
                "model_system_prompt": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "System directions, or rules to follow globally across nodes."}),
            }
        }

    RETURN_TYPES = ("LLM_MODEL", )
    RETURN_NAMES = ("model", )

    FUNCTION = "set_options"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Loaders/Options"

    def set_options(self, llm_model:Dict[str, Any], **kwargs) -> Dict[str, Any]:
        llm = llm_model['llm']
        embed = llm_model['embed_model']
        
        # LLM Options
        llm.temperature = kwargs.get("model_temperature", DEFAULT_TEMPERATURE)
        llm.max_retries = kwargs.get("model_api_max_retries", 3)
        llm.reuse_client = kwargs.get("model_reuse_anyscale_client", True)
        llm.additional_kwargs = json.loads(kwargs.get("model_additional_kwargs", {}).strip()) if kwargs.get("model_additional_kwargs", {}).strip() != "" else {} # Default to `None` if empty string
        llm.system_prompt = kwargs.get("model_system_prompt", None)

        # Embed Options
        embed.embed_batch_size = kwargs.get("embed_batch_size", DEFAULT_EMBED_BATCH_SIZE)
        embed.dimensions = kwargs.get("embed_dimensions", DEFAULT_EMBEDDING_DIM) if kwargs.get("embed_dimensions", DEFAULT_EMBEDDING_DIM) > 0 else None # Default to `None` if not above 0
        embed.additional_kwargs = json.loads(kwargs.get("embed_additional_kwargs", {}).strip()) if kwargs.get("embed_additional_kwargs", "").strip() != "" else {} # Default to `None` if empty string
        embed.max_retries = kwargs.get("embed_api_max_retries", 3)
        embed.timeout = kwargs.get("embed_api_timeout", 60)
        embed.reuse_client = kwargs.get("embed_reuse_anyscale_client", True)

        if isinstance(llm, OpenAIMultiModal):
            llm.max_new_tokens = kwargs.get("multimodal_max_new_tokens", 300)
            llm.image_detail = kwargs.get("multimodal_image_detail", "low")
        else:
            llm.max_tokens = kwargs.get("model_max_tokens", 4096)

        llm_model['llm'] = llm
        llm_model['embed_model'] = embed

        return (llm_model,)

```
