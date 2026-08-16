# Documentation
- Class name: OpenAIChatConfig
- Category: partner/text/OpenAI
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Allows specifying advanced configuration options for the OpenAI Chat Nodes.

# Input types
## Required
- truncation
    - The truncation strategy to use for the model response. auto: If the context of this response and previous ones exceeds the model's context window size, the model will truncate the response to fit the context window by dropping input items in the middle of the conversation.disabled: If a model response will exceed the context window size for a model, the request will fail with a 400 error
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- max_output_tokens
    - An upper bound for the number of tokens that can be generated for a response, including visible output tokens
    - Comfy dtype: INT
    - Python dtype: int
- instructions
    - Instructions for the model on how to generate the response
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- OPENAI_CHAT_CONFIG
    - The OPENAI_CHAT_CONFIG output is produced by this node.
    - Comfy dtype: OPENAI_CHAT_CONFIG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
