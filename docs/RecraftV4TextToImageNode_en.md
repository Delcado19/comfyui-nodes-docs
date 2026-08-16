# Documentation
- Class name: RecraftV4TextToImageNode
- Category: partner/image/Recraft
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates images using Recraft V4 and V4.1 models.

# Input types
## Required
- prompt
    - Prompt for the image generation. Maximum 10,000 characters.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - This input is ignored: negative prompt is not supported by Recraft V4 and V4.1 models.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model to use for generation.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- n
    - The number of images to generate.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed to determine if node should re-run; actual results are nondeterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- recraft_controls
    - Optional additional controls over the generation via the Recraft Controls node.
    - Comfy dtype: RECRAFT_CONTROLS
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
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
