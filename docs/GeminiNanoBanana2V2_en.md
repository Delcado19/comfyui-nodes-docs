# Documentation
- Class name: GeminiNanoBanana2V2
- Category: partner/image/Gemini
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate or edit images synchronously via Google Vertex API.

# Input types
## Required
- prompt
    - Text prompt describing the image to generate or the edits to apply. Include any constraints, styles, or details the model should follow.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - When the seed is fixed to a specific value, the model makes a best effort to provide the same response for repeated requests. Deterministic output isn't guaranteed. Also, changing the model or parameter settings, such as the temperature, can cause variations in the response even when you use the same seed value. By default, a random seed value is used.
    - Comfy dtype: INT
    - Python dtype: int
- response_modalities
    - The response_modalities input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- system_prompt
    - Foundational instructions that dictate an AI's behavior.
    - Comfy dtype: STRING
    - Python dtype: str
- temperature
    - Controls randomness in generation. Lower is more focused/deterministic.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - Nucleus sampling threshold. Lower is more focused, higher more diverse.
    - Comfy dtype: FLOAT
    - Python dtype: float
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
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- thought_image
    - First image from the model's thinking process. Only available with thinking_level HIGH and IMAGE+TEXT modality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
