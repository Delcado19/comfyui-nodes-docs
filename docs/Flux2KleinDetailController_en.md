# Documentation
- Class name: Flux2KleinDetailController
- Category: conditioning/flux2klein
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Flux.2Klein 9B Enhancement Nodes Suite

# Input types
## Required
- conditioning
    - The conditioning input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
## Optional
- front_mult
    - Multiplier for the FRONT section. With Sectioned Encoder upstream this is the actual front token range; otherwise it's the first 25% of active tokens (arbitrary).
    - Comfy dtype: FLOAT
    - Python dtype: float
- mid_mult
    - Multiplier for the MID section.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_mult
    - Multiplier for the END section.
    - Comfy dtype: FLOAT
    - Python dtype: float
- emphasis_start
    - Custom emphasis range start (token index).
    - Comfy dtype: INT
    - Python dtype: int
- emphasis_end
    - Custom emphasis range end (0 = disabled).
    - Comfy dtype: INT
    - Python dtype: int
- emphasis_mult
    - Multiplier applied inside [emphasis_start, emphasis_end).
    - Comfy dtype: FLOAT
    - Python dtype: float
- preserve_original
    - Linear blend back the unmodified active region. 0 = full effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- debug
    - The debug input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
