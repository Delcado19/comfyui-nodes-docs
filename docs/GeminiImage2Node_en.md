# Documentation
- Class name: GeminiImage2Node
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
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - When the seed is fixed to a specific value, the model makes a best effort to provide the same response for repeated requests. Deterministic output isn't guaranteed. Also, changing the model or parameter settings, such as the temperature, can cause variations in the response even when you use the same seed value. By default, a random seed value is used.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - If set to 'auto', matches your input image's aspect ratio; if no image is provided, a 16:9 square is usually generated.
    - Comfy dtype: COMBO
    - Python dtype: object
- resolution
    - Target output resolution. For 2K/4K the native Gemini upscaler is used.
    - Comfy dtype: COMBO
    - Python dtype: object
- response_modalities
    - Choose 'IMAGE' for image-only output, or 'IMAGE+TEXT' to return both the generated image and a text response.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- images
    - Optional reference image(s). To include multiple images, use the Batch Images node (up to 14).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- files
    - Optional file(s) to use as context for the model. Accepts inputs from the Gemini Generate Content Input Files node.
    - Comfy dtype: GEMINI_INPUT_FILES
    - Python dtype: object
- system_prompt
    - Foundational instructions that dictate an AI's behavior.
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
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
