# Documentation
- Class name: FluxProUltraImageNode
- Category: partner/image/BFL
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates images using Flux Pro 1.1 Ultra via api based on prompt and resolution.

# Input types
## Required
- prompt
    - Prompt for the image generation
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_upsampling
    - Whether to perform upsampling on the prompt. If active, automatically modifies the prompt for more creative generation, but results are nondeterministic (same seed will not produce exactly the same result).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The random seed used for creating the noise.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - Aspect ratio of image; must be between 1:4 and 4:1.
    - Comfy dtype: STRING
    - Python dtype: str
- raw
    - When True, generate less processed, more natural-looking images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image_prompt
    - The image_prompt input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_prompt_strength
    - Blend between the prompt and the image prompt.
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

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
