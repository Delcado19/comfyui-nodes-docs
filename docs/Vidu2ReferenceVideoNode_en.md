# Documentation
- Class name: Vidu2ReferenceVideoNode
- Category: partner/video/Vidu
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate a video from multiple reference images and a prompt.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- subjects
    - For each subject, provide up to 3 reference images (7 images total across all subjects). Reference them in prompts via @subject{subject_id}.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- prompt
    - When enabled, the video will include generated speech and background music based on the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- audio
    - When enabled video will contain generated speech and background music based on the prompt.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- movement_amplitude
    - The movement amplitude of objects in the frame.
    - Comfy dtype: COMBO
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
