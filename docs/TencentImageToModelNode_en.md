# Documentation
- Class name: TencentImageToModelNode
- Category: partner/3d/Tencent
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Hunyuan3D: Image(s) to Model is a ComfyUI node registered by `comfy_api_nodes.nodes_hunyuan3d`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The LowPoly option is unavailable for the `3.1` model.
    - Comfy dtype: COMBO
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- face_count
    - The face_count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- generate_type
    - The generate_type input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image_left
    - The image_left input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_right
    - The image_right input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_back
    - The image_back input is used by this node during execution.
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
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- model_file
    - The model_file output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- GLB
    - The GLB output is produced by this node.
    - Comfy dtype: FILE_3D_GLB
    - Python dtype: object
- OBJ
    - The OBJ output is produced by this node.
    - Comfy dtype: FILE_3D_OBJ
    - Python dtype: object
- texture_image
    - The texture_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- optional_metallic
    - The optional_metallic output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- optional_normal
    - The optional_normal output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- optional_roughness
    - The optional_roughness output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
