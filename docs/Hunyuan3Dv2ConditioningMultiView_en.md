# Documentation
- Class name: Hunyuan3Dv2ConditioningMultiView
- Category: model/conditioning/hunyuan 3d
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Hunyuan3Dv2ConditioningMultiView is a ComfyUI node registered by `comfy_extras.nodes_hunyuan3d`. The live metadata did not provide a longer description.

# Input types
## Optional
- front
    - The front input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- left
    - The left input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- back
    - The back input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- right
    - The right input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
