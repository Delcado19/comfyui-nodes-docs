# Documentation
- Class name: RecraftReplaceBackgroundNode
- Category: partner/image/Recraft
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Replace background on image, based on provided prompt.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - Prompt for the image generation.
    - Comfy dtype: STRING
    - Python dtype: str
- n
    - The number of images to generate.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed to determine if node should re-run; actual results are nondeterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- recraft_style
    - The recraft_style input is used by this node during execution.
    - Comfy dtype: RECRAFT_V3_STYLE
    - Python dtype: object
- negative_prompt
    - An optional text description of undesired elements on an image.
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

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
