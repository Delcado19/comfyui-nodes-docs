# Documentation
- Class name: RecraftTextToVectorNode
- Category: partner/image/Recraft
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates SVG synchronously based on prompt and resolution.

# Input types
## Required
- prompt
    - Prompt for the image generation.
    - Comfy dtype: STRING
    - Python dtype: str
- substyle
    - The substyle input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- size
    - The size of the generated image.
    - Comfy dtype: COMBO
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
- negative_prompt
    - An optional text description of undesired elements on an image.
    - Comfy dtype: STRING
    - Python dtype: str
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
- SVG
    - The SVG output is produced by this node.
    - Comfy dtype: SVG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
