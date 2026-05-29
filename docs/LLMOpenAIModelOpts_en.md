
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
