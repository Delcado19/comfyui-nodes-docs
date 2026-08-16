# Documentation
- Class name: TopazImageEnhance
- Category: partner/image/Topaz
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Industry-standard upscaling and image enhancement.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- prompt
    - Optional text prompt for creative upscaling guidance.
    - Comfy dtype: STRING
    - Python dtype: str
- subject_detection
    - The subject_detection input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- face_enhancement
    - Enhance faces (if present) during processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- face_enhancement_creativity
    - Set the creativity level for face enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- face_enhancement_strength
    - Controls how sharp enhanced faces are relative to the background.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_to_fill
    - By default, the image is letterboxed when the output aspect ratio differs. Enable to crop the image to fill the output dimensions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- output_width
    - Zero value means to calculate automatically (usually it will be original size or output_height if specified).
    - Comfy dtype: INT
    - Python dtype: int
- output_height
    - Zero value means to output in the same height as original or output width.
    - Comfy dtype: INT
    - Python dtype: int
- creativity
    - The creativity input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- face_preservation
    - Preserve subjects' facial identity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- color_preservation
    - Preserve the original colors.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
