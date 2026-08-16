# Documentation
- Class name: Flux2KleinTextEnhancer
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
- magnitude
    - Scale text embeddings. <1=weaker prompt, >1=stronger
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- contrast
    - Token differentiation. >0=sharper, <0=blended
    - Comfy dtype: FLOAT
    - Python dtype: float
- normalize_strength
    - Equalize token magnitudes
    - Comfy dtype: FLOAT
    - Python dtype: float
- skip_bos
    - Skip token 0 (BOS token with huge norm)
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
