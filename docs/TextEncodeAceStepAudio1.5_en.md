# Documentation
- Class name: TextEncodeAceStepAudio1.5
- Category: model/conditioning/ace
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

TextEncodeAceStepAudio1.5 is a ComfyUI node registered by `comfy_extras.nodes_ace`. The live metadata did not provide a longer description.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- tags
    - The tags input is used by this node during execution.
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
- bpm
    - The bpm input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- timesignature
    - The timesignature input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- language
    - The language input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- keyscale
    - The keyscale input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- generate_audio_codes
    - Enable the LLM that generates audio codes. This can be slow but will increase the quality of the generated audio. Turn this off if you are giving the model an audio reference.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cfg_scale
    - The cfg_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - The top_p input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_k
    - The top_k input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- min_p
    - The min_p input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

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
