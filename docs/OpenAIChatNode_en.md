# Documentation
- Class name: OpenAIChatNode
- Category: partner/text/OpenAI
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate text responses from an OpenAI model.

# Input types
## Required
- prompt
    - Text inputs to the model, used to generate a response.
    - Comfy dtype: STRING
    - Python dtype: str
- persist_context
    - This parameter is deprecated and has no effect.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model
    - The model used to generate the response
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- images
    - Optional image(s) to use as context for the model. To include multiple images, you can use the Batch Images node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- files
    - Optional file(s) to use as context for the model. Accepts inputs from the OpenAI Chat Input Files node.
    - Comfy dtype: OPENAI_INPUT_FILES
    - Python dtype: object
- advanced_options
    - Optional configuration for the model. Accepts inputs from the OpenAI Chat Advanced Options node.
    - Comfy dtype: OPENAI_CHAT_CONFIG
    - Python dtype: object
## Hidden
- auth_token_comfy_org
    - The auth_token_comfy_org input is used by this node during execution.
    - Comfy dtype: AUTH_TOKEN_COMFY_ORG
    - Python dtype: object
- api_key_comfy_org
    - The api_key_comfy_org input is used by this node during execution.
    - Comfy dtype: API_KEY_COMFY_ORG
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- comfy_usage_source
    - The comfy_usage_source input is used by this node during execution.
    - Comfy dtype: COMFY_USAGE_SOURCE
    - Python dtype: object

# Output types
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
