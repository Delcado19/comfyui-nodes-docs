
# Documentation
- Class name: LLMOpenAIModel
- Category: SALT/Language Toolkit/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMOpenAIModel node is designed to simplify the integration and use of OpenAI language models. It provides a convenient interface for loading and embedding models, suitable for various applications such as text generation and analysis. By abstracting the complexity of direct interaction with the OpenAI API, the node offers a streamlined interface for embedding and model management.

# Input types
## Required
- model
    - Specifies the OpenAI model to load. This choice determines the capabilities and performance of the language model used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- api_key
    - The API key used to authenticate requests to the OpenAI service. It ensures secure access to model loading functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- embedding_model
    - Defines a specific embedding model to use alongside the primary language model, enhancing its functionality with additional text embedding capabilities.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- multimodal
    - A boolean flag indicating whether the model to be loaded should support multimodal input, allowing a wider range of input types beyond text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- llm_model
    - Returns the loaded primary language model, including its configuration and capabilities, ready for use in various applications.
    - Comfy dtype: LLM_MODEL
    - Python dtype: Dict[str, Any]
- embed_model_only
    - Provides the separately loaded embedding model, detailing its specific capabilities and how it complements the primary language model.
    - Comfy dtype: LLM_EMBED_MODEL
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
