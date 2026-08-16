# Documentation
- Class name: MiniMaxMusic3TextEncode
- Category: model/conditioning/minimax music
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Uses a MiniMax Music3 CLIP model to generate the acoustic conditioning sequence.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- caption
    - The caption input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- lyrics
    - The lyrics input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_duration
    - Maximum duration in seconds; the model can end the song earlier.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_scale
    - The cfg_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_k
    - The top_k input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- seconds
    - The seconds output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
