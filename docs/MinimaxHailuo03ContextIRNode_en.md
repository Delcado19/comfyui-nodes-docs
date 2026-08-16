# Documentation
- Class name: MinimaxHailuo03ContextIRNode
- Category: partner/video/MiniMax
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Analyze text and media context with MiniMax H3 Context IR and produce an enhanced, structured video prompt. Feed the output into the prompt of a MiniMax H3 video node and attach the same media there in the same order, because the enhanced prompt refers to the attached media by position.

# Input types
## Required
- model
    - Model to use for prompt enhancement.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- first_frame
    - First frame of the video you intend to generate. Cannot be combined with reference media.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- last_frame
    - Last frame of the video you intend to generate. Cannot be combined with reference media.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
