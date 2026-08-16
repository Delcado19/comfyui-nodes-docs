# Documentation
- Class name: ByteDanceSeedreamNode
- Category: partner/image/ByteDance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Unified text-to-image generation and precise single-sentence editing at up to 4K resolution.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- prompt
    - Text prompt for creating or editing an image.
    - Comfy dtype: STRING
    - Python dtype: str
- size_preset
    - Pick a recommended size. Select Custom to use the width and height below.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- image
    - Input image(s) for image-to-image generation. Reference image(s) for single or multi-reference generation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Custom width for image. Value is working only if `size_preset` is set to `Custom`
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Custom height for image. Value is working only if `size_preset` is set to `Custom`
    - Comfy dtype: INT
    - Python dtype: int
- sequential_image_generation
    - Group image generation mode. 'disabled' generates a single image. 'auto' lets the model decide whether to generate multiple related images (e.g., story scenes, character variations).
    - Comfy dtype: COMBO
    - Python dtype: object
- max_images
    - Maximum number of images to generate when sequential_image_generation='auto'. Total images (input + generated) cannot exceed 15.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
- watermark
    - Whether to add an "AI generated" watermark to the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fail_on_partial
    - If enabled, abort execution if any requested images are missing or return an error.
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
