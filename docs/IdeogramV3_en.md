# Documentation
- Class name: IdeogramV3
- Category: partner/image/Ideogram
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates images using the Ideogram V3 model. Supports both regular image generation from text prompts and image editing with mask.

# Input types
## Required
- prompt
    - Prompt for the image generation or editing
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image
    - Optional reference image for image editing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Optional mask for inpainting (white areas will be replaced)
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- aspect_ratio
    - The aspect ratio for image generation. Ignored if resolution is not set to Auto.
    - Comfy dtype: COMBO
    - Python dtype: object
- resolution
    - The resolution for image generation. If not set to Auto, this overrides the aspect_ratio setting.
    - Comfy dtype: COMBO
    - Python dtype: object
- magic_prompt_option
    - Determine if MagicPrompt should be used in generation
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- num_images
    - The num_images input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- rendering_speed
    - Controls the trade-off between generation speed and quality
    - Comfy dtype: COMBO
    - Python dtype: object
- character_image
    - Image to use as character reference.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- character_mask
    - Optional mask for character reference image.
    - Comfy dtype: MASK
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
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
