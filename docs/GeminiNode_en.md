# Documentation
- Class name: GeminiNode
- Category: partner/text/Gemini
- Output node: False
- Repo Ref: https://github.com/if-ai/ComfyUI-IF_Gemini

Generate text responses with Google's Gemini AI model. You can provide multiple types of inputs (text, images, audio, video) as context for generating more relevant and meaningful responses.

# Input types
## Required
- prompt
    - Text inputs to the model, used to generate a response. You can include detailed instructions, questions, or context for the model.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The Gemini model to use for generating responses.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - When seed is fixed to a specific value, the model makes a best effort to provide the same response for repeated requests. Deterministic output isn't guaranteed. Also, changing the model or parameter settings, such as the temperature, can cause variations in the response even when you use the same seed value. By default, a random seed value is used.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- images
    - Optional image(s) to use as context for the model. To include multiple images, you can use the Batch Images node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - Optional audio to use as context for the model.
    - Comfy dtype: AUDIO
    - Python dtype: object
- video
    - Optional video to use as context for the model.
    - Comfy dtype: VIDEO
    - Python dtype: object
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
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/if-ai/ComfyUI-IF_Gemini)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
