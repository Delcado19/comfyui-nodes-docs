# Documentation
- Class name: ClaudeNode
- Category: partner/text/Anthropic
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate text responses with Anthropic's Claude models. Provide a text prompt and optionally one or more images for multimodal context.

# Input types
## Required
- prompt
    - Text input to the model.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The Claude model used to generate the response.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
- images
    - Optional image(s) to use as context for the model. Up to 20 images.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
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
