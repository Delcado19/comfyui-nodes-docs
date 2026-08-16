# Documentation
- Class name: LumaVideoNode
- Category: partner/video/Luma
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates videos synchronously based on prompt and output_size.

# Input types
## Required
- prompt
    - Prompt for the video generation
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- loop
    - The loop input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - Seed to determine if node should re-run; actual results are nondeterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- luma_concepts
    - Optional Camera Concepts to dictate camera motion via the Luma Concepts node.
    - Comfy dtype: LUMA_CONCEPTS
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
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
