# Documentation
- Class name: TextEncodeHunyuanVideo_ImageToVideo
- Category: model/conditioning/hunyuan video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

TextEncodeHunyuanVideo_ImageToVideo is a ComfyUI node registered by `comfy_extras.nodes_hunyuan`. The live metadata did not provide a longer description.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- clip_vision_output
    - The clip_vision_output input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image_interleave
    - How much the image influences things vs the text prompt. Higher number means more influence from the text prompt.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
