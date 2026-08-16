# Documentation
- Class name: OpenRouterLLMNode
- Category: partner/text/OpenRouter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate text responses through OpenRouter. Routes to a curated set of popular models from Anthropic (Claude), OpenAI (GPT), Google (Gemini), xAI (Grok), DeepSeek, Qwen, Mistral, Z.AI (GLM), Moonshot (Kimi), and Perplexity Sonar.

# Input types
## Required
- prompt
    - Text input to the model.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The OpenRouter model used to generate the response.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - Seed for sampling. Set to 0 to omit. Most models treat this as a hint only.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- system_prompt
    - Foundational instructions that dictate the model's behavior.
    - Comfy dtype: STRING
    - Python dtype: str
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
